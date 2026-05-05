import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

/** Temporary fallback so GA loads in production if the Vercel env is missing at build/runtime. */
const GA_MEASUREMENT_ID_FALLBACK = "G-95NT7G54QV";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || GA_MEASUREMENT_ID_FALLBACK;

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', { send_page_view: false });
        `}
        </Script>
        <GoogleAnalytics measurementId={gaMeasurementId} />
        {children}
      </body>
    </html>
  );
}
