import type { Metadata } from "next";
import Script from "next/script";
import { Syne, DM_Mono } from "next/font/google";
import "../styles/globals.scss";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import Navigation from "@/components/Navigation/Navigation";
import { Cursor } from "@/components/Cursor/Cursor";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";

const syneSans = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.SITE_TITLE,
  description: process.env.SITE_DESCRIPTION,
  metadataBase: new URL(process.env.SITE_URL ?? 'https://portfolio.manoo089.de'),
  alternates: { canonical: process.env.SITE_URL },
  openGraph: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    siteName: process.env.SITE_TITLE,
    locale: process.env.SITE_LOCALE,
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${syneSans.variable} ${dmMono.variable}`}>
      <body>
        <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.8, anchors: true }}>
          <a href="#main-content" className="skip-to-main">
            Zum Inhalt springen
          </a>
          <Cursor />
          <header>
            <Navigation />
          </header>
          {children}
          <ScrollToTop />
        </ReactLenis>
        <Script defer src="https://analytics.manoo089.de/script.js" data-website-id="3f75b44d-6bf4-49f3-a96e-79346106de53" />
      </body>
    </html>
  );
}
