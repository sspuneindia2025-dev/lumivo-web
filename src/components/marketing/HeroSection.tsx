import Image from "next/image";
import Link from "next/link";
import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

const highlights = [
  ["Global", "Creator community"],
  ["Secure", "Trust and safety"],
  ["Premium", "Creator experience"],
];

/**
 * Renders the Lumivo homepage hero section.
 *
 * @return {ReactNode} Branded Lumivo hero section.
 */
export default function HeroSection(): ReactNode {
  return (
    <section className="relative isolate min-h-[calc(100vh-94px)] overflow-hidden border-b border-white/[0.06] bg-[#070814]">
      <HeroBackground />

      <div className="container relative z-10 grid min-h-[calc(100vh-94px)] items-center gap-12 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:py-16">
        <div className="max-w-[49rem]">
          <Reveal delayMs={40}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </span>

              <span className="text-[0.7rem] font-bold uppercase tracking-[0.17em] text-cyan-100/80 sm:text-xs">
                The next generation creator platform
              </span>
            </div>
          </Reveal>

          <Reveal delayMs={110}>
            <h1 className="mt-7 max-w-[10ch] text-[clamp(3.7rem,6.8vw,6.8rem)] font-extrabold leading-[0.88] tracking-[-0.07em] text-white">
              Create.

              <span className="mt-2 block bg-gradient-to-r from-[#7786ff] via-[#39d7ff] to-[#ff4fd8] bg-clip-text text-transparent">
                Connect.
              </span>

              <span className="mt-2 block">
                Inspire.
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mt-8 max-w-[42rem] text-[1rem] leading-8 text-white/52 sm:text-[1.08rem]">
              Lumivo gives creators a premium short-video platform to
              share original ideas, build meaningful communities and
              grow with confidence.
            </p>
          </Reveal>

          <Reveal delayMs={250}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-7 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(139,92,246,0.24)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
                />

                <span className="relative">
                  Download Lumivo
                </span>
              </Link>

              <Link
                href="/features"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.045] px-7 text-sm font-bold text-white/75 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
              >
                Explore features
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={320}>
            <div className="mt-8 grid max-w-[42rem] grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 backdrop-blur-xl"
                >
                  <p className="m-0 text-sm font-bold text-white">
                    {value}
                  </p>

                  <p className="m-0 mt-1 text-[0.7rem] leading-5 text-white/35">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          delayMs={220}
          direction="left"
          distancePx={34}
        >
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Renders the splash-inspired Lumivo hero backdrop.
 *
 * @return {ReactNode} Layered CSS backdrop.
 */
function HeroBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#070814]" />

      <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-[#08091a] via-[#0a0b20] to-transparent" />

      <div className="absolute left-1/2 top-[34%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.24] blur-[125px]" />

      <div className="absolute left-1/2 top-[40%] h-[24rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/[0.16] blur-[95px]" />

      <div className="absolute left-[-12%] top-[22%] h-[22rem] w-[74%] -rotate-[8deg] rounded-[50%] bg-gradient-to-r from-cyan-400/[0.1] via-blue-500/[0.16] to-violet-500/[0.06] blur-[34px]" />

      <div className="absolute right-[-16%] top-[27%] h-[24rem] w-[76%] rotate-[10deg] rounded-[50%] bg-gradient-to-r from-violet-500/[0.08] via-fuchsia-500/[0.16] to-transparent blur-[38px]" />

      <div className="absolute left-[-8%] top-[36%] h-[18rem] w-[70%] rotate-[6deg] rounded-[50%] bg-gradient-to-r from-cyan-300/[0.08] via-violet-500/[0.14] to-fuchsia-400/[0.08] blur-[42px]" />

      <div className="absolute right-[-8%] top-[43%] h-[17rem] w-[68%] -rotate-[6deg] rounded-[50%] bg-gradient-to-r from-transparent via-violet-400/[0.12] to-fuchsia-400/[0.1] blur-[44px]" />

      <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#070814] via-[#0b0a24]/90 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_18%,rgba(3,5,18,0.18)_58%,rgba(3,5,18,0.56)_100%)]" />
    </div>
  );
}

/**
 * Renders the Lumivo onboarding preview used in the hero.
 *
 * @return {ReactNode} Branded onboarding visual.
 */
function HeroVisual(): ReactNode {
  return (
    <div className="relative mx-auto w-full max-w-[21rem] xl:max-w-[23rem]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.2] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-12 top-16 hidden h-24 w-24 rounded-[1.6rem] border border-white/[0.08] bg-white/[0.035] backdrop-blur-2xl lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute -right-12 bottom-20 hidden h-20 w-20 rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] backdrop-blur-2xl lg:block"
      />

      <div className="relative rounded-[2.35rem] border border-white/[0.12] bg-white/[0.05] p-3.5 shadow-[0_34px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl sm:p-4">
        <div className="relative overflow-hidden rounded-[1.85rem] border border-white/[0.08] bg-[#060812]">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/40 to-transparent"
          />

          <Image
            src="/branding/lumivo-onboarding.png"
            alt="Lumivo Android onboarding screen"
            width={320}
            height={694}
            priority
            className="block h-auto w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/30 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}