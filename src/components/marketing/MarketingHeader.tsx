"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import type {ReactNode} from "react";
import {usePathname} from "next/navigation";

import LaunchAnnouncementBar from "./LaunchAnnouncementBar";

interface NavigationItem {
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
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
    label: "Support",
    href: "/support",
  },
];

/**
 * Renders the reusable Lumivo marketing-site header.
 *
 * @return {ReactNode} Global responsive marketing navigation.
 */
export default function MarketingHeader(): ReactNode {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent): void {
      const target = event.target;

      if (
        target instanceof Node &&
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  function toggleMenu(): void {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#070814]/92 backdrop-blur-2xl"
    >
      <LaunchAnnouncementBar />

      <div className="relative border-b border-white/[0.08]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
        />

        <div className="container flex min-h-[94px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Lumivo home"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3 rounded-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:gap-4"
          >
            <span className="relative flex h-[64px] w-[64px] shrink-0 items-center justify-center sm:h-[78px] sm:w-[78px]">
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
              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#39d7ff] to-[#ff4fd8] bg-clip-text text-[1.55rem] font-extrabold leading-none tracking-[-0.045em] text-transparent sm:text-[2rem]">
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
            {navigation.map((item) => {
              const isActive = isNavigationItemActive(
                pathname,
                item.href,
              );

              return (
                <NavigationLink
                  key={item.href}
                  item={item}
                  isActive={isActive}
                />
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/download"
              onClick={closeMenu}
              className="group relative hidden min-h-12 items-center justify-center overflow-hidden rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(57,215,255,0.18)] outline-none transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_46px_rgba(139,92,246,0.24)] focus-visible:ring-2 focus-visible:ring-cyan-300/80 sm:inline-flex sm:px-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
              />

              <span className="relative">
                Launching Soon
              </span>
            </Link>

            <button
              type="button"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-marketing-navigation"
              onClick={toggleMenu}
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.045] text-white outline-none transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.07] focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:hidden"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>

              <span className="relative h-5 w-5">
                <span
                  aria-hidden="true"
                  className={[
                    "absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition duration-300",
                    isMenuOpen
                      ? "translate-y-1.5 rotate-45"
                      : "",
                  ].join(" ")}
                />

                <span
                  aria-hidden="true"
                  className={[
                    "absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-current transition duration-300",
                    isMenuOpen
                      ? "scale-x-0 opacity-0"
                      : "",
                  ].join(" ")}
                />

                <span
                  aria-hidden="true"
                  className={[
                    "absolute bottom-1 left-0 h-0.5 w-5 rounded-full bg-current transition duration-300",
                    isMenuOpen
                      ? "-translate-y-1.5 -rotate-45"
                      : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-marketing-navigation"
          className={[
            "overflow-hidden border-t border-white/[0.06] bg-[#070814]/98 transition-[max-height,opacity] duration-300 lg:hidden",
            isMenuOpen
              ? "max-h-[34rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="container py-4">
            <nav
              aria-label="Mobile navigation"
              className="grid gap-2"
            >
              {navigation.map((item) => {
                const isActive = isNavigationItemActive(
                  pathname,
                  item.href,
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={[
                      "flex min-h-12 items-center justify-between rounded-2xl border px-4 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300/70",
                      isActive
                        ? "border-cyan-300/25 bg-cyan-300/[0.08] text-white"
                        : "border-white/[0.08] bg-white/[0.035] text-white/60 hover:border-cyan-300/20 hover:bg-white/[0.06] hover:text-white",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>

                    <span
                      aria-hidden="true"
                      className={[
                        "transition",
                        isActive
                          ? "text-cyan-200"
                          : "text-white/25",
                      ].join(" ")}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/download"
              onClick={closeMenu}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-6 text-sm font-bold text-white shadow-[0_14px_40px_rgba(57,215,255,0.15)] sm:hidden"
            >
              Launching Soon
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

interface NavigationLinkProps {
  item: NavigationItem;
  isActive: boolean;
}

function NavigationLink({
  item,
  isActive,
}: NavigationLinkProps): ReactNode {
  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group relative rounded-xl px-4 py-3 text-sm font-semibold outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300/70",
        isActive
          ? "bg-white/[0.07] text-white"
          : "text-white/60 hover:bg-white/[0.05] hover:text-white",
      ].join(" ")}
    >
      {item.label}

      <span
        aria-hidden="true"
        className={[
          "absolute inset-x-4 bottom-1.5 h-px origin-center bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 transition-transform duration-200",
          isActive
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100",
        ].join(" ")}
      />
    </Link>
  );
}

function isNavigationItemActive(
  pathname: string,
  href: string,
): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}