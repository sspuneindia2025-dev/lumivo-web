import Link from "next/link";
import type {ReactNode} from "react";

interface CreatorCapability {
  title: string;
  description: string;
  icon: ReactNode;
  accent: "cyan" | "violet" | "fuchsia" | "emerald";
}

const capabilities: CreatorCapability[] = [
  {
    title: "Creator Studio",
    description:
      "Manage videos, captions and publishing workflows from one focused creator workspace.",
    icon: <StudioIcon />,
    accent: "cyan",
  },
  {
    title: "Audience analytics",
    description:
      "Understand views, watch time, completion, engagement and long-term audience growth.",
    icon: <AnalyticsIcon />,
    accent: "violet",
  },
  {
    title: "Global community",
    description:
      "Reach people across regions, languages and interests through meaningful short-form content.",
    icon: <GlobeIcon />,
    accent: "fuchsia",
  },
  {
    title: "Safer growth",
    description:
      "Create with account protection, reporting, copyright workflows and moderation support.",
    icon: <ShieldIcon />,
    accent: "emerald",
  },
];

/**
 * Renders the Lumivo creators marketing section.
 *
 * @return {ReactNode} Creator-focused marketing section.
 */
export default function CreatorsSection(): ReactNode {
  return (
    <section
      id="creators"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#080a17] py-24 sm:py-28 lg:py-32"
    >
      <CreatorsBackground />

      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)]" />

              <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                Built around creators
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Your creativity deserves
              <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                a platform that grows with you.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              From your first upload to a global audience, Lumivo
              helps you publish consistently, understand what
              resonates and build authentic relationships around
              your work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#download"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#3b82f6] via-[#6d5dfc] to-[#d946ef] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(99,102,241,0.18)] transition hover:-translate-y-0.5"
              >
                Start creating
              </Link>

              <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-xs font-semibold text-white/45 backdrop-blur-xl">
                Built for long-term growth
              </span>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <CreatorMetric
                value="Publish"
                label="Share original ideas"
              />

              <CreatorMetric
                value="Understand"
                label="Learn from every interaction"
              />

              <CreatorMetric
                value="Grow"
                label="Build authentic community"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <CreatorCapabilityCard
                key={capability.title}
                capability={capability}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2.4rem] border border-white/[0.09] bg-white/[0.04] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                Creator journey
              </p>

              <h3 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Everything you need to move from first post to lasting
                community.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                Lumivo connects creation, community, analytics,
                premium tools and platform safety so creators can
                focus on the work that matters most.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <JourneyStep
                number="01"
                title="Create"
                description="Publish meaningful short-form video."
              />

              <JourneyStep
                number="02"
                title="Connect"
                description="Build relationships around shared interests."
              />

              <JourneyStep
                number="03"
                title="Understand"
                description="Learn what resonates with your audience."
              />

              <JourneyStep
                number="04"
                title="Grow"
                description="Turn consistent creativity into momentum."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders decorative background lighting for the creators section.
 *
 * @return {ReactNode} CSS-only creators background.
 */
function CreatorsBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080a17]" />

      <div className="absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/[0.08] blur-[130px]" />

      <div className="absolute right-[-14rem] top-[20%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.1] blur-[145px]" />

      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050711]/85 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050711]/70 to-transparent" />
    </div>
  );
}

interface CreatorCapabilityCardProps {
  capability: CreatorCapability;
}

/**
 * Renders one creator capability card.
 *
 * @param {CreatorCapabilityCardProps} props Capability-card properties.
 * @return {ReactNode} Creator capability card.
 */
function CreatorCapabilityCard({
  capability,
}: CreatorCapabilityCardProps): ReactNode {
  const accent = getAccentClasses(capability.accent);

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[72px] transition duration-500 group-hover:scale-110 ${accent.glow}`}
      />

      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.icon}`}
      >
        {capability.icon}
      </div>

      <h3 className="relative mt-6 text-lg font-bold tracking-[-0.025em] text-white">
        {capability.title}
      </h3>

      <p className="relative mt-3 text-sm leading-7 text-white/40">
        {capability.description}
      </p>
    </article>
  );
}

interface CreatorMetricProps {
  value: string;
  label: string;
}

/**
 * Renders one creator journey metric.
 *
 * @param {CreatorMetricProps} props Metric properties.
 * @return {ReactNode} Creator metric card.
 */
function CreatorMetric({
  value,
  label,
}: CreatorMetricProps): ReactNode {
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

interface JourneyStepProps {
  number: string;
  title: string;
  description: string;
}

/**
 * Renders one creator journey step.
 *
 * @param {JourneyStepProps} props Journey-step properties.
 * @return {ReactNode} Creator journey step.
 */
function JourneyStep({
  number,
  title,
  description,
}: JourneyStepProps): ReactNode {
  return (
    <article className="rounded-[1.4rem] border border-white/[0.08] bg-black/15 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-300/15 bg-violet-300/[0.07] text-[0.65rem] font-bold text-violet-100">
          {number}
        </span>

        <p className="m-0 text-sm font-bold text-white">
          {title}
        </p>
      </div>

      <p className="m-0 mt-3 text-xs leading-6 text-white/35">
        {description}
      </p>
    </article>
  );
}

interface AccentClasses {
  glow: string;
  icon: string;
}

function getAccentClasses(
  accent: CreatorCapability["accent"]
): AccentClasses {
  switch (accent) {
    case "cyan":
      return {
        glow: "bg-cyan-400/[0.11]",
        icon:
          "border-cyan-300/18 bg-cyan-300/[0.08] text-cyan-100",
      };

    case "violet":
      return {
        glow: "bg-violet-500/[0.12]",
        icon:
          "border-violet-300/18 bg-violet-300/[0.08] text-violet-100",
      };

    case "fuchsia":
      return {
        glow: "bg-fuchsia-500/[0.11]",
        icon:
          "border-fuchsia-300/18 bg-fuchsia-300/[0.08] text-fuchsia-100",
      };

    case "emerald":
      return {
        glow: "bg-emerald-500/[0.1]",
        icon:
          "border-emerald-300/18 bg-emerald-300/[0.08] text-emerald-100",
      };
  }
}

function StudioIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <rect
        x="3.5"
        y="4"
        width="17"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3.5 9h17"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m9 12 5 2.5L9 17v-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
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

function GlobeIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
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