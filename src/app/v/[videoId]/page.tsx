import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type VideoLandingPageProps = Readonly<{
  params: Promise<{
    videoId: string;
  }>;
}>;

export const metadata: Metadata = {
  title: "Watch on Lumivo",
  description:
    "This video was shared from Lumivo. Discover short-form videos, creators, communities and more on Lumivo.",
  robots: {
    index: false,
    follow: true,
  },
};

/**
 * Temporary public destination for Lumivo Android video share links.
 *
 * V1 intentionally does not fetch or stream the Android video on the website.
 * Keeping the video ID in the route gives Lumivo a stable public URL today
 * and a future upgrade path for Android App Links / exact-video deep linking.
 */
export default async function VideoLandingPage({
  params,
}: VideoLandingPageProps): Promise<ReactNode> {
  const { videoId } = await params;
  const normalizedVideoId = videoId.trim();

  return (
    <main className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-[#060813] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/4 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl"
      />

      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center px-5 py-16 sm:px-8">
        <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 text-center shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
            <div className="flex flex-col gap-1">
              <span className="h-2 w-2 rounded-full border border-violet-300" />
              <span className="h-2 w-2 rounded-full border border-cyan-300" />
              <span className="h-2 w-2 rounded-full border border-fuchsia-300" />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            Lumivo Video
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Watch this video on Lumivo
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/65 sm:text-base">
            This video was shared from the Lumivo app. Video playback on the
            website is coming later; for now, continue with Lumivo to discover
            videos, creators and communities.
          </p>

          {normalizedVideoId ? (
            <p className="mt-5 text-xs text-white/35">
              Video reference:{" "}
              <span className="break-all font-mono">
                {normalizedVideoId}
              </span>
            </p>
          ) : null}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
  		href="/#download"
  		style={{ color: "#060813" }}
  		className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-		sm font-semibold transition hover:bg-white/90"
		>
 	 Get Lumivo
	</Link>

            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
            >
              Explore Lumivo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
