"use client";

import {
  type ReactNode,
  useId,
  useState,
} from "react";

import Reveal from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Lumivo?",
    answer:
      "Lumivo is a short-form video platform designed around creativity, community, creator tools, analytics, messaging, premium experiences and built-in trust and safety systems.",
  },
  {
    question: "When will Lumivo be available?",
    answer:
      "Lumivo is preparing for its first public Android release. The official launch date will be announced once final testing, store readiness and release checks are complete.",
  },
  {
    question: "Will Lumivo be available on iPhone?",
    answer:
      "Android is the first launch platform. An iOS version is planned for a later phase after the Android release and early community feedback.",
  },
  {
    question: "What does Lumivo Premium include?",
    answer:
      "Lumivo Premium is planned to include an ad-free experience, enhanced creator capabilities, deeper analytics and selected premium platform features. Final availability may vary by release stage.",
  },
  {
    question: "How does Lumivo support creators?",
    answer:
      "Lumivo combines publishing tools, Creator Studio, audience analytics, messaging, premium capabilities and safety workflows so creators can publish, understand their audience and grow with confidence.",
  },
  {
    question: "How does Lumivo handle safety and moderation?",
    answer:
      "Lumivo uses reporting tools, account safety controls, copyright workflows, moderation systems and administrative review processes designed to support safer communities and accountable platform decisions.",
  },
  {
    question: "Can I join Lumivo before launch?",
    answer:
      "Public sign-up is not yet available. Launch notifications and early testing opportunities will be announced closer to release.",
  },
  {
    question: "Where can I get help?",
    answer:
      "The Lumivo Support section will provide product guidance, contact options and policy information as the platform approaches public launch.",
  },
];

/**
 * Renders the Lumivo frequently asked questions section.
 *
 * @return {ReactNode} Accessible FAQ accordion section.
 */
export default function FAQSection(): ReactNode {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#060813] py-24 sm:py-28 lg:py-32"
    >
      <FAQBackground />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-xl">
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Frequently asked
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={110}>
              <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Questions about
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  Lumivo.
                </span>
              </h2>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/45 sm:text-lg">
                Find clear answers about launch plans, platform
                availability, creator tools, Premium and trust and
                safety.
              </p>
            </Reveal>

            <Reveal delayMs={250}>
              <div className="mt-8 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-2xl">
                <p className="m-0 text-sm font-bold text-white">
                  Still need help?
                </p>

                <p className="m-0 mt-2 text-sm leading-7 text-white/38">
                  Visit the Lumivo Support section for additional
                  guidance as the platform approaches launch.
                </p>

                <a
                  href="/support"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/[0.07] px-5 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/[0.11]"
                >
                  Visit support
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Reveal
                key={item.question}
                delayMs={70 + index * 45}
                distancePx={24}
              >
                <FAQAccordionItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders decorative lighting for the FAQ section.
 *
 * @return {ReactNode} CSS-only FAQ background.
 */
function FAQBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />

      <div className="absolute left-[-14rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.08] blur-[145px]" />

      <div className="absolute right-[-15rem] top-[20%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.1] blur-[150px]" />

      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#070914]/85 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050711]/75 to-transparent" />
    </div>
  );
}

interface FAQAccordionItemProps {
  item: FAQItem;
}

/**
 * Renders one accessible FAQ accordion item.
 *
 * @param {FAQAccordionItemProps} props FAQ item properties.
 * @return {ReactNode} FAQ accordion item.
 */
function FAQAccordionItem({
  item,
}: FAQAccordionItemProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border backdrop-blur-2xl transition duration-300 ${
        isOpen
          ? "border-cyan-300/18 bg-white/[0.055]"
          : "border-white/[0.08] bg-white/[0.035] hover:border-white/[0.14] hover:bg-white/[0.05]"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => {
            setIsOpen((currentValue) => !currentValue);
          }}
          className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/70 sm:px-7"
        >
          <span className="text-base font-bold leading-7 tracking-[-0.02em] text-white sm:text-lg">
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] text-cyan-100 transition duration-300 ${
              isOpen ? "rotate-45 bg-cyan-300/[0.1]" : ""
            }`}
          >
            <PlusIcon />
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="m-0 px-6 pb-6 text-sm leading-7 text-white/42 sm:px-7 sm:pb-7">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

function PlusIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}