import Link from "next/link";
import type {ReactNode} from "react";

interface PremiumBenefit {
  title: string;
  description: string;
  icon: ReactNode;
}

const benefits: PremiumBenefit[] = [
  {
    title: "Ad-free discovery",
    description:
      "Enjoy a cleaner, uninterrupted Lumivo experience focused entirely on creators and community.",
    icon: <SparklesIcon />,
  },
  {
    title: "Advanced creator insights",
    description:
      "Go deeper into audience behaviour, engagement, watch time and long-term content performance.",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Premium creator tools",
    description:
      "Access enhanced capabilities designed to support more ambitious ideas and professional workflows.",
    icon: <CreatorToolsIcon />,
  },
  {
    title: "Priority experiences",
    description:
      "Be among the first to access selected Lumivo improvements and future premium platform features.",
    icon: <PriorityIcon />,
  },
];

/**
 * Renders the Lumivo Premium marketing section.
 *
 * @return {ReactNode} Premium marketing section.
 */
export default function PremiumSection(): ReactNode {
  return (
    <section
      id="premium"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#050711] py-24 sm:py-28 lg:py-32"
    >
      <PremiumBackground />

      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/15 bg-fuchsia-300/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(240,171,252,0.7)]" />

              <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-fuchsia-200/75">
                Lumivo Premium
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              More creative freedom.
              <span className="mt-1 block bg-gradient-to-r from-[#ff79d7] via-[#9d7bff] to-[#49d8ff] bg-clip-text text-transparent">
                Fewer distractions.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
              Lumivo Premium gives creators a refined ad-free
              experience, deeper insights and enhanced capabilities
              designed for people who want to do more with every idea.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#download"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-fuchsia-200/20 bg-gradient-to-r from-[#8b5cf6] via-[#b24cff] to-[#ff4fd8] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(192,68,255,0.18)] transition hover:-translate-y-0.5"
              >
                Explore Premium
              </Link>

              <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-xs font-semibold text-white/45 backdrop-blur-xl">
                Monthly and yearly plans
              </span>
            </div>

            <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
              <PremiumStat
                value="Ad-free"
                label="A focused viewing experience"
              />

              <PremiumStat
                value="Advanced"
                label="Tools and creator insights"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <PremiumBenefitCard
                key={benefit.title}
                benefit={benefit}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative overflow-hidden px-7 py-9 sm:px-10 sm:py-11">
              <div
                aria-hidden="true"
                className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/[0.11] blur-[90px]"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[-8rem] right-[5%] h-64 w-64 rounded-full bg-violet-500/[0.12] blur-[105px]"
              />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-200/65">
                  Built for serious creators
                </p>

                <h3 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                  Premium experiences that grow with your creativity.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                  Start with a cleaner Lumivo experience today and
                  unlock more creator-focused capabilities as the
                  platform continues to evolve.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-white/[0.07] bg-gradient-to-br from-violet-500/[0.09] via-fuchsia-500/[0.08] to-cyan-400/[0.05] px-7 py-9 lg:border-l lg:border-t-0">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.07] text-fuchsia-100 shadow-[0_0_35px_rgba(217,70,239,0.15)]">
                  <DiamondIcon />
                </div>

                <p className="mt-5 text-lg font-bold text-white">
                  Lumivo Premium
                </p>

                <p className="mt-2 text-sm text-white/38">
                  Create more. Experience more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders decorative background lighting for the Premium section.
 *
 * @return {ReactNode} CSS-only background decoration.
 */
function PremiumBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050711]" />

      <div className="absolute right-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/[0.1] blur-[145px]" />

      <div className="absolute left-[-14rem] top-[28%] h-[32rem] w-[32rem] rounded-full bg-violet-500/[0.1] blur-[140px]" />

      <div className="absolute bottom-[-16rem] right-[20%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.06] blur-[145px]" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#070914] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080a17]/80 to-transparent" />
    </div>
  );
}

interface PremiumBenefitCardProps {
  benefit: PremiumBenefit;
}

/**
 * Renders one Lumivo Premium benefit card.
 *
 * @param {PremiumBenefitCardProps} props Benefit-card properties.
 * @return {ReactNode} Premium benefit card.
 */
function PremiumBenefitCard({
  benefit,
}: PremiumBenefitCardProps): ReactNode {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/20 hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-fuchsia-500/[0.08] blur-[65px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-300/[0.11] via-violet-400/[0.1] to-cyan-300/[0.07] text-fuchsia-100">
        {benefit.icon}
      </div>

      <h3 className="relative mt-6 text-lg font-bold tracking-[-0.025em] text-white">
        {benefit.title}
      </h3>

      <p className="relative mt-3 text-sm leading-7 text-white/40">
        {benefit.description}
      </p>
    </article>
  );
}

interface PremiumStatProps {
  value: string;
  label: string;
}

/**
 * Renders one Premium summary statistic.
 *
 * @param {PremiumStatProps} props Premium statistic properties.
 * @return {ReactNode} Premium statistic card.
 */
function PremiumStat({
  value,
  label,
}: PremiumStatProps): ReactNode {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 backdrop-blur-xl">
      <p className="m-0 text-sm font-bold text-white">
        {value}
      </p>

      <p className="m-0 mt-1 text-xs leading-5 text-white/35">
        {label}
      </p>
    </div>
  );
}

function SparklesIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M12 3.5c.5 4.1 2.7 6.3 6.8 6.8-4.1.5-6.3 2.7-6.8 6.8-.5-4.1-2.7-6.3-6.8-6.8 4.1-.5 6.3-2.7 6.8-6.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M19 15v4M21 17h-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AnalyticsIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M5 19V11M12 19V5M19 19v-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M3.5 19.5h17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CreatorToolsIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M4 17.5V20h2.5L18.8 7.7l-2.5-2.5L4 17.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="m14.8 6.7 2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M5 5h5M7.5 2.5v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PriorityIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M12 3.5 14.5 9l6 .6-4.5 4 1.3 5.9L12 16.5l-5.3 3 1.3-5.9-4.5-4 6-.6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DiamondIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
    >
      <path
        d="m4 9 4-5h8l4 5-8 11L4 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M4 9h16M8 4l4 16 4-16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}