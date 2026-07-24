import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section aurora"
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: ".45rem 1rem",
                  borderRadius: 999,
                  marginBottom: "1.5rem",
                  background: "rgba(108,99,255,.15)",
                  color: "#c9c7ff",
                  fontWeight: 600,
                }}
              >
                ✨ The next generation creator platform
              </div>

              <h1
                style={{
                  fontSize: "clamp(3rem,7vw,5rem)",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                }}
              >
                Create.
                <br />
                <span className="text-gradient">
                  Connect.
                </span>
                <br />
                Inspire.
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  maxWidth: 620,
                  marginBottom: "2.5rem",
                }}
              >
                Lumivo empowers creators to share meaningful
                short-form videos with a global audience while
                building authentic communities.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="#download"
                  className="btn btn-primary"
                >
                  Download App
                </Link>

                <Link
                  href="#features"
                  className="btn btn-secondary"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            {/* Right */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="glass"
                style={{
                  width: 360,
                  maxWidth: "100%",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    borderRadius: 24,
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg,#2c216f,#0d0d18)",
                    aspectRatio: "9 / 16",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "4rem",
                        marginBottom: "1rem",
                      }}
                    >
                      ▶
                    </div>

                    <h2
                      className="text-gradient"
                      style={{
                        marginBottom: ".75rem",
                      }}
                    >
                      Lumivo
                    </h2>

                    <p
                      className="muted"
                      style={{
                        margin: 0,
                      }}
                    >
                      Premium short-video experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES PLACEHOLDER */}
      <section
        id="features"
        className="section"
      >
        <div className="container">
          <h2
            className="text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Powerful Features
          </h2>

          <p>
            Feed • Messaging • Creator Studio • Premium •
            Analytics • AI-powered experiences
          </p>
        </div>
      </section>

      {/* PREMIUM PLACEHOLDER */}
      <section
        id="premium"
        className="section"
      >
        <div className="container">
          <h2
            className="text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Lumivo Premium
          </h2>

          <p>
            Unlock the complete creator experience with
            advanced tools and an ad-free platform.
          </p>
        </div>
      </section>

      {/* CREATORS PLACEHOLDER */}
      <section
        id="creators"
        className="section"
      >
        <div className="container">
          <h2
            className="text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Built for Creators
          </h2>

          <p>
            Grow your audience, understand your analytics,
            and monetize your creativity.
          </p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section
        id="download"
        className="section"
      >
        <div className="container">
          <div
            className="glass"
            style={{
              padding: "4rem",
              textAlign: "center",
            }}
          >
            <h2
              className="text-gradient"
              style={{
                marginBottom: "1rem",
              }}
            >
              Coming Soon on Google Play
            </h2>

            <p
              style={{
                marginBottom: "2rem",
              }}
            >
              Lumivo will soon be available for Android users
              worldwide.
            </p>

            <button
              className="btn btn-primary"
              disabled
            >
              Google Play Launching Soon
            </button>
          </div>
        </div>
      </section>
    </>
  );
}