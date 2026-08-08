import type {ReactNode} from "react";

interface FeatureDefinition {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  accent: FeatureAccent;
  icon: ReactNode;
}

type FeatureAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "pink"
  | "emerald"
  | "amber";

const features: FeatureDefinition[] = [
  {
    eyebrow: "Watch",
    title: "Immersive video experience",
    description:
      "Discover expressive short-form videos through smooth playback, intelligent discovery and a feed designed to keep creativity at the centre.",
    highlights: [
      "Personalised discovery",
      "Smooth video playback",
      "High-quality uploads",
    ],
    accent: "cyan",
    icon: <VideoIcon />,
  },
  {
    eyebrow: "Create",
    title: "AI creator experiences",
    description:
      "Build faster with intelligent creative assistance and future-ready tools designed to help creators turn ideas into engaging content.",
    highlights: [
      "Creative assistance",
      "Smart recommendations",
      "Future AI workflows",
    ],
    accent: "violet",
    icon: <SparkIcon />,
  },
  {
    eyebrow: "Connect",
    title: "Real-time messaging",
    description:
      "Stay close to your community through instant conversations, rich media sharing, voice messages and meaningful creator engagement.",
    highlights: [
      "Instant conversations",
      "Media and voice sharing",
      "Community connection",
    ],
    accent: "blue",
    icon: <MessageIcon />,
  },
  {
    eyebrow: "Understand",
    title: "Creator analytics",
    description:
      "Measure what resonates with clear insights across views, watch time, completion, engagement and long-term audience growth.",
    highlights: [
      "Audience insights",
      "Watch-time analytics",
      "Growth tracking",
    ],
    accent: "pink",
    icon: <AnalyticsIcon />,
  },
  {
    eyebrow: "Protect",
    title: "Trust and safety",
    description:
      "Create with confidence through reporting, account protection, copyright workflows and safety systems built into the Lumivo platform.",
    highlights: [
      "Community reporting",
      "Copyright protection",
      "Account safety controls",
    ],
    accent: "emerald",
    icon: <ShieldIcon />,
  },
  {
    eyebrow: "Elevate",
    title: "Lumivo Premium",
    description:
      "Unlock a refined ad-free experience with enhanced creator capabilities, deeper insights and premium platform experiences.",
    highlights: [
      "Ad-free discovery",
      "Premium creator tools",
      "Exclusive experiences",
    ],
    accent: "amber",
    icon: <DiamondIcon />,
  },
];

/**
 * Renders the Lumivo platform features section.
 *
 * @return {ReactNode} Premium responsive features section.
 */
export default function FeaturesSection(): ReactNode {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#070914] py-24 sm:py-28 lg:py-32"
    >
      <FeaturesBackground />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)]" />

            <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
              Why Lumivo
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Designed for creators.
            <span className="mt-1 block bg-gradient-to-r from-[#7786ff] via-[#39d7ff] to-[#ff4fd8] bg-clip-text text-transparent">
              Built for the future.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
            Lumivo brings creation, community, intelligence, safety
            and premium experiences together in one connected
            short-video platform.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/[0.08] bg-white/[0.035] px-6 py-6 text-center backdrop-blur-2xl sm:flex-row sm:text-left lg:px-8">
          <div>
            <p className="m-0 text-sm font-bold text-white">
              One platform. Every part of your creator journey.
            </p>

            <p className="m-0 mt-2 text-sm leading-6 text-white/38">
              Create, communicate, understand your audience and grow
              with confidence on Lumivo.
            </p>
          </div>

          <a
            href="#download"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-6 text-sm font-bold text-cyan-100 outline-none transition hover:-translate-y-0.5 hover:bg-cyan-300/[0.12] focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            Get Lumivo

            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders decorative background lighting for the features section.
 *
 * @return {ReactNode} Layered CSS-only background decoration.
 */
function FeaturesBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#070914]" />

      <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

      <div className="absolute right-[-12rem] top-[12%] h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.09] blur-[130px]" />

      <div className="absolute bottom-[-14rem] left-[28%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/[0.07] blur-[140px]" />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050711]/85 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050711]/75 to-transparent" />
    </div>
  );
}

interface FeatureCardProps {
  feature: FeatureDefinition;
}

/**
 * Renders one Lumivo feature card.
 *
 * @param {FeatureCardProps} props Feature-card properties.
 * @return {ReactNode} Rendered feature card.
 */
