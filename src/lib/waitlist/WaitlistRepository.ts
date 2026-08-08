import {FirebaseError} from "firebase/app";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import {db} from "@/lib/firebase";

const WAITLIST_COLLECTION = "websiteWaitlist";

export interface WaitlistSignupInput {
  email: string;
  source?: string;
}

export interface WaitlistSignupResult {
  email: string;
  signupId: string;
  alreadySubscribed: boolean;
}

/**
 * Stores one normalized Lumivo waitlist signup in Firestore.
 *
 * A SHA-256 digest of the normalized email is used as the document ID,
 * preventing the email address from being exposed in Firestore paths.
 *
 * Firestore intentionally permits public creates but denies public reads
 * and updates for waitlist records. Because an existing email resolves to
 * the same deterministic document ID, a repeat submission is rejected by
 * Firestore as a permission-denied write. After the public create path has
 * been validated, that response is treated as an existing subscription so
 * users can safely resubmit without exposing waitlist records publicly.
 *
 * @param {WaitlistSignupInput} input Waitlist signup details.
 * @return {Promise<WaitlistSignupResult>} Stored or existing signup identity.
 */
export async function createWaitlistSignup(
  input: WaitlistSignupInput,
): Promise<WaitlistSignupResult> {
  const email = normalizeEmail(input.email);

  if (!isValidEmail(email)) {
    throw new WaitlistRepositoryError(
      "INVALID_EMAIL",
      "Enter a valid email address.",
    );
  }

  const signupId = await hashEmail(email);
  const signupReference = doc(
    db,
    WAITLIST_COLLECTION,
    signupId,
  );

  try {
    await setDoc(signupReference, {
      email,
      emailHash: signupId,
      source: normalizeSource(input.source),
      status: "subscribed",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return {
      email,
      signupId,
      alreadySubscribed: false,
    };
  } catch (error: unknown) {
    if (isExistingSignupWriteRejection(error)) {
      return {
        email,
        signupId,
        alreadySubscribed: true,
      };
    }

    throw new WaitlistRepositoryError(
      "UNAVAILABLE",
      "We couldn't save your signup right now. Please try again.",
    );
  }
}

/**
 * Repository error with a stable machine-readable code.
 */
export class WaitlistRepositoryError extends Error {
  readonly code: "INVALID_EMAIL" | "UNAVAILABLE";

  constructor(
    code: "INVALID_EMAIL" | "UNAVAILABLE",
    message: string,
  ) {
    super(message);
    this.name = "WaitlistRepositoryError";
    this.code = code;
  }
}

/**
 * Determines whether Firestore rejected a deterministic waitlist write
 * because the create-only document already exists.
 *
 * The deployed waitlist rules permit anonymous create operations and deny
 * reads and updates. A repeat email therefore reaches the same document ID
 * and is rejected as permission-denied instead of exposing the record.
 *
 * @param {unknown} error Firestore write failure.
 * @return {boolean} Whether the failure represents an existing signup.
 */
function isExistingSignupWriteRejection(
  error: unknown,
): boolean {
  return (
    error instanceof FirebaseError &&
    error.code === "permission-denied"
  );
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function normalizeSource(source?: string): string {
  const normalizedSource = source?.trim().toLowerCase();

  return normalizedSource || "website_waitlist";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function hashEmail(email: string): Promise<string> {
  if (
    typeof globalThis.crypto === "undefined" ||
    typeof globalThis.crypto.subtle === "undefined"
  ) {
    throw new WaitlistRepositoryError(
      "UNAVAILABLE",
      "Waitlist signup is temporarily unavailable.",
    );
  }

  const encodedEmail = new TextEncoder().encode(email);
  const digest = await globalThis.crypto.subtle.digest(
    "SHA-256",
    encodedEmail,
  );

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}