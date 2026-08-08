import Link from "next/link";
import type {ReactNode} from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DocumentationLayoutProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
  aside?: ReactNode;
  backHref?: string;
  backLabel?: string;
}

/**
 * Provides a consistent branded layout for Lumivo documentation pages.
 *
 * @param {DocumentationLayoutProps} props Documentation page content.
 * @return {ReactNode} Shared documentation page layout.
 */
export default function DocumentationLayout({
  eyebrow = "Lumivo",
  title,
  description,
  breadcrumbs = [],
  children,
  aside,
  backHref = "/support",
  backLabel = "Back to Support",
}: DocumentationLayoutProps): ReactNode {
  return (
    <main className="relative isolate overflow-hidden bg-[#060813]">
      <DocumentationBackground />

      <section className="relative z-10 border-b border-white/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            {breadcrumbs.length > 0 ? (
              <nav
                aria-label="Breadcrumb"
                className="flex justify-center"
              >
                <ol className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white/35">
                  {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                      <li
                        key={`${item.label}-${index}`}
                        className="flex items-center gap-2"
                      >
                        {item.href && !isLast ? (
                          <Link
                            href={item.href}
                            className="transition hover:text-white/70"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span
                            className={isLast ? "text-cyan-100/75" : undefined}
                          >
                            {item.label}
                          </span>
                        )}

                        {!isLast ? (
                          <span aria-hidden="true">/</span>
                        ) : null}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            ) : null}

            <div className={breadcrumbs.length > 0 ? "mt-6" : undefined}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.72)]" />

                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200/75">
                  {eyebrow}
                </p>
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description ? (
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/45 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div
            className={
              aside
                ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"
                : "mx-auto max-w-5xl"
            }
          >
            <div className="min-w-0">
              {children}
            </div>

            {aside ? (
              <aside className="lg:sticky lg:top-32 lg:self-start">
                {aside}
              </aside>
            ) : null}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/[0.08] bg-white/[0.035] px-6 py-6 text-center backdrop-blur-2xl sm:flex-row sm:text-left">
            <div>
              <p className="m-0 text-sm font-bold text-white">
                Need additional guidance?
              </p>

              <p className="m-0 mt-2 text-sm leading-6 text-white/38">
                Return to Lumivo Support or contact the support team.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
              <Link
                href={backHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-bold text-white/60 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
              >
                {backLabel}
              </Link>

              <Link
                href="/support/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-r from-[#745cff] via-[#518cff] to-[#22d3ee] px-5 text-sm font-bold text-white shadow-[0_14px_40px_rgba(57,215,255,0.14)] transition hover:-translate-y-0.5"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DocumentationBackground(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#060813]" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.08] blur-[150px]" />
      <div className="absolute right-[-14rem] top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.1] blur-[150px]" />
      <div className="absolute bottom-[-16rem] left-[34%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.07] blur-[145px]" />
    </div>
  );
}