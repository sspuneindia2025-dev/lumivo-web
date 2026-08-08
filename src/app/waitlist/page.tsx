"use client";

import Link from "next/link";
import {useState} from "react";
import type {FormEvent, ReactNode} from "react";

import {
  createWaitlistSignup,
  WaitlistRepositoryError,
} from "@/lib/waitlist/WaitlistRepository";

const benefits = [
  "Google Play launch notification",
  "Early product updates",
  "Creator feature announcements",
  "Important release information",
];

/**
 * Renders the Lumivo pre-launch waitlist page.
 *
 * @return {ReactNode} Interactive Firestore-backed launch waitlist page.
 */
export default function WaitlistPage(): ReactNode {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await createWaitlistSignup({
        email,
        source: "website_waitlist_page",
      });

      setSubmittedEmail(result.email);
      setEmail("");
      setIsSubmitted(true);
    } catch (error: unknown) {
      if (error instanceof WaitlistRepositoryError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          "We couldn't save your signup right now. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm(): void {
    setEmail("");
    setSubmittedEmail("");
    setErrorMessage("");
    setIsSubmitted(false);
  }

  return (
    <main className="relative isolate min-h-[calc(100vh-142px)] overflow-hidden bg-[#060813]">
      <WaitlistBackground />

      <section className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-100/75">
                  Google Play pre-launch
                </p>
              </div>

              <h1 className="mt-6 max-w-[11ch] text-4xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                Be first to know
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  when Lumivo launches.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Join the Lumivo launch list and receive the official
                Google Play release announcement, creator updates and
                important product news.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 text-sm leading-6 text-white/48 backdrop-blur-xl"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                      <CheckIcon />
                    </span>

                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2.25rem] border border-white/[0.1] bg-white/[0.045] p-6 shadow-[0_34px_110px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:p-8">
              {isSubmitted ? (
                <div
                  aria-live="polite"
                  className="py-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-100">
                    <CheckIcon large />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200/70">
                    You&apos;re on the list
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white">
                    Thanks for joining Lumivo.
                  </h2>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/42">
                    We&apos;ll notify{" "}
                    <span className="font-semibold text-white/70">
                      {submittedEmail}
                    </span>{" "}
                    when the official Google Play release is ready.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-bold text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    Add another email
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                    Join the launch list
                  </p>

                  <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                    Get the official launch update.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/42">
                    Enter your email and we&apos;ll notify you when
                    Lumivo becomes available on Google Play.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="waitlist-email"
                        className="text-xs font-bold uppercase tracking-[0.14em] text-white/40"
                      >
                        Email address
                      </label>

                      <input
                        id="waitlist-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setErrorMessage("");
                        }}
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-invalid={errorMessage ? true : undefined}
                        aria-describedby={
                          errorMessage
                            ? "waitlist-error"
                            : "waitlist-consent"
                        }
                        disabled={isSubmitting}
                        className="mt-3 min-h-12 w-full rounded-2xl border border-white/[0.09] bg-black/15 px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35 focus:ring-2 focus:ring-cyan-300/10 disabled:cursor-wait disabled:opacity-60"
                      />
                    </div>

                    {errorMessage ? (
                      <p
                        id="waitlist-error"
                        role="alert"
                        className="rounded-2xl border border-rose-300/15 bg-rose-300/[0.06] px-4 py-3 text-xs leading-6 text-rose-100/80"
                      >
                        {errorMessage}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
                      />

                      <span className="relative inline-flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner />
                            Joining...
                          </>
                        ) : (
                          "Notify me at launch"
                        )}
                      </span>
                    </button>
                  </form>

                  <p
                    id="waitlist-consent"
                    className="mt-4 text-xs leading-6 text-white/32"
                  >
                    By joining, you agree to receive Lumivo launch and
                    product updates. You can unsubscribe at any time.
                    Review our{" "}
                    <Link
                      href="/legal/privacy"
                      className="font-semibold text-cyan-100/70 transition hover:text-cyan-100"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </>
              )}

              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/download"
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.04] px-4 text-xs font-bold text-white/55 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    View launch status
                  </Link>

                  <Link
                    href="/features"
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.04] px-4 text-xs font-bold text-white/55 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    Explore features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WaitlistBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.09] blur-[150px]" />
      <div className="absolute right-[-14rem] top-[14%] h-[36rem] w-[36rem] rounded-full bg-violet-500/[0.13] blur-[155px]" />
      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.08] blur-[145px]" />
    </div>
  );
}

interface CheckIconProps {
  large?: boolean;
}

function CheckIcon({
  large = false,
}: CheckIconProps): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={large ? "h-7 w-7" : "h-3.5 w-3.5"}
    >
      <path
        d="m7 12.5 3.2 3.2L17 8.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LoadingSpinner(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        className="opacity-25"
      />

      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}