"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { applyActionCode, checkActionCode } from "firebase/auth";
import { auth } from "@/lib/firebase";

type ActionState = "checking" | "working" | "success" | "invalid";

export default function AuthActionPage() {
  const [state, setState] = useState<ActionState>("checking");
  const [title, setTitle] = useState("Checking your link");
  const [message, setMessage] = useState("Please wait while we validate your Lumivo account link.");

  useEffect(() => {
    let active = true;
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const code = params.get("oobCode");

    if (!code || !mode || !["verifyEmail", "recoverEmail", "resetPassword"].includes(mode)) {
      Promise.resolve().then(() => {
        if (!active) return;
        setTitle("Invalid account link");
        setMessage("This account link is incomplete or unsupported. Please request a new email from Lumivo.");
        setState("invalid");
      });
      return () => { active = false; };
    }

    if (mode === "resetPassword") {
      // The existing page already verifies the code and confirms the new password.
      window.location.replace(`/reset-password?${params.toString()}`);
      return;
    }

    const isRecovery = mode === "recoverEmail";
    Promise.resolve().then(() => {
      if (!active) return;
      setState("working");
      setTitle(isRecovery ? "Restoring your email" : "Verifying your email");
    });

    // Validate the action code before applying it; Firebase enforces one-time use.
    checkActionCode(auth, code)
      .then(() => applyActionCode(auth, code))
      .then(() => {
        if (!active) return;
        setTitle(isRecovery ? "Email restored" : "Email verified");
        setMessage(isRecovery
          ? "Your previous email address has been restored. You can return to the Lumivo app. For account security, review your password and recent account activity."
          : "Your email address has been verified. You can return to the Lumivo app.");
        setState("success");
      })
      .catch(() => {
        if (!active) return;
        setTitle("Link expired or invalid");
        setMessage("This link may have expired or already been used. Please request a new account email from Lumivo.");
        setState("invalid");
      });

    return () => { active = false; };
  }, []);

  return (
    <main className="min-h-screen bg-[#070814] text-white">
      <section className="container mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Lumivo Account</p>
          <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">{title}</h1>
          <div role={state === "invalid" ? "alert" : "status"} aria-live="polite"
            className={`mt-6 rounded-2xl border p-5 text-sm ${state === "invalid" ? "border-red-400/20 bg-red-400/5 text-red-200" : state === "success" ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-100" : "border-white/10 bg-black/20 text-white/70"}`}>
            {message}
          </div>
          {(state === "success" || state === "invalid") && (
            <Link href="/support/help/account" className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5">Account help</Link>
          )}
        </div>
      </section>
    </main>
  );
}
