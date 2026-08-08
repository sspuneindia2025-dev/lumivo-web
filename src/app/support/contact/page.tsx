import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support | Lumivo",
  description: "Contact the Lumivo Support team.",
};

const options = [
  {title:"Account & Login",desc:"Help with sign-in, verification and recovery."},
  {title:"Billing & Premium",desc:"Subscriptions, payments and refunds."},
  {title:"Trust & Safety",desc:"Reports, appeals and policy questions."},
  {title:"Technical Issues",desc:"App crashes, uploads and playback problems."},
];

export default function ContactSupportPage() {
  return (
    <main className="min-h-screen bg-[#070814] text-white">
      <section className="container mx-auto max-w-5xl px-6 py-20">
        <Link href="/support" className="text-cyan-300 hover:text-cyan-200">
          ← Back to Support
        </Link>

        <h1 className="mt-6 text-5xl font-extrabold">Contact Lumivo Support</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Our support team is here to help with your account, creator journey,
          premium subscription and Trust &amp; Safety questions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {options.map((o) => (
            <div key={o.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">{o.title}</h2>
              <p className="mt-2 text-white/65">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
          <h2 className="text-2xl font-bold">Response Times</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70">
            <li>General support: within 24–48 hours</li>
            <li>Premium subscribers: priority handling</li>
            <li>Safety reports: reviewed as quickly as possible</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/support/help" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black">
            Browse Help Center
          </Link>
          <Link href="/support/help/safety" className="rounded-full border border-white/20 px-6 py-3">
            Trust &amp; Safety
          </Link>
        </div>
      </section>
    </main>
  );
}