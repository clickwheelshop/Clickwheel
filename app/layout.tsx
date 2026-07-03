import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clickwheel.shop"),
  
  icons: {
  icon: [
    {
      url: "/favicon.ico?v=11",
      type: "image/x-icon",
    },
  ],
},

  title: {
    default: "Clickwheel | Restored & Upgraded iPod Classic",
    template: "%s | Clickwheel",
  },

  description:
    "Restored and upgraded iPod Classic devices with flash storage, extended batteries and carefully selected finishes.",

  keywords: [
    "iPod Classic",
    "restored iPod Classic",
    "upgraded iPod Classic",
    "iPod flash storage upgrade",
    "iPod battery replacement",
    "iPod restoration",
    "Clickwheel",
  ],

  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ro: "/ro",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Clickwheel",
    title: "Clickwheel | Restored & Upgraded iPod Classic",
    description:
      "Classic on the outside. Modern on the inside. Restored iPod Classic devices with flash storage and extended batteries.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clickwheel | Restored & Upgraded iPod Classic",
    description:
      "Classic on the outside. Modern on the inside. Restored iPod Classic devices with flash storage and extended batteries.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}