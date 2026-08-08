import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Lumivo",
  description: "Lumivo Terms of Service.",
};

const sections = [
  ["Acceptance","By using Lumivo you agree to these Terms."],
  ["Accounts","Keep your account secure and provide accurate information."],
  ["Creator Responsibilities","Upload only content you have the right to share."],
  ["Intellectual Property","Respect copyrights, trademarks and other rights."],
  ["Termination","Accounts may be restricted or terminated for policy violations."],
  ["Disclaimer","Services are provided subject to applicable law and these Terms."],
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#070814] text-white">
      <section className="container mx-auto max-w-5xl px-6 py-20">
        <Link href="/" className="text-cyan-300">← Back to Home</Link>
        <h1 className="mt-6 text-5xl font-extrabold">Terms of Service</h1>
        <p className="mt-4 text-white/70">
          These Terms govern your access to and use of Lumivo.
        </p>
        <div className="mt-10 space-y-6">
          {sections.map(([t,d])=>(
            <section key={t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">{t}</h2>
              <p className="mt-3 text-white/70">{d}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}