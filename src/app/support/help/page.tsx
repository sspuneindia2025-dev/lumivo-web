import Link from "next/link";
import type {Metadata} from "next";
import type {ReactNode} from "react";

import DocumentationLayout from "@/components/layout/DocumentationLayout";
import HelpCenterSearch from "@/components/support/HelpCenterSearch";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Browse Lumivo help topics for accounts, videos, messaging, privacy, creator tools and Premium.",
};

interface HelpTopic {
  title: string;
  description: string;
  href: string;
  articles: string[];
  icon: ReactNode;
}

const helpTopics: HelpTopic[] = [
  {
    title: "Account and profile",
    description:
      "Get help with sign-in, registration, usernames, profiles, account access and account settings.",
    href: "/support/help/account",
    articles: [
      "Create and access your account",
      "Update your profile information",
      "Recover account access",
    ],
    icon: <AccountIcon />,
  },
  {
    title: "Videos and discovery",
    description:
      "Learn how uploading, playback, recommendations, likes, saves and collections work on Lumivo.",
    href: "/support/help/using-lumivo",
    articles: [
      "Upload and publish a video",
      "Manage likes and saved videos",
      "Understand video discovery",
    ],
    icon: <VideoIcon />,
  },
  {
    title: "Messaging",
    description:
      "Find guidance for conversations, media sharing, voice messages, typing indicators and unread messages.",
    href: "/support/help/using-lumivo",
    articles: [
      "Start a conversation",
      "Send photos and voice messages",
      "Manage message notifications",
    ],
    icon: <MessageIcon />,
  },
  {
    title: "Creator tools",
    description:
      "Explore Creator Studio, analytics, video management and tools designed to support audience growth.",
    href: "/features",
    articles: [
      "Use Creator Studio",
      "Read your analytics",
      "Manage published videos",
    ],
    icon: <CreatorIcon />,
  },
  {
    title: "Privacy and safety",
    description:
      "Review privacy controls, reporting, blocking, copyright processes and account safety options.",
    href: "/support/help/safety",
    articles: [
      "Report content or an account",
      "Block and unblock creators",
      "Review privacy controls",
    ],
    icon: <ShieldIcon />,
  },
  {
    title: "Lumivo Premium",
    description:
      "Find information about Premium benefits, billing, subscriptions and account entitlement.",
    href: "/#premium",
    articles: [
      "Understand Premium benefits",
      "Manage a subscription",
      "Restore Premium access",
    ],
    icon: <DiamondIcon />,
  },
];

/**
 * Renders the Lumivo Help Center landing page.
 *
 * @return {ReactNode} Help Center page.
 */
export default function HelpCenterPage(): ReactNode {
  return (
    <DocumentationLayout
      eyebrow="Help Center"
      title="Find answers for every part of Lumivo."
      description="Browse help topics for your account, videos, conversations, creator tools, safety and Premium."
      breadcrumbs={[
        {
          label: "Support",
          href: "/support",
        },
        {
          label: "Help Center",
        },
      ]}
      backHref="/support"
      backLabel="Back to Support"
    >
      <Reveal delayMs={40}>
        <HelpCenterSearch className="mx-auto max-w-2xl" />
      </Reveal>

      <Reveal delayMs={90}>
        <div className="mt-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">
              Browse by topic
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
              Popular help categories
            </h2>
          </div>

          <Link
            href="/support/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
          >
            Contact support
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {helpTopics.map((topic, index) => (
          <Reveal
            key={topic.title}
            delayMs={120 + index * 55}
            distancePx={26}
          >
            <HelpTopicCard topic={topic} />
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={180}>
        <div className="mt-12 rounded-[2.25rem] border border-white/[0.09] bg-white/[0.04] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                Can&apos;t find your answer?
              </p>

              <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
                The Lumivo support team is here to help.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">
                Contact support for account access, technical issues,
                safety concerns or questions that are not covered in
                the Help Center.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/support/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_16px_44px_rgba(57,215,255,0.16)] transition hover:-translate-y-0.5"
              >
                Contact support
              </Link>

              <Link
                href="/support"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
              >
                Back to Support
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </DocumentationLayout>
  );
}

interface HelpTopicCardProps {
  topic: HelpTopic;
}

function HelpTopicCard({
  topic,
}: HelpTopicCardProps): ReactNode {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:bg-white/[0.055]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-[85px] transition duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
        {topic.icon}
      </div>

      <h2 className="relative mt-7 text-xl font-bold tracking-[-0.03em] text-white">
        {topic.title}
      </h2>

      <p className="relative mt-4 text-sm leading-7 text-white/42">
        {topic.description}
      </p>

      <ul className="relative mt-6 space-y-3">
        {topic.articles.map((article) => (
          <li
            key={article}
            className="flex items-start gap-3 text-xs leading-6 text-white/42"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/60" />
            {article}
          </li>
        ))}
      </ul>

      <Link
        href={topic.href}
        className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition group-hover:translate-x-1"
      >
        View topic
        <span aria-hidden="true">→</span>
      </Link>
    </article>
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

function VideoIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3.5" y="5" width="13" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16.5 10 4-2.5v9l-4-2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function CreatorIcon(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3.5" y="4" width="17" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 9h17M8 14h3M14 14h2M8 17h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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