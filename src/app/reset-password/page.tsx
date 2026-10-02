"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  confirmPasswordReset,
  verifyPasswordResetCode,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

type ResetState = "checking" | "ready" | "saving" | "success" | "invalid";

export default function ResetPasswordPage() {
  const [state, setState] = useState<ResetState>("checking");
  const [actionCode, setActionCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const oobCode = params.get("oobCode");

    if (mode !== "resetPassword" || !oobCode) {
      queueMicrotask(() => setState("invalid"));
      return;
    }

    queueMicrotask(() => setActionCode(oobCode));

    verifyPasswordResetCode(auth, oobCode)
      .then((accountEmail) => {
        setEmail(accountEmail);
        setState("ready");
      })
      .catch(() => {
        setState("invalid");
      });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!actionCode) {
      setState("invalid");
      return;
    }

    setState("saving");

    try {
      await confirmPasswordReset(auth, actionCode, password);
      setPassword("");
      setConfirmPassword("");
      setState("success");
    } catch {
      setErrorMessage(
        "We could not reset your password. The reset link may have expired or already been used."
      );
      setState("ready");
    }
  }

  return (
    <main className="min-h-screen bg-[#070814] text-white">
      <section className="container mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Lumivo Account
            </p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Reset your password
            </h1>
            <p className="mt-3 text-white/65">
              Choose a new password for your Lumivo account.
            </p>
          </div>

          {state === "checking" && (
            <div
              className="rounded-2xl border border-white/10 bg-black/20 p-5 text-white/70"
              role="status"
            >
              Checking your reset link...
            </div>
          )}

          {state === "invalid" && (
            <div>
              <div
                className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5"
                role="alert"
              >
                <h2 className="font-bold text-red-200">
                  This reset link is invalid or has expired
                </h2>
                <p className="mt-2 text-sm text-white/65">
                  Request a new password reset from the Lumivo app and use the
                  most recent email you receive.
                </p>
              </div>

              <Link
                href="/support/help/account"
                className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
              >
                Account help
              </Link>
            </div>
          )}

          {(state === "ready" || state === "saving") && (
            <form onSubmit={handleSubmit}>
              {email && (
                <div className="mb-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    Account
                  </p>
                  <p className="mt-1 break-all text-sm text-white/80">{email}</p>
                </div>
              )}

              <label className="block">
                <span className="text-sm font-semibold text-white/85">
                  New password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={6}
                  required
                  disabled={state === "saving"}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/60"
                  placeholder="Enter a new password"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-white/85">
                  Confirm new password
                </span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={6}
                  required
                  disabled={state === "saving"}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/60"
                  placeholder="Re-enter your new password"
                />
              </label>

              {errorMessage && (
                <p
                  className="mt-4 rounded-2xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-200"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "saving"}
                className="mt-7 w-full rounded-full bg-cyan-500 px-6 py-3.5 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === "saving" ? "Updating password..." : "Reset password"}
              </button>
            </form>
          )}

          {state === "success" && (
            <div>
              <div
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5"
                role="status"
              >
                <h2 className="font-bold text-emerald-200">
                  Password updated successfully
                </h2>
                <p className="mt-2 text-sm text-white/65">
                  Your Lumivo password has been changed. You can now return to
                  the Lumivo app and sign in with your new password.
                </p>
              </div>

              <Link
                href="/support/help/account"
                className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
              >
                Account help
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
