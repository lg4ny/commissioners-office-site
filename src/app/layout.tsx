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

const siteUrl = "https://commissionersoffice.games";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Commissioner’s Office",
  description:
    "Run your franchise. Build a dynasty. Shape history. An indie sports franchise simulation platform starting with Front Office Baseball.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Commissioner’s Office",
    title: "The Commissioner’s Office",
    description:
      "Run your franchise. Build a dynasty. Shape history. An indie sports franchise simulation platform starting with Front Office Baseball.",
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
      "Run your franchise. Build a dynasty. Shape history. An indie sports franchise simulation platform starting with Front Office Baseball.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
