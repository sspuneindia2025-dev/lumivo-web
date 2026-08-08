import Link from "next/link";
import type {ReactNode} from "react";

interface PlatformCard {
  title: string;
  description: string;
  eyebrow: string;
  status: string;
  icon: ReactNode;
  accent: "cyan" | "violet";
}

const platforms: PlatformCard[] = [
  {
    title: "Lumivo for Android",
    description:
      "A premium short-video experience designed for creators and communities worldwide.",
    eyebrow: "Google Play",
    status: "Launching soon",
    icon: <AndroidIcon />,
    accent: "cyan",
  },
  {
    title: "Lumivo for iOS",
    description:
      "The Lumivo experience is planned for iPhone and iPad following the Android launch.",
    eyebrow: "App Store",
    status: "Coming later",
    icon: <AppleIcon />,
    accent: "violet",
  },
];

/**
 * Renders the Lumivo download and launch section.
 *
 * @return {ReactNode} Download marketing section.
 */
export default function DownloadSection(): ReactNode {
  return (
    <section
      id="download"
      className="relative isolate overflow-hidden bg-[#050711] py-24 sm:py-28 lg:py-32"
    >
      <DownloadBackground />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)]" />

            <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
              Get Lumivo
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            A new generation of
            <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
              short-form creativity is coming.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
            Lumivo will launch first on Android, with more platforms
            planned as the creator community grows.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {platforms.map((platform) => (
            <PlatformDownloadCard
              key={platform.title}
              platform={platform}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.04] p-7 shadow-[0_26px_85px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/[0.09] blur-[75px]"
            />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                <QrIcon />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/65">
                Launch access
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white">
                Scan when the app goes live.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                This space is reserved for the official Google Play
                download code after launch.
              </p>

              <div className="mt-7 flex aspect-square max-w-[12rem] items-center justify-center rounded-[1.5rem] border border-dashed border-white/[0.13] bg-black/20">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/22">
                  QR coming soon
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-violet-500/[0.08] via-white/[0.035] to-cyan-400/[0.05] p-7 shadow-[0_26px_85px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.11] blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 right-[-2rem] h-64 w-64 rounded-full bg-fuchsia-500/[0.09] blur-[105px]"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                  Launch notifications
                </p>

                <h3 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                  Be ready when Lumivo launches.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                  Join the launch list and be among the first to know
                  when Lumivo becomes available on Google Play.
                </p>

                <form className="mt-7 flex max-w-2xl flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="launch-email">
                    Email address
                  </label>

                  <input
                    id="launch-email"
                    type="email"
                    placeholder="you@example.com"
                    disabled
                    className="min-h-12 flex-1 rounded-full border border-white/[0.1] bg-black/20 px-5 text-sm text-white outline-none placeholder:text-white/25 disabled:cursor-not-allowed"
                  />

                  <button
                    type="button"
                    disabled
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/15 bg-violet-300/[0.08] px-6 text-sm font-bold text-violet-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Notify me
                  </button>
                </form>

                <p className="mt-3 text-xs text-white/25">
                  Launch notifications will be enabled closer to release.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.06] text-violet-100 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
                <BellIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/[0.08] bg-white/[0.035] px-6 py-6 text-center backdrop-blur-2xl sm:flex-row sm:text-left lg:px-8">
          <div>
            <p className="m-0 text-sm font-bold text-white">
              Create · Inspire · Connect
            </p>

            <p className="m-0 mt-2 text-sm leading-6 text-white/38">
              Lumivo is preparing for its first public Android release.
            </p>
          </div>

          <Link
            href="/support"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] px-6 text-sm font-bold text-white/70 transition hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
          >
            Visit support
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders decorative background lighting for the download section.
 *
 * @return {ReactNode} CSS-only background decoration.
 */
function DownloadBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050711]" />

      <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-violet-500/[0.11] blur-[145px]" />

      <div className="absolute bottom-[-16rem] left-[8%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/[0.08] blur-[140px]" />

      <div className="absolute bottom-[-14rem] right-[5%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/[0.08] blur-[140px]" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#060813]/85 to-transparent" />
    </div>
  );
}

interface PlatformDownloadCardProps {
  platform: PlatformCard;
}

/**
 * Renders one platform download card.
 *
 * @param {PlatformDownloadCardProps} props Platform-card properties.
 * @return {ReactNode} Platform download card.
 */
function PlatformDownloadCard({
  platform,
}: PlatformDownloadCardProps): ReactNode {
  const accent =
    platform.accent === "cyan" ?
      {
        glow: "bg-cyan-400/[0.11]",
        icon:
          "border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100",
        badge:
          "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200/75",
      } :
      {
        glow: "bg-violet-500/[0.11]",
        icon:
          "border-violet-300/15 bg-violet-300/[0.07] text-violet-100",
        badge:
          "border-violet-300/15 bg-violet-300/[0.06] text-violet-200/75",
      };

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.04] p-7 shadow-[0_26px_85px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] sm:p-8">
      <div
        aria-hidden="true"
        className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-[90px] transition duration-500 group-hover:scale-110 ${accent.glow}`}
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${accent.icon}`}>
          {platform.icon}
        </div>

        <span className={`rounded-full border px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] ${accent.badge}`}>
          {platform.status}
        </span>
      </div>

      <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.18em] text-white/28">
        {platform.eyebrow}
      </p>

      <h3 className="relative mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white">
        {platform.title}
      </h3>

      <p className="relative mt-4 max-w-xl text-sm leading-7 text-white/42">
        {platform.description}
      </p>

      <button
        type="button"
        disabled
        className="relative mt-7 inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] px-6 text-sm font-bold text-white/42"
      >
        {platform.status}
      </button>
    </article>
  );
}

function AndroidIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <path
        d="M7 9h10v8.5A2.5 2.5 0 0 1 14.5 20h-5A2.5 2.5 0 0 1 7 17.5V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8.2 9A3.8 3.8 0 0 1 12 5.2 3.8 3.8 0 0 1 15.8 9M8.5 4 10 6M15.5 4 14 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M5 10v6M19 10v6M9.5 20v2M14.5 20v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppleIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <path
        d="M15.5 7.2c-1-.1-2.2.6-2.8.6-.7 0-1.7-.6-2.8-.6C7.2 7.2 5 9.5 5 12.8c0 2 .8 4.1 1.8 5.6.9 1.3 1.8 2.6 3.1 2.6 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.1-1.2 3-2.5.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.5-3.8 0-2.4 1.9-3.5 2-3.6-1.1-1.6-2.9-1.8-3.6-1.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M15.7 3c.1 1-.3 2-.9 2.7-.7.7-1.7 1.2-2.7 1.1-.1-.9.3-1.9.9-2.6.7-.7 1.7-1.2 2.7-1.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QrIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14.5 14.5h2v2h-2zM18.5 14.5h2v6h-6v-2M14.5 18.5h2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
    >
      <path
        d="M6.5 10a5.5 5.5 0 1 1 11 0v3.5l1.5 2.5H5l1.5-2.5V10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M10 19h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}