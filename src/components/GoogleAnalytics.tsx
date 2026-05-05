"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const TALLY_URL = "https://tally.so/r/OD8BZM";

function trackPageView(measurementId: string, url: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("config", measurementId, {
    page_path: url,
  });
}

function trackCtaClick(measurementId: string, params: { label: string; url: string }) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "cta_click", {
    send_to: measurementId,
    event_category: "engagement",
    event_label: params.label,
    link_url: params.url,
  });
}

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();

  // Don't load GA at all without a measurement ID.
  if (!measurementId) return null;

  useEffect(() => {
    const url =
      typeof window !== "undefined"
        ? `${window.location.pathname}${window.location.search}`
        : pathname;
    trackPageView(measurementId, url);
  }, [measurementId, pathname]);

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const absoluteHref = anchor.href ?? href;
      const isTally = absoluteHref === TALLY_URL || href === TALLY_URL;

      const label = (anchor.textContent ?? "").trim();
      const isNamedCta = label === "Join the Development List" || label === "Follow Development";

      if (!isTally && !isNamedCta) return;

      trackCtaClick(measurementId, {
        label: label || (isTally ? "tally_cta" : "cta"),
        url: absoluteHref || href,
      });
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [measurementId]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}

