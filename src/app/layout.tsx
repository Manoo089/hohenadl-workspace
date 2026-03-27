import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "../styles/globals.scss";
import Navigation from "@/components/Navigation/Navigation";
import { Cursor } from "@/components/Cursor/Cursor";

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
  metadataBase: new URL(process.env.SITE_URL!),
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
        <a href="#main-content" className="skip-to-main">
          Zum Inhalt springen
        </a>
        <Cursor />
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
