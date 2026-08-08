import Image from "next/image";
import Link from "next/link";
import type {ReactNode} from "react";

interface NavigationItem {
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Premium",
    href: "/#premium",
  },
  {
    label: "Creators",
    href: "/#creators",
  },
  {
    label: "Support",
    href: "/support",
  },
];

/**
 * Renders the primary Lumivo website navigation.
 *
 * @return {ReactNode} Branded website header.
 */
export default function Header(): ReactNode {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070814]/88 backdrop-blur-2xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
      />

      <div className="container flex min-h-[94px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Lumivo home"
          className="group flex min-w-0 items-center gap-3 rounded-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:gap-4"
        >
          <span className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center sm:h-[78px] sm:w-[78px]">
            <span
              aria-hidden="true"
              className="absolute inset-2 rounded-full bg-cyan-400/15 blur-xl transition duration-300 group-hover:bg-fuchsia-400/20"
            />

            <Image
              src="/branding/lumivo-logo.png"
              alt=""
              width={78}
              height={78}
              priority
              className="relative h-full w-full object-contain drop-shadow-[0_0_18px_rgba(57,215,255,0.24)] transition duration-300 group-hover:scale-[1.04]"
            />
          </span>

          <span className="min-w-0">
            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#39d7ff] to-[#ff4fd8] bg-clip-text text-[1.7rem] font-extrabold leading-none tracking-[-0.045em] text-transparent sm:text-[2rem]">
              Lumivo
            </span>

            <span className="mt-2 hidden whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45 sm:block">
              Create · Inspire · Connect
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-xl px-4 py-3 text-sm font-semibold text-white/60 outline-none transition duration-200 hover:bg-white/[0.05] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute inset-x-4 bottom-1.5 h-px origin-center scale-x-0 bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#download"
            className="relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(57,215,255,0.18)] outline-none transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_46px_rgba(139,92,246,0.24)] focus-visible:ring-2 focus-visible:ring-cyan-300/80 sm:px-7"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
            />

            <span className="relative">
              Get Lumivo
            </span>
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="container flex gap-2 overflow-x-auto border-t border-white/[0.06] py-3 lg:hidden"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/55 outline-none transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}