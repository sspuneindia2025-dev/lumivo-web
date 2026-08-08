import type { ReactNode } from "react";

const pillars = [
  {
    title: "AI-assisted moderation",
    description:
      "Intelligent systems help detect harmful content while human review supports important decisions.",
  },
  {
    title: "Community reporting",
    description:
      "Simple reporting tools allow the community to surface issues quickly and responsibly.",
  },
  {
    title: "Creator protection",
    description:
      "Account safety, anti-abuse tools and moderation workflows help creators focus on creating.",
  },
  {
    title: "Copyright protection",
    description:
      "Structured copyright claims and transparent appeals support rights holders and creators alike.",
  },
  {
    title: "Privacy controls",
    description:
      "Granular controls let people decide how they interact, share and communicate.",
  },
  {
    title: "Fair appeals",
    description:
      "Meaningful review processes help ensure moderation actions remain transparent and accountable.",
  },
];

export default function TrustSafetySection(): ReactNode {
  return (
    <section
      id="safety"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#060813] py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-12rem] top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-12rem] bottom-0 h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/80">
              Trust &amp; Safety
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            A platform designed for
            <span className="block bg-gradient-to-r from-cyan-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              safer communities.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/45">
            Lumivo combines proactive technology, thoughtful moderation
            and transparent processes to help creators and viewers build
            authentic communities with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-xl">
                🛡️
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}