import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

interface CommunityCommitment {
  title: string;
  description: string;
  label: string;
  icon: ReactNode;
}

const commitments: CommunityCommitment[] = [
  {
    label: "Creator-first",
    title: "Built around meaningful creativity",
    description:
      "Lumivo is designed to help creators publish original work, reach the right audiences and build communities around shared interests.",
    icon: <CreatorIcon />,
  },
  {
    label: "Transparent",
    title: "Clearer tools and platform decisions",
    description:
      "Creator analytics, safety workflows and account controls are being developed to make platform participation easier to understand.",
    icon: <ClarityIcon />,
  },
  {
    label: "Community-led",
    title: "Real stories will come from real users",
    description:
      "Verified creator testimonials will be added after Lumivo enters public testing. We will not publish invented endorsements.",
    icon: <CommunityIcon />,
  },
];

/**
 * Renders the Lumivo creator voices launch-state section.
 *
 * The section intentionally avoids fabricated testimonials. Verified
 * creator quotes can replace the launch-state content after public testing.
 *
 * @return {ReactNode} Creator voices section.
 */
export default function TestimonialsSection(): ReactNode {
  return (
    <section
      id="community"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#070914] py-24 sm:py-28 lg:py-32"
    >
      <TestimonialsBackground />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delayMs={40}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.72)]" />

              <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-violet-200/75">
                Creator voices
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={110}>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Community stories,
              <span className="mt-1 block bg-gradient-to-r from-[#8b7dff] via-[#49d8ff] to-[#ff5fd2] bg-clip-text text-transparent">
                shared authentically.
              </span>
            </h2>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Lumivo is preparing for public testing. Verified creator
              stories will appear here after real people have used the
              platform and chosen to share their experience.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {commitments.map((commitment, index) => (
            <Reveal
              key={commitment.title}
              delayMs={90 + index * 80}
              distancePx={28}
            >
              <CommunityCommitmentCard commitment={commitment} />
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={180}>
          <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative px-7 py-9 sm:px-10 sm:py-11">
                <div
                  aria-hidden="true"
                  className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.11] blur-[90px]"
                />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                    Public testing
                  </p>

                  <h3 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                    Help shape the first generation of Lumivo.
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                    Early community feedback will guide product quality,
                    creator tools, accessibility and safety improvements
                    before wider release.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/[0.07] bg-gradient-to-br from-violet-500/[0.1] via-fuchsia-500/[0.07] to-cyan-400/[0.06] px-7 py-9 lg:border-l lg:border-t-0">
                <div className="max-w-sm text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.07] text-violet-100 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
                    <QuoteIcon />
                  </div>

                  <p className="mt-5 text-lg font-bold text-white">
                    Verified voices only
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/38">
                    No fabricated names, ratings or endorsements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Renders decorative lighting for the creator voices section.
 *
 * @return {ReactNode} CSS-only background decoration.
 */
function TestimonialsBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#070914]" />

      <div className="absolute left-[-13rem] top-[-11rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.1] blur-[140px]" />

      <div className="absolute right-[-13rem] top-[18%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.07] blur-[145px]" />

      <div className="absolute bottom-[-16rem] left-[35%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#080a17]/85 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050711]/75 to-transparent" />
    </div>
  );
}

interface CommunityCommitmentCardProps {
  commitment: CommunityCommitment;
}

/**
 * Renders one community commitment card.
 *
 * @param {CommunityCommitmentCardProps} props Card properties.
 * @return {ReactNode} Community commitment card.
 */
function CommunityCommitmentCard({
  commitment,
}: CommunityCommitmentCardProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/[0.1] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-300/[0.08] text-violet-100">
          {commitment.icon}
        </div>

        <span className="rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-violet-200/75">
          {commitment.label}
        </span>
      </div>

      <h3 className="relative mt-7 text-xl font-bold leading-snug tracking-[-0.03em] text-white">
        {commitment.title}
      </h3>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {commitment.description}
      </p>
    </article>
  );
}

function CreatorIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClarityIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M4 7.5h16M4 12h10M4 16.5h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="18"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CommunityIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <circle
        cx="8"
        cy="8.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="16.5"
        cy="9.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3.5 19c.4-3.5 2-5.2 4.8-5.2s4.5 1.7 4.9 5.2M13.5 15.2c.8-.7 1.8-1.1 3.1-1.1 2.4 0 3.7 1.5 3.9 4.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function QuoteIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
    >
      <path
        d="M5 10.5h5V16H5v-3.5c0-3.2 1.4-5.2 4.2-6M14 10.5h5V16h-5v-3.5c0-3.2 1.4-5.2 4.2-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}