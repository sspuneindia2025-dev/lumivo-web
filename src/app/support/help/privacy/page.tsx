import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Help",
  description:
    "Learn how privacy controls, blocking, visibility and account safety work on Lumivo.",
};

interface PrivacyTopic {
  title: string;
  description: string;
  steps: string[];
}

const privacyTopics: PrivacyTopic[] = [
  {
    title: "Control who can interact with you",
    description:
      "Use Lumivo privacy and safety controls to manage interactions with other people.",
    steps: [
      "Open your profile settings.",
      "Review available privacy and interaction controls.",
      "Update the settings that match your preferences.",
    ],
  },
  {
    title: "Block a creator",
    description:
      "Blocking helps prevent unwanted interaction and removes blocked creators from your experience.",
    steps: [
      "Open the creator's profile or content menu.",
      "Choose Block creator.",
      "Confirm the action when prompted.",
    ],
  },
  {
    title: "Unblock a creator",
    description:
      "You can review and manage blocked accounts from your account settings.",
    steps: [
      "Open Settings from your profile.",
      "Go to Blocked users.",
      "Choose the account and confirm Unblock.",
    ],
  },
  {
    title: "Manage collection visibility",
    description:
      "Choose whether a collection is private or visible to other people.",
    steps: [
      "Open Saved from your profile.",
      "Select the collection you want to update.",
      "Edit the collection visibility and save.",
    ],
  },
  {
    title: "Report privacy concerns",
    description:
      "Report content, accounts or interactions that may violate Lumivo policies.",
    steps: [
      "Open the relevant content or account menu.",
      "Choose Report.",
      "Select the closest reason and submit the report.",
    ],
  },
  {
    title: "Protect your account",
    description:
      "Keep your account secure by using strong credentials and reviewing suspicious activity.",
    steps: [
      "Use a unique password for Lumivo.",
      "Do not share sign-in codes or passwords.",
      "Contact support if you notice unexpected account activity.",
    ],
  },
];

const quickAnswers = [
  {
    question: "Does blocking notify the other person?",
    answer:
      "Lumivo does not send a direct notification when you block an account.",
  },
  {
    question: "Can blocked creators see my content?",
    answer:
      "Blocking is designed to restrict interaction and visibility between accounts, subject to product behaviour and content availability.",
  },
  {
    question: "Can I make a collection private?",
    answer:
      "Yes. Collection visibility can be changed from the collection settings.",
  },
  {
    question: "What should I do about suspicious activity?",
    answer:
      "Change your password, review account access and contact Lumivo Support as soon as possible.",
  },
];

/**
 * Renders the Lumivo privacy help page.
 *
 * @return {ReactNode} Privacy help page.
 */
export default function PrivacyHelpPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <PrivacyBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delayMs={40}>
              <nav aria-label="Breadcrumb" className="flex justify-center">
                <ol className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white/35">
                  <li>
                    <Link
                      href="/support"
                      className="transition hover:text-white/70"
                    >
                      Support
                    </Link>
                  </li>

                  <li aria-hidden="true">/</li>

                  <li>
                    <Link
                      href="/support/help"
                      className="transition hover:text-white/70"
                    >
                      Help Center
                    </Link>
                  </li>

                  <li aria-hidden="true">/</li>

                  <li className="text-cyan-100/75">Privacy</li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Privacy and account safety
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={170}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Control your
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  Lumivo experience.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Learn how to manage privacy controls, block accounts,
                update collection visibility and report safety concerns.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              {privacyTopics.map((topic, index) => (
                <Reveal
                  key={topic.title}
                  delayMs={60 + index * 55}
                  distancePx={24}
                >
                  <PrivacyTopicCard topic={topic} />
                </Reveal>
              ))}
            </div>

            <aside className="space-y-5">
              <Reveal delayMs={100} direction="left">
                <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">
                    Quick answers
                  </p>

                  <div className="mt-6 space-y-5">
                    {quickAnswers.map((item) => (
                      <div
                        key={item.question}
                        className="border-b border-white/[0.07] pb-5 last:border-b-0 last:pb-0"
                      >
                        <h2 className="text-sm font-bold leading-6 text-white">
                          {item.question}
                        </h2>

                        <p className="mt-2 text-sm leading-7 text-white/40">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={170} direction="left">
                <div className="rounded-[2rem] border border-cyan-300/12 bg-gradient-to-br from-cyan-400/[0.08] via-violet-500/[0.07] to-fuchsia-500/[0.06] p-7 backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/65">
                    Need help now?
                  </p>

                  <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                    Contact Lumivo Support.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/42">
                    Share clear details if you are experiencing account
                    access problems, harassment or suspicious activity.
                  </p>

                  <Link
                    href="/support/contact"
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                  >
                    Contact support
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>

          <Reveal delayMs={180}>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/[0.08] bg-white/[0.035] px-6 py-6 text-center backdrop-blur-2xl sm:flex-row sm:text-left">
              <div>
                <p className="m-0 text-sm font-bold text-white">
                  Looking for another help topic?
                </p>

                <p className="m-0 mt-2 text-sm leading-6 text-white/38">
                  Return to the Help Center to browse all categories.
                </p>
              </div>

              <Link
                href="/support/help"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
              >
                Back to Help Center
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

interface PrivacyTopicCardProps {
  topic: PrivacyTopic;
}

function PrivacyTopicCard({
  topic,
}: PrivacyTopicCardProps): ReactNode {
  return (
    <article className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
          <ShieldIcon />
        </span>

        <div>
          <h2 className="text-xl font-bold tracking-[-0.03em] text-white">
            {topic.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/42">
            {topic.description}
          </p>
        </div>
      </div>

      <ol className="mt-6 space-y-3">
        {topic.steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-3 text-sm leading-7 text-white/44"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/15 bg-violet-300/[0.07] text-[0.65rem] font-bold text-violet-100">
              {index + 1}
            </span>

            {step}
          </li>
        ))}
      </ol>
    </article>
  );
}

function PrivacyBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.08] blur-[150px]" />
      <div className="absolute right-[-14rem] top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.1] blur-[150px]" />
      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />
    </div>
  );
}

function ShieldIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M12 3.5 19 6v5.3c0 4.3-2.7 8-7 9.7-4.3-1.7-7-5.4-7-9.7V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m8.7 12.1 2.2 2.2 4.5-4.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}