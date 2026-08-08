import Link from "next/link";
import type {Metadata} from "next";
import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Lumivo Premium",
  description:
    "Explore Lumivo Premium benefits, creator advantages, subscription options and future-ready tools.",
};

interface PremiumBenefit {
  title: string;
  description: string;
  highlights: string[];
  icon: ReactNode;
}

const benefits: PremiumBenefit[] = [
  {
    title: "Ad-free experience",
    description:
      "Enjoy Lumivo without feed advertising so you can focus on videos, conversations and creator discovery.",
    highlights: [
      "No native feed ads",
      "Cleaner viewing experience",
      "More uninterrupted discovery",
    ],
    icon: <SparkIcon />,
  },
  {
    title: "Premium creator identity",
    description:
      "Show that your account is part of the Lumivo Premium creator experience.",
    highlights: [
      "Premium entitlement",
      "Premium account recognition",
      "Future premium profile benefits",
    ],
    icon: <DiamondIcon />,
  },
  {
    title: "Advanced creator tools",
    description:
      "Get access to selected premium capabilities designed to support creation, publishing and audience growth.",
    highlights: [
      "Enhanced creator workflows",
      "Priority access to new tools",
      "Future AI-assisted creation",
    ],
    icon: <CreatorIcon />,
  },
  {
    title: "Priority product experience",
    description:
      "Premium is designed for creators who want a more focused and capable Lumivo experience.",
    highlights: [
      "Premium feature access",
      "Priority support handling",
      "Expanded future capabilities",
    ],
    icon: <PriorityIcon />,
  },
];

const includedFeatures = [
  "Ad-free Lumivo experience",
  "Premium entitlement across supported devices",
  "Access to selected premium creator features",
  "Priority handling for eligible support requests",
  "Future-ready access to advanced Lumivo capabilities",
];

const comparisonRows = [
  {
    feature: "Watch and discover videos",
    free: "Included",
    premium: "Included",
  },
  {
    feature: "Create and publish videos",
    free: "Included",
    premium: "Included",
  },
  {
    feature: "Messaging and community tools",
    free: "Included",
    premium: "Included",
  },
  {
    feature: "Feed advertising",
    free: "Shown",
    premium: "Removed",
  },
  {
    feature: "Premium creator capabilities",
    free: "Limited",
    premium: "Included",
  },
  {
    feature: "Future advanced tools",
    free: "Standard access",
    premium: "Priority access",
  },
];

/**
 * Renders the Lumivo Premium marketing page.
 *
 * @return {ReactNode} Premium product page.
 */
export default function PremiumPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <PremiumBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/18 bg-violet-300/[0.07] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-violet-100/80">
                  Lumivo Premium
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={110}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                More focus.
                <span className="mt-1 block bg-gradient-to-r from-[#8b7dff] via-[#49d8ff] to-[#ff5fd2] bg-clip-text text-transparent">
                  More creator power.
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/45 sm:text-lg">
                Lumivo Premium removes ads and unlocks selected advanced
                capabilities for creators who want a more focused,
                capable and future-ready experience.
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
                  href="/features"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm font-bold text-white/65 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                >
                  Explore all features
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
                Premium benefits
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Built for creators who want more from Lumivo
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/42">
                Premium enhances the core Lumivo experience without
                changing the community, safety or creative foundation.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delayMs={70 + index * 60}
                distancePx={26}
              >
                <PremiumBenefitCard benefit={benefit} />
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative px-7 py-9 sm:px-10 sm:py-11">
                  <div
                    aria-hidden="true"
                    className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.12] blur-[90px]"
                  />

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                      What&apos;s included
                    </p>

                    <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      One premium experience across Lumivo.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/42">
                      Premium works alongside the free Lumivo
                      experience and is designed to add value without
                      limiting essential community access.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] bg-black/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <ul className="space-y-4">
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-7 text-white/45"
                      >
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                          <CheckIcon />
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={220}>
            <div className="mt-14">
              <div className="mb-8 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                  Compare plans
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                  Free and Premium at a glance
                </h2>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] backdrop-blur-2xl">
                <div className="grid grid-cols-[1.5fr_0.75fr_0.75fr] border-b border-white/[0.08] bg-white/[0.035] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white/45 sm:px-7">
                  <span>Feature</span>
                  <span className="text-center">Free</span>
                  <span className="text-center text-cyan-100/75">
                    Premium
                  </span>
                </div>

                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1.5fr_0.75fr_0.75fr] items-center border-b border-white/[0.06] px-5 py-5 last:border-b-0 sm:px-7"
                  >
                    <p className="text-sm font-semibold text-white/70">
                      {row.feature}
                    </p>

                    <p className="text-center text-xs text-white/38">
                      {row.free}
                    </p>

                    <p className="text-center text-xs font-bold text-cyan-100/70">
                      {row.premium}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={260}>
            <div className="mt-14 overflow-hidden rounded-[2.25rem] border border-violet-300/12 bg-gradient-to-br from-violet-500/[0.09] via-fuchsia-500/[0.07] to-cyan-400/[0.06] p-7 text-center shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/70">
                Ready for more?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                Upgrade from inside the Lumivo app.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/42">
                Premium subscriptions are managed securely through the
                supported app-store billing experience.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                >
                  Download Lumivo
                </Link>

                <Link
                  href="/support/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm font-bold text-white/65 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

interface PremiumBenefitCardProps {
  benefit: PremiumBenefit;
}

function PremiumBenefitCard({
  benefit,
}: PremiumBenefitCardProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-400/[0.09] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-300/[0.07] text-violet-100">
        {benefit.icon}
      </div>

      <h2 className="relative mt-7 text-xl font-bold tracking-[-0.03em] text-white">
        {benefit.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {benefit.description}
      </p>

      <ul className="relative mt-6 space-y-3">
        {benefit.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-xs leading-6 text-white/42"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/65" />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function PremiumBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.07] blur-[150px]" />
      <div className="absolute right-[-14rem] top-[14%] h-[36rem] w-[36rem] rounded-full bg-violet-500/[0.13] blur-[155px]" />
      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.08] blur-[145px]" />
    </div>
  );
}

function CheckIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="m7 12.5 3.2 3.2L17 8.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3.5c.6 4.5 3 6.9 7.5 7.5-4.5.6-6.9 3-7.5 7.5-.6-4.5-3-6.9-7.5-7.5C9 10.4 11.4 8 12 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
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

function CreatorIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PriorityIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3.5 19 6v5.3c0 4.3-2.7 8-7 9.7-4.3-1.7-7-5.4-7-9.7V6l7-2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 8v5M12 16.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}