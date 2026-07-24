import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import AppShell from "@/components/layout/AppShell";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Lumivo — Create, Connect, Inspire",
    template: "%s | Lumivo",
  },

  description:
    "Discover, create, and share meaningful short-form videos with a global community on Lumivo.",

  applicationName: "Lumivo",

  keywords: [
    "Lumivo",
    "short videos",
    "social media",
    "video sharing",
    "content creators",
    "creator platform",
    "online community",
    "social video",
  ],

  authors: [
    {
      name: "Lumivo",
    },
  ],

  creator: "Lumivo",
  publisher: "Lumivo",
  category: "social networking",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Lumivo",
    title: "Lumivo — Create, Connect, Inspire",
    description:
      "Discover, create, and share meaningful short-form videos with a global community on Lumivo.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumivo — Create, Connect, Inspire",
    description:
      "Discover, create, and share meaningful short-form videos with a global community on Lumivo.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#070711",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}