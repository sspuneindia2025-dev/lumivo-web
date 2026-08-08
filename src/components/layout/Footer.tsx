import Link from "next/link";
import type {ReactNode} from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

const footerGroups: FooterGroup[] = [
  {
    title: "Explore",
    links: [
      {
        label: "Features",
        href: "/features",
      },
      {
        label: "Premium",
        href: "/premium",
      },
      {
        label: "Download",
        href: "/download",
      },
      {
        label: "Launch list",
        href: "/waitlist",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Help Center",
        href: "/support/help",
      },
      {
        label: "Contact",
        href: "/support/contact",
      },
      {
        label: "Safety",
        href: "/support/help/safety",
      },
      {
        label: "Copyright",
        href: "/support/help/copyright",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "/legal/privacy",
      },
      {
        label: "Terms of Service",
        href: "/legal/terms",
      },
      {
        label: "Community Guidelines",
        href: "/support/help/community-guidelines",
      },
    ],
  },
];

/**
 * Renders the shared Lumivo public-site footer.
 *
 * @return {ReactNode} Responsive public marketing footer.
 */
export default function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050711]">
      <FooterBackground />

      <div className="container relative z-10">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="Lumivo home"
              className="inline-flex rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#39d7ff] to-[#ff4fd8] bg-clip-text text-3xl font-extrabold tracking-[-0.05em] text-transparent">
                Lumivo
              </span>
            </Link>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/42 sm:text-base">
              Create, connect and inspire through meaningful
              short-form video. Lumivo is built for creators,
              communities and authentic storytelling.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-25" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>

              <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-100/70">
                Preparing for Android launch
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <FooterLinkGroup
                key={group.title}
                group={group}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.07] py-6">
          <div className="flex flex-col gap-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0">
              © {year} Lumivo. All rights reserved.
            </p>

            <p className="m-0">
              Create. Connect. Inspire.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkGroupProps {
  group: FooterGroup;
}

/**
 * Renders one footer navigation group.
 *
 * @param {FooterLinkGroupProps} props Footer group properties.
 * @return {ReactNode} Footer navigation group.
 */
function FooterLinkGroup({
  group,
}: FooterLinkGroupProps): ReactNode {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
        {group.title}
      </h2>

      <nav
        aria-label={`${group.title} links`}
        className="mt-5 flex flex-col items-start gap-3"
      >
        {group.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md text-sm text-white/38 outline-none transition hover:text-cyan-100 focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

/**
 * Renders subtle Lumivo footer background lighting.
 *
 * @return {ReactNode} Decorative footer background.
 */
function FooterBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-[-10rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.05] blur-[125px]" />

      <div className="absolute right-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.07] blur-[135px]" />

      <div className="absolute bottom-[-16rem] left-[40%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/[0.045] blur-[135px]" />
    </div>
  );
}