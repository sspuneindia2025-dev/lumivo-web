"use client";

import Link from "next/link";
import {useMemo, useState} from "react";
import type {ChangeEvent, ReactNode} from "react";

interface HelpArticle {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

const helpArticles: HelpArticle[] = [
  {
    title: "Account and profile",
    description:
      "Sign-in, registration, usernames, profile updates and account access.",
    href: "/support/help/account",
    category: "Account",
    keywords: [
      "account",
      "profile",
      "login",
      "sign in",
      "registration",
      "username",
      "password",
      "recovery",
    ],
  },
  {
    title: "Using Lumivo",
    description:
      "Videos, discovery, messaging, likes, saves, collections and creator tools.",
    href: "/support/help/using-lumivo",
    category: "Product",
    keywords: [
      "videos",
      "upload",
      "discovery",
      "messages",
      "voice",
      "likes",
      "saved",
      "collections",
      "creator studio",
      "analytics",
    ],
  },
  {
    title: "Privacy help",
    description:
      "Privacy controls, blocking, collection visibility and account protection.",
    href: "/support/help/privacy",
    category: "Privacy",
    keywords: [
      "privacy",
      "block",
      "unblock",
      "visibility",
      "private collection",
      "personal information",
    ],
  },
  {
    title: "Safety help",
    description:
      "Account protection, scams, blocking, abusive behaviour and urgent safety concerns.",
    href: "/support/help/safety",
    category: "Safety",
    keywords: [
      "safety",
      "scam",
      "harassment",
      "abuse",
      "threat",
      "block",
      "account security",
    ],
  },
  {
    title: "Reporting help",
    description:
      "Report videos, comments, accounts and messages and understand the review process.",
    href: "/support/help/reporting",
    category: "Safety",
    keywords: [
      "report",
      "video report",
      "comment report",
      "account report",
      "message report",
      "moderation",
    ],
  },
  {
    title: "Community Guidelines",
    description:
      "Lumivo standards for respectful, safe and authentic participation.",
    href: "/support/help/community-guidelines",
    category: "Policies",
    keywords: [
      "community guidelines",
      "rules",
      "content policy",
      "harassment",
      "spam",
      "platform abuse",
      "enforcement",
    ],
  },
  {
    title: "Copyright help",
    description:
      "Copyright claims, evidence, creator responses and counter-notices.",
    href: "/support/help/copyright",
    category: "Policies",
    keywords: [
      "copyright",
      "claim",
      "counter notice",
      "infringement",
      "ownership",
      "license",
      "evidence",
    ],
  },
  {
    title: "Contact support",
    description:
      "Get help with account, billing, safety and technical issues.",
    href: "/support/contact",
    category: "Support",
    keywords: [
      "contact",
      "support",
      "billing",
      "technical issue",
      "account help",
      "response time",
    ],
  },
  {
    title: "Privacy Policy",
    description:
      "How Lumivo collects, uses and protects information.",
    href: "/legal/privacy",
    category: "Legal",
    keywords: [
      "privacy policy",
      "data",
      "information",
      "cookies",
      "analytics",
      "security",
      "rights",
    ],
  },
  {
    title: "Terms of Service",
    description:
      "The terms governing access to and use of Lumivo.",
    href: "/legal/terms",
    category: "Legal",
    keywords: [
      "terms",
      "terms of service",
      "creator responsibilities",
      "termination",
      "disclaimer",
    ],
  },
];

interface HelpCenterSearchProps {
  className?: string;
}

/**
 * Provides client-side search across Lumivo Help Center destinations.
 *
 * @param {HelpCenterSearchProps} props Search component options.
 * @return {ReactNode} Interactive Help Center search.
 */
export default function HelpCenterSearch({
  className = "",
}: HelpCenterSearchProps): ReactNode {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return helpArticles.filter((article) => {
      const searchableText = [
        article.title,
        article.description,
        article.category,
        ...article.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return normalizedQuery
        .split(/\s+/)
        .every((term) => searchableText.includes(term));
    });
  }, [normalizedQuery]);

  function handleQueryChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setQuery(event.target.value);
  }

  function clearSearch(): void {
    setQuery("");
  }

  return (
    <div className={className}>
      <div className="rounded-[2rem] border border-white/[0.1] bg-white/[0.045] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
        <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/[0.06] bg-black/10 px-4">
          <SearchIcon />

          <input
            type="search"
            value={query}
            onChange={handleQueryChange}
            aria-label="Search Help Center"
            placeholder="Search accounts, privacy, reporting, copyright..."
            className="min-h-12 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/28"
          />

          {query ? (
            <button
              type="button"
              onClick={clearSearch}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/45 transition hover:bg-white/[0.08] hover:text-white"
            >
              Clear
            </button>
          ) : (
            <span className="hidden rounded-full border border-cyan-300/12 bg-cyan-300/[0.05] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cyan-100/55 sm:inline-flex">
              Search
            </span>
          )}
        </div>
      </div>

      {normalizedQuery ? (
        <div
          aria-live="polite"
          className="mt-4 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0a0c18]/95 shadow-[0_22px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
        >
          <div className="border-b border-white/[0.07] px-5 py-4">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              {results.length === 1
                ? "1 result"
                : `${results.length} results`}
            </p>
          </div>

          {results.length > 0 ? (
            <div className="divide-y divide-white/[0.06]">
              {results.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex items-start justify-between gap-5 px-5 py-5 transition hover:bg-white/[0.04]"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-sm font-bold text-white">
                        {article.title}
                      </h2>

                      <span className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.05] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-cyan-100/55">
                        {article.category}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-6 text-white/38">
                      {article.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-cyan-100/50 transition group-hover:translate-x-1 group-hover:text-cyan-100"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-6 py-9 text-center">
              <p className="text-sm font-bold text-white">
                No matching help topics
              </p>

              <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-white/38">
                Try a broader term such as account, privacy, reporting,
                safety or copyright.
              </p>

              <Link
                href="/support/contact"
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-4 text-xs font-bold text-white/60 transition hover:bg-white/[0.08] hover:text-white"
              >
                Contact support
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

function SearchIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-white/35"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m16 16 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}