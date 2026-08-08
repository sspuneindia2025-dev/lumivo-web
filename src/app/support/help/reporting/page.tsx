import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Reporting Help",
  description:
    "Learn how to report videos, comments, accounts and messages on Lumivo, and what happens after a report is submitted.",
};

interface ReportingTopic {
  title: string;
  description: string;
  steps: string[];
  icon: ReactNode;
}

const reportingTopics: ReportingTopic[] = [
  {
    title: "Report a video",
    description:
      "Use the video menu when a post may violate Lumivo's Community Guidelines or create a safety concern.",
    steps: [
      "Open the video menu.",
      "Choose Report.",
      "Select the closest reason and submit the report.",
    ],
    icon: <VideoIcon />,
  },
  {
    title: "Report a comment",
    description:
      "Report comments that contain harassment, hate, threats, spam or other prohibited content.",
    steps: [
      "Press and hold the comment or open its options.",
      "Choose Report comment.",
      "Select a reason and confirm the report.",
    ],
    icon: <CommentIcon />,
  },
  {
    title: "Report an account",
    description:
      "Report a profile when the account appears to be impersonating someone, scamming people or repeatedly violating platform rules.",
    steps: [
      "Open the account profile.",
      "Open the profile menu.",
      "Choose Report account and submit the reason.",
    ],
    icon: <AccountIcon />,
  },
  {
    title: "Report a message",
    description:
      "Use message reporting for harassment, threats, fraud, unwanted sexual content or other unsafe behaviour.",
    steps: [
      "Open the conversation.",
      "Press and hold the relevant message or open conversation options.",
      "Choose Report and complete the available prompts.",
    ],
    icon: <MessageIcon />,
  },
  {
    title: "Block after reporting",
    description:
      "Blocking can help stop further interaction while Lumivo reviews the reported activity.",
    steps: [
      "Open the account profile or content menu.",
      "Choose Block creator.",
      "Confirm the action when prompted.",
    ],
    icon: <BlockIcon />,
  },
  {
    title: "Preserve important information",
    description:
      "For serious threats, fraud or safety incidents, keep relevant details that may help support review.",
    steps: [
      "Keep the username and relevant content details.",
      "Record the date, time and surrounding context.",
      "Contact local emergency services when there is immediate danger.",
    ],
    icon: <EvidenceIcon />,
  },
];

const reviewSteps = [
  {
    number: "01",
    title: "Report received",
    description:
      "Lumivo records the selected reason and the content or account connected to the report.",
  },
  {
    number: "02",
    title: "Safety review",
    description:
      "The report is reviewed against platform rules, available context and relevant account history.",
  },
  {
    number: "03",
    title: "Action when needed",
    description:
      "Possible actions include no action, content removal, visibility limits, feature restrictions or account enforcement.",
  },
  {
    number: "04",
    title: "Ongoing protection",
    description:
      "Repeated or severe violations may lead to stronger restrictions, suspension or permanent account action.",
  },
];

const reportingPrinciples = [
  {
    title: "Reports are confidential",
    description:
      "Lumivo does not tell the reported person who submitted a standard in-app report.",
  },
  {
    title: "One clear report is enough",
    description:
      "Submitting repeated reports about the same issue does not necessarily make review faster.",
  },
  {
    title: "False reports may be abusive",
    description:
      "Do not use reporting tools to harass others, manipulate enforcement or target content you simply disagree with.",
  },
  {
    title: "Immediate danger needs urgent help",
    description:
      "Contact local emergency services when someone may be in immediate physical danger.",
  },
];

/**
 * Renders the Lumivo reporting help page.
 *
 * @return {ReactNode} Reporting help page.
 */
export default function ReportingHelpPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <ReportingBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delayMs={40}>
              <nav
                aria-label="Breadcrumb"
                className="flex justify-center"
              >
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

                  <li className="text-cyan-100/75">
                    Reporting
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Reporting help
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={170}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Report concerns.
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  Help protect the community.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Learn how to report videos, comments, accounts and
                messages, and understand what happens after a report is
                submitted.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="container">
          <Reveal delayMs={40}>
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">
                How to report
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Choose the report path that matches the issue
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                Select the closest available reason and provide enough
                context for the safety team to understand the concern.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reportingTopics.map((topic, index) => (
              <Reveal
                key={topic.title}
                delayMs={70 + index * 60}
                distancePx={26}
              >
                <ReportingTopicCard topic={topic} />
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
                <div className="relative px-7 py-9 sm:px-10 sm:py-11">
                  <div
                    aria-hidden="true"
                    className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.11] blur-[90px]"
                  />

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                      After you report
                    </p>

                    <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      How Lumivo reviews safety reports
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/42">
                      Review outcomes depend on the reported material,
                      surrounding context, severity and any relevant
                      history.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] bg-black/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {reviewSteps.map((step) => (
                      <div
                        key={step.number}
                        className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] text-[0.7rem] font-bold text-cyan-100">
                          {step.number}
                        </span>

                        <h3 className="mt-4 text-sm font-bold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-white/38">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <Reveal delayMs={180}>
              <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                  Reporting principles
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Use reporting tools accurately and responsibly.
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {reportingPrinciples.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-[1.4rem] border border-white/[0.08] bg-black/10 p-5"
                    >
                      <h3 className="text-sm font-bold text-white">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-white/38">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={230} direction="left">
              <div className="h-full rounded-[2rem] border border-violet-300/12 bg-gradient-to-br from-violet-500/[0.08] via-fuchsia-500/[0.06] to-cyan-400/[0.05] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                  Additional support
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Need help with a serious safety concern?
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  Contact Lumivo Support and include the account,
                  content or conversation details connected to the
                  concern.
                </p>

                <Link
                  href="/support/contact"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                >
                  Contact support
                </Link>

                <Link
                  href="/support/help"
                  className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                >
                  Back to Help Center
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

interface ReportingTopicCardProps {
  topic: ReportingTopic;
}

function ReportingTopicCard({
  topic,
}: ReportingTopicCardProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
        {topic.icon}
      </div>

      <h2 className="relative mt-7 text-xl font-bold tracking-[-0.03em] text-white">
        {topic.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {topic.description}
      </p>

      <ol className="relative mt-6 space-y-3">
        {topic.steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-3 text-xs leading-6 text-white/42"
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

function ReportingBackground(): ReactNode {
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

function VideoIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3.5" y="5" width="13" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16.5 10 4-2.5v9l-4-2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommentIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5.5 18.5 4 21l4.1-1.4c1.2.6 2.5.9 3.9.9 4.7 0 8.5-3.4 8.5-7.5S16.7 5.5 12 5.5 3.5 8.9 3.5 13c0 2.1.7 4 2 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function AccountIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5.5 18.5 4 21l4.1-1.4c1.2.6 2.5.9 3.9.9 4.7 0 8.5-3.4 8.5-7.5S16.7 5.5 12 5.5 3.5 8.9 3.5 13c0 2.1.7 4 2 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.5 13h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BlockIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m6 6 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function EvidenceIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M6 3.5h8l4 4V20H6V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3.5V8h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}