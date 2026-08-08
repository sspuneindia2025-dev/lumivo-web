import Link from "next/link";
import type {Metadata} from "next";
import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Community Guidelines Help",
  description:
    "Learn about Lumivo community standards, prohibited content, reporting and enforcement.",
};

interface GuidelineSection {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
}

const guidelineSections: GuidelineSection[] = [
  {
    title: "Respect people and communities",
    description:
      "Lumivo is designed for creative expression without harassment, threats or targeted abuse.",
    points: [
      "Do not threaten, harass or intimidate others.",
      "Do not target people with hateful or demeaning content.",
      "Respect personal boundaries and consent.",
    ],
    icon: <CommunityIcon />,
  },
  {
    title: "Keep content safe",
    description:
      "Content that promotes serious harm, exploitation or dangerous behaviour is not allowed.",
    points: [
      "Do not encourage violence or serious physical harm.",
      "Do not exploit or endanger minors.",
      "Do not promote dangerous challenges or harmful acts.",
    ],
    icon: <ShieldIcon />,
  },
  {
    title: "Share authentic content",
    description:
      "Creators should publish original, lawful and accurately represented content.",
    points: [
      "Avoid deceptive impersonation or misleading identity claims.",
      "Do not manipulate people through scams or fraudulent offers.",
      "Label edited or synthetic content when required.",
    ],
    icon: <SparkIcon />,
  },
  {
    title: "Respect intellectual property",
    description:
      "Only upload content you created or have permission to use.",
    points: [
      "Do not upload copyrighted material without permission.",
      "Use Lumivo copyright tools for rights-related concerns.",
      "Respond truthfully to copyright claims and counter-notices.",
    ],
    icon: <CopyrightIcon />,
  },
  {
    title: "Protect privacy",
    description:
      "Do not expose private information or use Lumivo to invade another person's privacy.",
    points: [
      "Do not share private identifying information without consent.",
      "Do not publish intimate content without permission.",
      "Use reporting tools for privacy and safety concerns.",
    ],
    icon: <LockIcon />,
  },
  {
    title: "Avoid spam and platform abuse",
    description:
      "Automated abuse, coordinated manipulation and disruptive behaviour can damage the community.",
    points: [
      "Do not use bots or scripts to manipulate engagement.",
      "Do not repeatedly post unwanted promotional content.",
      "Do not attempt to evade enforcement or account restrictions.",
    ],
    icon: <ControlIcon />,
  },
];

const enforcementSteps = [
  {
    number: "01",
    title: "Detection or report",
    description:
      "Potential violations may be identified through user reports, platform systems or administrative review.",
  },
  {
    number: "02",
    title: "Contextual review",
    description:
      "Lumivo reviews the content, account history, context and severity of the reported behaviour.",
  },
  {
    number: "03",
    title: "Proportionate action",
    description:
      "Actions may include content removal, reduced visibility, feature restrictions, suspension or permanent account action.",
  },
  {
    number: "04",
    title: "Appeal when available",
    description:
      "Eligible decisions may include an appeal path so additional context can be reviewed.",
  },
];

/**
 * Renders the Community Guidelines help page.
 *
 * @return {ReactNode} Community Guidelines help page.
 */
export default function CommunityGuidelinesHelpPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <GuidelinesBackground />

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
                    Community Guidelines
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Community Guidelines
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={170}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Create freely.
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  Participate responsibly.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                These standards explain the behaviour and content
                expected across Lumivo so creators and communities can
                connect safely and respectfully.
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
                Core standards
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                What Lumivo expects from everyone
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                These principles apply to videos, comments, profiles,
                messages, collections and other platform activity.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guidelineSections.map((section, index) => (
              <Reveal
                key={section.title}
                delayMs={70 + index * 60}
                distancePx={26}
              >
                <GuidelineCard section={section} />
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
                      Enforcement overview
                    </p>

                    <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      How Lumivo responds to violations
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/42">
                      Enforcement decisions consider severity, context,
                      repetition, intent and the potential risk to people
                      or the wider community.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] bg-black/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {enforcementSteps.map((step) => (
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

          <Reveal delayMs={220}>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                  Report a violation
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Help protect the community.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  Use in-app reporting tools to report content, comments
                  or accounts that may violate these standards.
                </p>

                <Link
                  href="/support/help/privacy"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/[0.07] px-5 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/[0.11]"
                >
                  Learn about reporting
                </Link>
              </div>

              <div className="rounded-[2rem] border border-violet-300/12 bg-gradient-to-br from-violet-500/[0.08] via-fuchsia-500/[0.06] to-cyan-400/[0.05] p-7 backdrop-blur-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                  Need support?
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Contact Lumivo Support.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  Contact support for account access, safety concerns
                  or questions about a moderation decision.
                </p>

                <Link
                  href="/support/contact"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] px-5 text-sm font-bold text-white/70 transition hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

interface GuidelineCardProps {
  section: GuidelineSection;
}

function GuidelineCard({
  section,
}: GuidelineCardProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
        {section.icon}
      </div>

      <h2 className="relative mt-7 text-xl font-bold tracking-[-0.03em] text-white">
        {section.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {section.description}
      </p>

      <ul className="relative mt-6 space-y-3">
        {section.points.map((point) => (
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

function GuidelinesBackground(): ReactNode {
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

function CommunityIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="8" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.5" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 19c.4-3.5 2-5.2 4.8-5.2s4.5 1.7 4.9 5.2M13.5 15.2c.8-.7 1.8-1.1 3.1-1.1 2.4 0 3.7 1.5 3.9 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3.5 19 6v5.3c0 4.3-2.7 8-7 9.7-4.3-1.7-7-5.4-7-9.7V6l7-2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m8.7 12.1 2.2 2.2 4.5-4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3.5c.6 4.5 3 6.9 7.5 7.5-4.5.6-6.9 3-7.5 7.5-.6-4.5-3-6.9-7.5-7.5C9 10.4 11.4 8 12 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function CopyrightIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.3 9.2A4.2 4.2 0 1 0 15.3 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
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

function ControlIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M8 14v6M16 14v6M16 4v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}