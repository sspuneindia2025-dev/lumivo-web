import Link from "next/link";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Community", href: "/community" },
  { label: "Support", href: "/support" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,.08)",
        background: "rgba(7,7,17,.85)",
        marginTop: "6rem",
      }}
    >
      <div
        className="container"
        style={{
          padding: "3rem 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <h3
            className="text-gradient"
            style={{
              fontSize: "1.5rem",
              marginBottom: ".75rem",
            }}
          >
            Lumivo
          </h3>

          <p>
            Create, connect and inspire through meaningful short-form videos.
            Built for creators, communities and authentic storytelling.
          </p>
        </div>

        <div>
          <h4
            style={{
              marginBottom: "1rem",
              color: "var(--text-primary)",
            }}
          >
            Resources
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".75rem",
            }}
          >
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          className="container"
          style={{
            padding: "1.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            color: "var(--text-muted)",
            fontSize: ".9rem",
          }}
        >
          <span>© {year} Lumivo. All rights reserved.</span>

          <span>Made with ❤️ for creators worldwide.</span>
        </div>
      </div>
    </footer>
  );
}