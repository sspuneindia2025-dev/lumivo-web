import Link from "next/link";
import type {ReactNode} from "react";

/**
 * Renders the Lumivo pre-launch announcement bar.
 *
 * @return {ReactNode} Google Play launch announcement.
 */
export default function LaunchAnnouncementBar(): ReactNode {
  return (
    <aside className="relative overflow-hidden border-b border-white/[0.08] bg-[#090b1d]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.16] via-cyan-400/[0.12] to-fuchsia-500/[0.14]" />
        <div className="absolute left-1/2 top-1/2 h-28 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.08] blur-3xl" />
      </div>

      <div className="container relative flex min-h-12 flex-col items-center justify-center gap-2 py-2.5 text-center sm:flex-row sm:gap-3 sm:text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.17em] text-cyan-100/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>

          Launching soon
        </span>

        <p className="m-0 text-xs font-medium leading-5 text-white/62 sm:text-sm">
          Lumivo is in final release preparation for Google Play.
        </p>

        <Link
          href="/waitlist"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-100 transition hover:text-white sm:text-sm"
        >
          Join the launch list
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}