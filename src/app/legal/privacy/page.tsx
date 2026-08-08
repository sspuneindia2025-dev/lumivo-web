import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lumivo",
  description: "Learn how Lumivo collects, uses and protects your information.",
};

const sections = [
  ["Information We Collect","Account information, creator content, device details and usage data."],
  ["How We Use Information","To operate, secure and improve Lumivo and provide support."],
  ["Cookies & Analytics","We may use cookies and analytics technologies where applicable."],
  ["Security","We use technical and organizational measures to protect user data."],
  ["Your Rights","You can access, update or request deletion of eligible information."],
  ["Contact","Contact Lumivo Support for privacy-related questions."],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#070814] text-white">
      <section className="container mx-auto max-w-5xl px-6 py-20">
        <Link href="/" className="text-cyan-300">← Back to Home</Link>
        <h1 className="mt-6 text-5xl font-extrabold">Privacy Policy</h1>
        <p className="mt-4 text-white/70">
          This policy explains how Lumivo handles your information.
        </p>
        <div className="mt-10 space-y-6">
          {sections.map(([title,body])=>(
            <section key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-white/70">{body}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}