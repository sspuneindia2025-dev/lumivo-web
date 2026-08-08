import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Copyright Help",
  description:
    "Learn how copyright reporting, claim review, counter-notices and creator responsibilities work on Lumivo.",
};

interface CopyrightSection {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
}

const copyrightSections: CopyrightSection[] = [
  {
    title: "Upload only authorised content",
    description:
      "Creators are responsible for ensuring they have the rights or permission needed for every video, image, audio track and other work they publish.",
    points: [
      "Create original content whenever possible.",
      "Use licensed material only within the permitted terms.",
      "Keep records of licences, permissions and ownership.",
    ],
    icon: <CreatorIcon />,
  },
  {
    title: "Report possible infringement",
    description:
      "Rights holders or authorised representatives can submit a copyright claim when protected work appears on Lumivo without permission.",
    points: [
      "Identify the protected work clearly.",
      "Provide the location of the content on Lumivo.",
      "Include accurate ownership and contact information.",
    ],
    icon: <ReportIcon />,
  },
  {
    title: "Provide supporting evidence",
    description:
      "Clear evidence helps Lumivo review claims efficiently and reduces unnecessary delays.",
    points: [
      "Provide relevant registration, licence or ownership records.",
      "Explain how the Lumivo content uses the protected work.",
      "Submit truthful and complete information.",
    ],
    icon: <EvidenceIcon />,
  },
  {
    title: "Respond to a claim",
    description:
      "Creators may receive notice when content is restricted or removed following a copyright report.",
    points: [
      "Review the claim and identified material carefully.",
      "Do not re-upload content simply to avoid enforcement.",
      "Use the available response or appeal path when appropriate.",
    ],
    icon: <ResponseIcon />,
  },
  {
    title: "Submit a counter-notice",
    description:
      "A counter-notice may be available when a creator believes content was removed because of an error or misidentification.",
    points: [
      "Explain why the removal may be incorrect.",
      "Provide accurate identity and contact information.",
      "Understand that the information may be shared as part of the process.",
    ],
    icon: <CounterIcon />,
  },
  {
    title: "Repeated infringement",
    description:
      "Accounts associated with repeated or serious copyright violations may face additional restrictions or permanent action.",
    points: [
      "Resolve copyright concerns promptly.",
      "Avoid repeated uploads of disputed material.",
      "Maintain reliable records for third-party content.",
    ],
    icon: <ShieldIcon />,
  },
];

const claimProcess = [
  {
    number: "01",
    title: "Claim submitted",
    description:
      "The claimant provides ownership, contact, target and supporting evidence information.",
  },
  {
    number: "02",
    title: "Initial review",
    description:
      "Lumivo checks whether the submission is complete and identifies the affected content.",
  },
  {
    number: "03",
    title: "Action or further review",
    description:
      "Content may remain available, be restricted, muted or removed depending on the available information.",
  },
  {
    number: "04",
    title: "Creator response",
    description:
      "The affected creator may receive notice and may be able to respond, appeal or submit a counter-notice.",
  },
];

const beforeSubmitting = [
  "Confirm that you own the work or are authorised to act for the owner.",
  "Check that the reported use is not already licensed or permitted.",
  "Collect the exact Lumivo content link or identifying information.",
  "Prepare accurate contact details and supporting evidence.",
];

/**
 * Renders the Lumivo copyright help page.
 *
 * This page provides product guidance and is not legal advice.
 *
 * @return {ReactNode} Copyright help page.
 */
export default function CopyrightHelpPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <CopyrightBackground />

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
                    Copyright
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Copyright help
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={170}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Protect original work.
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  Respect creator rights.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Learn how copyright claims, evidence, content actions,
                creator responses and counter-notices work on Lumivo.
              </p>
            </Reveal>

            <Reveal delayMs={300}>
              <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-white/28">
                This page explains Lumivo&apos;s product process and does
                not provide legal advice.
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
                Creator responsibilities
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Understand the copyright process
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                Accurate information and clear supporting evidence help
                Lumivo review copyright concerns responsibly.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copyrightSections.map((section, index) => (
              <Reveal
                key={section.title}
                delayMs={70 + index * 60}
                distancePx={26}
              >
                <CopyrightCard section={section} />
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
                      Claim lifecycle
                    </p>

                    <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      What happens after a claim is submitted
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/42">
                      The exact outcome depends on the information
                      provided, the affected material and any response
                      submitted by the creator.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] bg-black/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {claimProcess.map((step) => (
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

          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
            <Reveal delayMs={180}>
              <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                  Before submitting
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Prepare complete and accurate information.
                </h2>

                <ul className="mt-6 space-y-4">
                  {beforeSubmitting.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-white/42"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/15 bg-violet-300/[0.07] text-[0.65rem] font-bold text-violet-100">
                        {index + 1}
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={230} direction="left">
              <div className="h-full rounded-[2rem] border border-violet-300/12 bg-gradient-to-br from-violet-500/[0.08] via-fuchsia-500/[0.06] to-cyan-400/[0.05] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                  Copyright support
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Need help with a claim?
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  Contact Lumivo Support for product guidance about a
                  submitted claim, creator notice or available response
                  process.
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

interface CopyrightCardProps {
  section: CopyrightSection;
}

function CopyrightCard({
  section,
}: CopyrightCardProps): ReactNode {
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

function CopyrightBackground(): ReactNode {
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

function CreatorIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

function EvidenceIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M6 3.5h8l4 4V20H6V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3.5V8h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ResponseIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M8 7H4v4M4.5 10.5A7.5 7.5 0 1 0 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CounterIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
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