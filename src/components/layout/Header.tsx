"use client";

import Link from "next/link";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Premium", href: "#premium" },
  { label: "Creators", href: "#creators" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(7,7,17,.72)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "72px",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          <span className="text-gradient">Lumivo</span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "var(--text-secondary)",
                fontWeight: 500,
                transition: "color .2s ease",
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#download"
            className="btn btn-primary"
          >
            Get Lumivo
          </Link>
        </nav>
      </div>
    </header>
  );
}