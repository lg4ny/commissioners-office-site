import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "../components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://commissionersoffice.games";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Commissioner’s Office | Indie Sports Franchise Simulation",
  description:
    "Run your franchise. Build a dynasty. Shape history. The Commissioner’s Office is an indie sports franchise simulation platform starting with Front Office Baseball, a fictional baseball GM sim currently in early alpha.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Commissioner’s Office",
    title: "The Commissioner’s Office",
    description:
      "An indie sports franchise simulation platform. First up: Front Office Baseball.",
    images: [
      {
        url: "/images/og-commissioners-office.png",
        alt: "The Commissioner’s Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Commissioner’s Office",
    description:
      "An indie sports franchise simulation platform. First up: Front Office Baseball.",
    images: ["/images/og-commissioners-office.png"],
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
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
