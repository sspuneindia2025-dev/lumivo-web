import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Safety Help",
  description:
    "Learn how to stay safe on Lumivo, protect your account, recognize scams, block users and report abusive behaviour.",
};

interface SafetyTopic {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
}

const safetyTopics: SafetyTopic[] = [
  {
    title: "Protect your account",
    description:
      "Strong account habits reduce the risk of unauthorized access and help keep your profile secure.",
    points: [
      "Use a unique password for Lumivo.",
      "Never share passwords or sign-in codes.",
      "Contact support if you notice unexpected activity.",
    ],
    icon: <LockIcon />,
  },
  {
    title: "Recognize scams",
    description:
      "Be cautious of messages or profiles asking for money, passwords, payment details or urgent action.",
    points: [
      "Do not send money to unknown people.",
      "Avoid suspicious links and attachments.",
      "Report accounts making fraudulent offers.",
    ],
    icon: <AlertIcon />,
  },
  {
    title: "Block unwanted accounts",
    description:
      "Blocking can help stop further interaction with an account that is harassing, threatening or unwanted.",
    points: [
      "Open the account profile or content menu.",
      "Choose Block creator.",
      "Review blocked accounts from Settings.",
    ],
    icon: <BlockIcon />,
  },
  {
    title: "Report abusive behaviour",
    description:
      "Use reporting tools when content, comments, profiles or messages may violate Lumivo rules.",
    points: [
      "Choose the closest available report reason.",
      "Include enough context for accurate review.",
      "Contact local emergency services for immediate danger.",
    ],
    icon: <ReportIcon />,
  },
  {
    title: "Protect personal information",
    description:
      "Avoid sharing details that could expose your identity, location, finances or private life.",
    points: [
      "Do not post passwords or financial information.",
      "Avoid sharing precise location details publicly.",
      "Review collection and profile visibility settings.",
    ],
    icon: <PrivacyIcon />,
  },
  {
    title: "Manage interactions",
    description:
      "Use privacy, blocking and reporting controls to shape a safer experience.",
    points: [
      "Review who can interact with you.",
      "Unfollow or block accounts when needed.",
      "Report repeated harassment or threats.",
    ],
    icon: <ControlIcon />,
  },
];

const safetyChecklist = [
  {
    title: "Pause before responding",
    description:
      "Do not let urgency or pressure push you into sharing information or sending money.",
  },
  {
    title: "Verify unusual requests",
    description:
      "Use trusted contact methods to confirm whether a request is genuine.",
  },
  {
    title: "Keep evidence",
    description:
      "Preserve usernames, timestamps and relevant details for serious incidents.",
  },
  {
    title: "Use the right support path",
    description:
      "Use in-app reporting, Lumivo Support or emergency services depending on the situation.",
  },
];

const urgentScenarios = [
  "Threats of immediate physical harm",
  "Sexual exploitation or abuse involving a minor",
  "Active fraud causing financial loss",
  "Stalking, doxxing or publication of private information",
];

/**
 * Renders the Lumivo safety help page.
 *
 * @return {ReactNode} Safety help page.
 */
export default function SafetyHelpPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <SafetyBackground />

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
                    Safety
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Safety help
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={170}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Stay aware.
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  Protect your experience.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Learn how to protect your account, recognize scams,
                block unwanted users, manage privacy and report abusive
                behaviour.
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
                Safety essentials
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Practical steps for a safer Lumivo experience
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                Use account protection, blocking, privacy and reporting
                tools together when something feels unsafe.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {safetyTopics.map((topic, index) => (
              <Reveal
                key={topic.title}
                delayMs={70 + index * 60}
                distancePx={26}
              >
                <SafetyTopicCard topic={topic} />
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
                      Safety checklist
                    </p>

                    <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      Slow down and verify before you act
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/42">
                      Scams and abusive behaviour often rely on urgency,
                      pressure or fear. Taking a moment to verify can
                      reduce risk.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] bg-black/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {safetyChecklist.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5"
                      >
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-white/38">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal delayMs={180}>
              <div className="rounded-[2rem] border border-rose-300/12 bg-rose-400/[0.045] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200/65">
                  Urgent safety situations
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Get immediate help when someone may be in danger.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  Lumivo reporting tools are not a replacement for
                  emergency services. Contact local authorities when
                  there is immediate danger.
                </p>

                <ul className="mt-6 space-y-3">
                  {urgentScenarios.map((scenario) => (
                    <li
                      key={scenario}
                      className="flex items-start gap-3 text-sm leading-7 text-white/42"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300/70" />
                      {scenario}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={230} direction="left">
              <div className="h-full rounded-[2rem] border border-violet-300/12 bg-gradient-to-br from-violet-500/[0.08] via-fuchsia-500/[0.06] to-cyan-400/[0.05] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                  Additional support
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Need help with a safety concern?
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  Contact Lumivo Support and include the username,
                  content, conversation or account details connected to
                  the issue.
                </p>

                <Link
                  href="/support/contact"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                >
                  Contact support
                </Link>

                <Link
                  href="/support/help/reporting"
                  className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                >
                  Learn about reporting
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

interface SafetyTopicCardProps {
  topic: SafetyTopic;
}

function SafetyTopicCard({
  topic,
}: SafetyTopicCardProps): ReactNode {
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

      <ul className="relative mt-6 space-y-3">
        {topic.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-xs leading-6 text-white/42"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/60" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SafetyBackground(): ReactNode {
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

function LockIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="5" y="10" width="14" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AlertIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="m12 3.5 9 16H3l9-16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 9v4M12 16.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

function ReportIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5 20V4M5 5h11l-2 3 2 3H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrivacyIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3.5 19 6v5.3c0 4.3-2.7 8-7 9.7-4.3-1.7-7-5.4-7-9.7V6l7-2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ControlIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M8 14v6M16 14v6M16 4v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}