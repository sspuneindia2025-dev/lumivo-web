import Link from "next/link";
import type {Metadata} from "next";
import type {ReactNode} from "react";

import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Support Center",
  description:
    "Find help, safety resources, policies and contact options for Lumivo.",
};

interface SupportCard {
  title: string;
  description: string;
  href: string;
  label: string;
  icon: ReactNode;
}

const supportCards: SupportCard[] = [
  {
    title: "Help Center",
    description:
      "Browse guidance for accounts, videos, messaging, privacy, billing and creator tools.",
    href: "/support/help",
    label: "Browse help",
    icon: <HelpIcon />,
  },
  {
    title: "Contact Support",
    description:
      "Get in touch with the Lumivo support team for account, technical or product assistance.",
    href: "/support/contact",
    label: "Contact us",
    icon: <MessageIcon />,
  },
  {
    title: "Account Help",
    description:
      "Get help with sign-in, registration, usernames, profile updates and account recovery.",
    href: "/support/help/account",
    label: "Account guidance",
    icon: <AccountIcon />,
  },
  {
    title: "Using Lumivo",
    description:
      "Learn how to upload videos, engage with creators, save content and use collections.",
    href: "/support/help/using-lumivo",
    label: "Learn the basics",
    icon: <PlayIcon />,
  },
  {
    title: "Safety Center",
    description:
      "Learn how blocking, reporting, account protection and safety controls work across Lumivo.",
    href: "/support/help/safety",
    label: "Explore safety",
    icon: <ShieldIcon />,
  },
  {
    title: "Reporting",
    description:
      "Understand how to report videos, comments, accounts and messages, and what happens next.",
    href: "/support/help/reporting",
    label: "Reporting help",
    icon: <ReportIcon />,
  },
  {
    title: "Privacy Help",
    description:
      "Review privacy controls, blocked users, collection visibility and account protection.",
    href: "/support/help/privacy",
    label: "Privacy guidance",
    icon: <LockIcon />,
  },
  {
    title: "Community Guidelines",
    description:
      "Understand the standards that help keep Lumivo welcoming, creative and respectful.",
    href: "/support/help/community-guidelines",
    label: "Read guidelines",
    icon: <CommunityIcon />,
  },
  {
    title: "Copyright",
    description:
      "Review Lumivo copyright processes, claims, counter-notices and creator responsibilities.",
    href: "/support/help/copyright",
    label: "Copyright help",
    icon: <CopyrightIcon />,
  },
  {
    title: "Privacy Policy",
    description:
      "Learn how Lumivo collects, uses and protects information.",
    href: "/legal/privacy",
    label: "Read privacy policy",
    icon: <DocumentIcon />,
  },
  {
    title: "Terms of Service",
    description:
      "Review the terms that govern access to and use of Lumivo.",
    href: "/legal/terms",
    label: "Read terms",
    icon: <DocumentIcon />,
  },
];

/**
 * Renders the Lumivo Support Center landing page.
 *
 * @return {ReactNode} Support Center entry page.
 */
export default function SupportPage(): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <SupportBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  Lumivo Support
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={110}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                How can we
                <span className="mt-1 block bg-gradient-to-r from-[#49d8ff] via-[#8b7dff] to-[#ff5fd2] bg-clip-text text-transparent">
                  help you today?
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Find product guidance, safety resources, policy
                information and ways to contact the Lumivo team.
              </p>
            </Reveal>

            <Reveal delayMs={250}>
              <div className="mx-auto mt-8 max-w-2xl rounded-full border border-white/[0.1] bg-white/[0.045] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                <div className="flex items-center gap-3 rounded-full px-4">
                  <SearchIcon />

                  <input
                    type="search"
                    aria-label="Search Lumivo Support"
                    placeholder="Search support topics"
                    disabled
                    className="min-h-12 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/28 disabled:cursor-not-allowed"
                  />

                  <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/30 sm:inline-flex">
                    Coming soon
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportCards.map((card, index) => (
              <Reveal
                key={card.title}
                delayMs={70 + index * 45}
                distancePx={26}
              >
                <SupportCardItem card={card} />
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative px-7 py-9 sm:px-10 sm:py-11">
                  <div
                    aria-hidden="true"
                    className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.11] blur-[90px]"
                  />

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/65">
                      Need urgent account help?
                    </p>

                    <h2 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                      Contact support for account access, safety or
                      technical issues.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                      Include clear details about the issue so the
                      support team can review your request efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-white/[0.07] bg-gradient-to-br from-violet-500/[0.1] via-fuchsia-500/[0.07] to-cyan-400/[0.06] px-7 py-9 lg:border-l lg:border-t-0">
                  <Link
                    href="/support/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
                  >
                    Contact Lumivo Support
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

interface SupportCardItemProps {
  card: SupportCard;
}

function SupportCardItem({
  card,
}: SupportCardItemProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
        {card.icon}
      </div>

      <h2 className="relative mt-7 text-xl font-bold tracking-[-0.03em] text-white">
        {card.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {card.description}
      </p>

      <Link
        href={card.href}
        className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition group-hover:translate-x-1"
      >
        {card.label}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

function SupportBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.08] blur-[150px]" />
      <div className="absolute right-[-14rem] top-[16%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.1] blur-[150px]" />
      <div className="absolute bottom-[-16rem] left-[35%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />
    </div>
  );
}

function SearchIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/35">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HelpIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.6 9a2.7 2.7 0 0 1 5.2 1c0 2-2.8 2.2-2.8 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 17.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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

function AccountIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="m9 7 8 5-8 5V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
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

function ReportIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5 20V4M5 5h11l-2 3 2 3H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function CommunityIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="8" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.5" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 19c.4-3.5 2-5.2 4.8-5.2s4.5 1.7 4.9 5.2M13.5 15.2c.8-.7 1.8-1.1 3.1-1.1 2.4 0 3.7 1.5 3.9 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CopyrightIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.3 9.2A4.2 4.2 0 1 0 15.3 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DocumentIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M6 3.5h8l4 4V20H6V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3.5V8h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}