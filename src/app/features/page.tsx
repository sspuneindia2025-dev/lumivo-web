import Link from "next/link";
import type {Metadata} from "next";
import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Lumivo features for video discovery, creator tools, messaging, safety, analytics and Premium.",
};

interface FeatureItem {
  title: string;
  description: string;
  highlights: string[];
  icon: ReactNode;
  label: string;
}

const features: FeatureItem[] = [
  {
    label: "Watch",
    title: "Immersive short-video discovery",
    description:
      "Discover expressive short-form videos through smooth playback, intelligent discovery and a feed designed to keep creativity at the centre.",
    highlights: [
      "Personalised discovery",
      "Smooth full-screen playback",
      "Likes, comments, shares and saves",
    ],
    icon: <VideoIcon />,
  },
  {
    label: "Create",
    title: "Creator-first publishing",
    description:
      "Publish original videos with a streamlined upload experience, captions, visibility controls and creator-focused management tools.",
    highlights: [
      "Video upload and publishing",
      "Caption editing",
      "Creator Studio management",
    ],
    icon: <CreateIcon />,
  },
  {
    label: "Connect",
    title: "Real-time messaging",
    description:
      "Stay close to your community through instant conversations, media sharing, voice messages and meaningful creator engagement.",
    highlights: [
      "Direct conversations",
      "Photo and voice messages",
      "Typing and unread indicators",
    ],
    icon: <MessageIcon />,
  },
  {
    label: "Grow",
    title: "Creator analytics",
    description:
      "Understand performance with views, completion insights, watch time and creator-level progress designed to support better decisions.",
    highlights: [
      "Lifetime and date-range analytics",
      "Watch-time insights",
      "Creator level and XP",
    ],
    icon: <AnalyticsIcon />,
  },
  {
    label: "Organise",
    title: "Saved videos and collections",
    description:
      "Keep meaningful videos close, organise them into collections and control whether each collection is private or visible.",
    highlights: [
      "Saved videos",
      "Private and public collections",
      "Profile Likes and Saved tabs",
    ],
    icon: <CollectionIcon />,
  },
  {
    label: "Protect",
    title: "Trust and safety controls",
    description:
      "Use reporting, blocking, copyright and account safety tools designed to support safer participation across Lumivo.",
    highlights: [
      "Report content and accounts",
      "Block and unblock creators",
      "Copyright and moderation workflows",
    ],
    icon: <ShieldIcon />,
  },
  {
    label: "Premium",
    title: "Premium creator experience",
    description:
      "Unlock an ad-free experience and selected advanced capabilities designed for creators who want more from Lumivo.",
    highlights: [
      "Ad-free experience",
      "Premium entitlement",
      "Future-ready creator capabilities",
    ],
    icon: <DiamondIcon />,
  },
  {
    label: "Global",
    title: "Built for a worldwide community",
    description:
      "Lumivo is designed for creators and viewers across regions, languages and communities with a scalable global foundation.",
    highlights: [
      "Global audience focus",
      "Multi-language roadmap",
      "Scalable platform architecture",
    ],
    icon: <GlobeIcon />,
  },
];

export default function FeaturesPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <FeaturesBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />
                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Lumivo Features
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={110}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Everything creators need
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  in one connected platform.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/45 sm:text-lg">
                Lumivo brings creation, discovery, messaging,
                analytics, collections, Premium and trust and safety
                together in one polished short-video experience.
              </p>
            </Reveal>

            <Reveal delayMs={250}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                >
                  Get Lumivo
                </Link>

                <Link
                  href="/creators"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm font-bold text-white/65 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                >
                  Explore creator tools
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="container">
          <Reveal delayMs={40}>
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">
                Platform capabilities
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Designed for the complete creator journey
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                From the first upload to long-term growth, Lumivo keeps
                the core experience connected and easy to understand.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delayMs={70 + index * 55}
                distancePx={26}
              >
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
                <div className="relative px-7 py-9 sm:px-10 sm:py-11">
                  <div
                    aria-hidden="true"
                    className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.11] blur-[90px]"
                  />

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                      One connected experience
                    </p>

                    <h2 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      Create, connect, understand and grow without
                      leaving the platform.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                      Lumivo is built to reduce friction between
                      publishing, community engagement, performance
                      insight and account safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-white/[0.07] bg-gradient-to-br from-violet-500/[0.1] via-fuchsia-500/[0.07] to-cyan-400/[0.06] px-7 py-9 lg:border-l lg:border-t-0">
                  <div className="grid w-full max-w-sm grid-cols-2 gap-3">
                    {[
                      ["Create", "Publish original work"],
                      ["Connect", "Build real community"],
                      ["Understand", "Learn from analytics"],
                      ["Protect", "Use safety controls"],
                    ].map(([title, description]) => (
                      <div
                        key={title}
                        className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.045] p-4 text-center"
                      >
                        <p className="text-sm font-bold text-white">
                          {title}
                        </p>

                        <p className="mt-1 text-[0.68rem] leading-5 text-white/35">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

interface FeatureCardProps {
  feature: FeatureItem;
}

function FeatureCard({
  feature,
}: FeatureCardProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
          {feature.icon}
        </div>

        <span className="rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-violet-200/75">
          {feature.label}
        </span>
      </div>

      <h2 className="relative mt-7 text-xl font-bold leading-snug tracking-[-0.03em] text-white">
        {feature.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {feature.description}
      </p>

      <ul className="relative mt-6 space-y-3">
        {feature.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-xs leading-6 text-white/42"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/60" />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function FeaturesBackground(): ReactNode {
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

function CreateIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 4v12M7 9l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 15v4h14v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5.5 18.5 4 21l4.1-1.4c1.2.6 2.5.9 3.9.9 4.7 0 8.5-3.4 8.5-7.5S16.7 5.5 12 5.5 3.5 8.9 3.5 13c0 2.1.7 4 2 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function AnalyticsIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5 19V11M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CollectionIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="5" y="4" width="14" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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

function DiamondIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="m4 9 4-5h8l4 5-8 11L4 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 9h16M8 4l4 16 4-16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.4 5.2 3.4 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.6 8.7 8.6 12s1.2 6.1 3.4 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}