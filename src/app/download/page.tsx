import Link from "next/link";
import type {Metadata} from "next";
import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Download Lumivo",
  description:
    "Download Lumivo for Android, explore device requirements and learn about availability for other platforms.",
};

interface PlatformCard {
  title: string;
  status: string;
  description: string;
  actionLabel: string;
  href: string;
  disabled?: boolean;
  icon: ReactNode;
}

const platforms: PlatformCard[] = [
  {
    title: "Android",
    status: "Available soon",
    description:
      "Lumivo is being prepared for release through Google Play with secure app-store distribution and automatic updates.",
    actionLabel: "Google Play launch",
    href: "#availability",
    icon: <AndroidIcon />,
  },
  {
    title: "iPhone and iPad",
    status: "Planned",
    description:
      "An iOS version is planned for a future release after the Android launch is complete and verified.",
    actionLabel: "Coming later",
    href: "#availability",
    disabled: true,
    icon: <AppleIcon />,
  },
];

const requirements = [
  {
    label: "Operating system",
    value: "Android 8.0 or later",
  },
  {
    label: "Internet",
    value: "Required for video, messaging and account services",
  },
  {
    label: "Storage",
    value: "Space varies by version and cached media",
  },
  {
    label: "Permissions",
    value: "Camera, microphone and media access only when needed",
  },
];

const releaseHighlights = [
  "Short-video discovery and playback",
  "Video publishing and creator tools",
  "Likes, comments, shares and saves",
  "Direct messaging with media and voice",
  "Collections, profiles and analytics",
  "Trust, safety and reporting controls",
];

const assurances = [
  {
    title: "Secure distribution",
    description:
      "Official Lumivo releases will be distributed through supported app stores.",
    icon: <ShieldIcon />,
  },
  {
    title: "Automatic updates",
    description:
      "Store-managed updates help keep the app current with fixes and improvements.",
    icon: <RefreshIcon />,
  },
  {
    title: "Privacy controls",
    description:
      "Permissions are requested only when a feature needs them.",
    icon: <LockIcon />,
  },
];

/**
 * Renders the Lumivo download and availability page.
 *
 * @return {ReactNode} Download marketing page.
 */
export default function DownloadPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <DownloadBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Download Lumivo
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={110}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Your creator journey
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  starts on mobile.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/45 sm:text-lg">
                Lumivo brings video discovery, creation, messaging,
                analytics, collections and safety controls together in
                one connected mobile experience.
              </p>
            </Reveal>

            <Reveal delayMs={250}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="#availability"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                >
                  View availability
                </Link>

                <Link
                  href="/features"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm font-bold text-white/65 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                >
                  Explore features
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="availability"
        className="relative z-10 scroll-mt-32 py-20 sm:py-24 lg:py-28"
      >
        <div className="container">
          <Reveal delayMs={40}>
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">
                Platform availability
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Built for Android first
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                Android is the first supported Lumivo platform. Other
                platforms will follow after launch readiness and
                release verification.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {platforms.map((platform, index) => (
              <Reveal
                key={platform.title}
                delayMs={70 + index * 80}
                distancePx={26}
              >
                <PlatformCardItem platform={platform} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal delayMs={180}>
              <div className="h-full rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                  Android requirements
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Designed for modern Android devices
                </h2>

                <div className="mt-7 space-y-4">
                  {requirements.map((requirement) => (
                    <div
                      key={requirement.label}
                      className="rounded-[1.35rem] border border-white/[0.07] bg-black/10 p-5"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-white/35">
                        {requirement.label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {requirement.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={220} direction="left">
              <div className="h-full overflow-hidden rounded-[2rem] border border-violet-300/12 bg-gradient-to-br from-violet-500/[0.09] via-fuchsia-500/[0.06] to-cyan-400/[0.05] p-7 backdrop-blur-2xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                  Launch experience
                </p>

                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white">
                  Core Lumivo features from day one
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/42">
                  The Android launch is designed to deliver the complete
                  Lumivo foundation for creators and viewers.
                </p>

                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {releaseHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-[1.3rem] border border-white/[0.07] bg-white/[0.035] p-4 text-sm leading-6 text-white/45"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                        <CheckIcon />
                      </span>

                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={240}>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {assurances.map((assurance) => (
                <article
                  key={assurance.title}
                  className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                    {assurance.icon}
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-white">
                    {assurance.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/42">
                    {assurance.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={280}>
            <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
                <div className="relative px-7 py-9 sm:px-10 sm:py-11">
                  <div
                    aria-hidden="true"
                    className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/[0.1] blur-[90px]"
                  />

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/65">
                      Stay informed
                    </p>

                    <h2 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      Lumivo is preparing for its public Android release.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                      Availability details and official store links will
                      be added here when the release is ready.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 border-t border-white/[0.07] bg-black/10 px-7 py-9 lg:border-l lg:border-t-0">
                  <Link
                    href="/premium"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/18 bg-violet-300/[0.07] px-6 text-sm font-bold text-violet-100 transition hover:-translate-y-0.5 hover:bg-violet-300/[0.11]"
                  >
                    Explore Premium
                  </Link>

                  <Link
                    href="/support"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                  >
                    Visit Support
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

interface PlatformCardItemProps {
  platform: PlatformCard;
}

function PlatformCardItem({
  platform,
}: PlatformCardItemProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055] sm:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
          {platform.icon}
        </div>

        <span className="rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-violet-200/75">
          {platform.status}
        </span>
      </div>

      <h2 className="relative mt-7 text-2xl font-bold tracking-[-0.03em] text-white">
        {platform.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {platform.description}
      </p>

      {platform.disabled ? (
        <span className="relative mt-7 inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-5 text-sm font-bold text-white/28">
          {platform.actionLabel}
        </span>
      ) : (
        <Link
          href={platform.href}
          className="relative mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-5 text-sm font-bold text-white shadow-[0_14px_40px_rgba(57,215,255,0.14)] transition hover:-translate-y-0.5"
        >
          {platform.actionLabel}
        </Link>
      )}
    </article>
  );
}

function DownloadBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.09] blur-[150px]" />
      <div className="absolute right-[-14rem] top-[16%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.1] blur-[150px]" />
      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />
    </div>
  );
}

function CheckIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <path d="m7 12.5 3.2 3.2L17 8.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AndroidIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path d="M7 9h10v8.5A2.5 2.5 0 0 1 14.5 20h-5A2.5 2.5 0 0 1 7 17.5V9Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 9a4 4 0 0 1 8 0M9 5.5 7.8 3.8M15 5.5l1.2-1.7M9.5 12h.01M14.5 12h.01M7 12H5M19 12h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path d="M15.5 7.5c-1.4-.1-2.6.8-3.3.8-.8 0-1.9-.8-3.1-.8-1.6 0-3 .9-3.8 2.3-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3.1-.7 1.4 0 1.8.7 3.1.7 1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.5-3.8 0-2.4 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.7-1.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14.7 4.6c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.8-1.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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

function RefreshIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M19 7v5h-5M5 17v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.8 10A7 7 0 0 0 6.4 7.4L5 9M6.2 14A7 7 0 0 0 17.6 16.6L19 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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