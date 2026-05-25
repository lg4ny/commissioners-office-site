"use client";

import { useId, useState } from "react";
import Image from "next/image";

export type FeatureScreenshot = {
  id: string;
  src: string;
  title: string;
  caption: string;
  alt: string;
  aspectClass: string;
};

export function FeatureScreenshotShowcase({ items }: { items: FeatureScreenshot[] }) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  if (items.length === 0) return null;

  const active = items.find((item) => item.id === activeId) ?? items[0];
  const panelId = `${baseId}-panel`;

  return (
    <div className="mt-6 grid gap-4 sm:mt-7 sm:gap-5 lg:mt-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
      <div
        role="tablist"
        aria-label="Feature screenshots"
        className="-mx-4 flex snap-x snap-mandatory gap-1.5 overflow-x-auto px-4 pb-0.5 [scrollbar-width:none] lg:mx-0 lg:snap-none lg:flex-col lg:gap-2.5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isSelected = active.id === item.id;
          const tabId = `${baseId}-tab-${item.id}`;
          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              className={`shrink-0 snap-start rounded-full border px-3.5 py-2 text-left transition lg:w-full lg:rounded-xl lg:px-4 lg:py-3 ${
                isSelected
                  ? "border-brand-gold/45 bg-gradient-to-b from-brand-navy-mid/90 to-brand-panel-deep/95 text-brand-ivory shadow-[0_8px_24px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(212,176,58,0.1)] lg:shadow-[0_12px_36px_-18px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(212,176,58,0.1)]"
                  : "border-brand-gold/16 bg-brand-panel-deep/55 text-brand-ivory-muted hover:border-brand-gold/30 hover:text-brand-ivory"
              }`}
            >
              <span className="block whitespace-nowrap font-serif text-xs font-semibold text-brand-gold-bright sm:text-sm lg:text-base">
                {item.title}
              </span>
              <span className="mt-1 hidden text-xs leading-relaxed text-brand-ivory-muted lg:block">
                {item.caption}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="min-w-0"
      >
        <figure className="relative mx-auto w-full min-w-0">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tl from-brand-gold/12 via-transparent to-transparent blur-xl lg:-inset-2"
          />
          <div className="relative overflow-hidden rounded-xl border border-brand-gold/24 bg-brand-panel-deep shadow-[0_16px_44px_-24px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(212,176,58,0.12)] ring-1 ring-black/35 sm:rounded-2xl lg:shadow-[0_20px_56px_-28px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(212,176,58,0.12)]">
            <div
              className={`relative w-full max-w-full h-[13.5rem] sm:h-[15rem] lg:h-auto ${active.aspectClass}`}
            >
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
          <figcaption className="mt-2.5 lg:hidden">
            <span className="block font-serif text-sm font-semibold text-brand-gold-bright">
              {active.title}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-brand-ivory-muted sm:text-sm">
              {active.caption}
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