function FeatureCard({
  feature,
}: FeatureCardProps): ReactNode {
  const accent = getAccentClasses(feature.accent);

  return (
    <article className="group relative min-h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055] sm:p-7">
      <div
        aria-hidden="true"
        className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-[85px] transition duration-500 group-hover:scale-110 ${accent.glow}`}
      />

      <div
        aria-hidden="true"
        className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${accent.line}`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <span
            className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border ${accent.icon}`}
          >
            {feature.icon}
          </span>

          <span
            className={`rounded-full border px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.16em] ${accent.badge}`}
          >
            {feature.eyebrow}
          </span>
        </div>

        <h3 className="mt-7 text-xl font-bold leading-snug tracking-[-0.03em] text-white sm:text-[1.35rem]">
          {feature.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/42">
          {feature.description}
        </p>

        <div className="mt-7 h-px bg-gradient-to-r from-white/[0.09] to-transparent" />

        <ul className="mt-6 space-y-3">
          {feature.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-3 text-xs font-medium text-white/48"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${accent.check}`}
              >
                <CheckIcon />
              </span>

              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

interface AccentClasses {
  glow: string;
  line: string;
  icon: string;
  badge: string;
  check: string;
}

/**
 * Resolves visual classes for a feature-card accent.
 *
 * @param {FeatureAccent} accent Selected feature accent.
 * @return {AccentClasses} Tailwind classes for the accent.
 */
function getAccentClasses(
  accent: FeatureAccent
): AccentClasses {
  switch (accent) {
    case "cyan":
      return {
        glow: "bg-cyan-400/[0.13]",
        line: "via-cyan-300/35",
        icon:
          "border-cyan-300/20 bg-cyan-300/[0.09] text-cyan-200",
        badge:
          "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200/75",
        check:
          "border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200",
      };

    case "violet":
      return {
        glow: "bg-violet-500/[0.14]",
        line: "via-violet-300/35",
        icon:
          "border-violet-300/20 bg-violet-300/[0.09] text-violet-200",
        badge:
          "border-violet-300/15 bg-violet-300/[0.06] text-violet-200/75",
        check:
          "border-violet-300/15 bg-violet-300/[0.07] text-violet-200",
      };

    case "blue":
      return {
        glow: "bg-blue-500/[0.14]",
        line: "via-blue-300/35",
        icon:
          "border-blue-300/20 bg-blue-300/[0.09] text-blue-200",
        badge:
          "border-blue-300/15 bg-blue-300/[0.06] text-blue-200/75",
        check:
          "border-blue-300/15 bg-blue-300/[0.07] text-blue-200",
      };

    case "pink":
      return {
        glow: "bg-fuchsia-500/[0.13]",
        line: "via-fuchsia-300/35",
        icon:
          "border-fuchsia-300/20 bg-fuchsia-300/[0.09] text-fuchsia-200",
        badge:
          "border-fuchsia-300/15 bg-fuchsia-300/[0.06] text-fuchsia-200/75",
        check:
          "border-fuchsia-300/15 bg-fuchsia-300/[0.07] text-fuchsia-200",
      };

    case "emerald":
      return {
        glow: "bg-emerald-500/[0.12]",
        line: "via-emerald-300/35",
        icon:
          "border-emerald-300/20 bg-emerald-300/[0.09] text-emerald-200",
        badge:
          "border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-200/75",
        check:
          "border-emerald-300/15 bg-emerald-300/[0.07] text-emerald-200",
      };

    case "amber":
      return {
        glow: "bg-amber-400/[0.12]",
        line: "via-amber-200/35",
        icon:
          "border-amber-200/20 bg-amber-200/[0.08] text-amber-100",
        badge:
          "border-amber-200/15 bg-amber-200/[0.06] text-amber-100/75",
        check:
          "border-amber-200/15 bg-amber-200/[0.07] text-amber-100",
      };
  }
}

function VideoIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <rect
        x="3.5"
        y="5"
        width="13"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m16.5 10 4-2.5v9l-4-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m8.5 9 4.5 3-4.5 3V9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M12 3.5c.6 4.5 3 6.9 7.5 7.5-4.5.6-6.9 3-7.5 7.5-.6-4.5-3-6.9-7.5-7.5C9 10.4 11.4 8 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M19 3v4M21 5h-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M5.5 18.5 4 21l4.1-1.4c1.2.6 2.5.9 3.9.9 4.7 0 8.5-3.4 8.5-7.5S16.7 5.5 12 5.5 3.5 8.9 3.5 13c0 2.1.7 4 2 5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 13h7M8.5 9.5h4"
        stroke="currentColor"
        strokeWidth="1.8"
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
        d="M5 19V10M12 19V5M19 19v-6"
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

function DiamondIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
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

function CheckIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-3 w-3"
    >
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}