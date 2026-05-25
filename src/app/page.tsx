import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import Image from "next/image";

const WAITLIST_FORM_URL = "https://tally.so/r/OD8BZM";
const SOCIAL_X_URL = "https://x.com/CommissionersHQ";
const SOCIAL_BLUESKY_URL = "https://bsky.app/profile/commishoffice.bsky.social";
const CONTACT_EMAIL = "contact@commissionersoffice.games";

function publicImageExists(filename: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", filename));
  } catch {
    return false;
  }
}

const HERO_HOME_IMAGE = "/images/hero-dashboard.png";

const hasGameUiShell = publicImageExists("game-ui-shell.png");
const hasTeamPageHeader = publicImageExists("team-page-header.png");
const hasCoMark = publicImageExists("co-logo-mark.png");
const hasWordmarkLogo = publicImageExists("commissioners-office-logo.png");

/** First-game art: prefer UI shell when present (hero always uses banner). */
const firstGameImageSrc = hasGameUiShell
  ? "/images/game-ui-shell.png"
  : hasTeamPageHeader
    ? "/images/team-page-header.png"
    : null;
const firstGameAspectClass =
  firstGameImageSrc === "/images/game-ui-shell.png"
    ? "aspect-[1487/1058]"
    : firstGameImageSrc === "/images/team-page-header.png"
      ? "aspect-[1983/793]"
      : "aspect-[1200/630]";

const nav = [
  { label: "Games", href: "#games" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Devlog", href: "#devlog" },
  { label: "About", href: "#about" },
] as const;

const platformCards = [
  {
    title: "Fast Franchise Loops",
    body: "Advance seasons with momentum—clear beats, readable outcomes, and space to think between decisions.",
  },
  {
    title: "Decision-First Management",
    body: "Roster moves, contracts, and staff choices that read as strategy—not buried admin.",
  },
  {
    title: "History That Accumulates",
    body: "League memory that compounds: awards, records, and storylines that give every year context.",
  },
] as const;

const featurePillars = [
  {
    title: "Run the Front Office",
    body: "Budgets, staffing, and organizational identity—run the club, not just the lineup card.",
  },
  {
    title: "Build Through the Draft",
    body: "Prospect timelines and picks that can quietly reset—or cement—a franchise arc.",
  },
  {
    title: "Make the Trade",
    body: "Deals with weight: risk, windows, and roster chapters you still talk about seasons later.",
  },
  {
    title: "Win the Winter",
    body: "Contracts and free agency that make the cold months matter for contention cycles.",
  },
  {
    title: "Track the Legends",
    body: "Awards, records, and Hall cases that turn long saves into something worth revisiting.",
  },
  {
    title: "Shape the League",
    body: "Texture that evolves—so the league feels lived-in, not reset every October.",
  },
] as const;

const roadmapBoard = [
  { label: "Internal prototype playable", status: "active" as const },
  { label: "8-team quick-start being refined", status: "active" as const },
  { label: "Core franchise loop working", status: "active" as const },
  { label: "UX clarity and replayability pass underway", status: "progress" as const },
  { label: "External playtesting planned when the build earns it", status: "planned" as const },
] as const;

const fobTags = [
  "Fictional league",
  "GM mode",
  "Season sim",
  "Roster building",
  "Long-save history",
] as const;

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded border-l-2 border-brand-gold/70 bg-brand-gold/10 px-2.5 py-1">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand-gold-bright">
        {children}
      </span>
    </div>
  );
}

function StatusChip({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-1.5 rounded-md border border-brand-gold/28 bg-brand-panel-deep/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-ivory-muted shadow-[inset_0_1px_0_rgba(212,176,58,0.08)] sm:gap-2 sm:px-3 sm:py-1.5 sm:tracking-[0.14em]">
      {children}
    </div>
  );
}

function BrassRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent ${className}`}
      aria-hidden
    />
  );
}

function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full min-w-0 max-w-[min(100%,760px)] lg:max-w-[min(100%,42rem)] xl:max-w-[760px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-brand-gold/18 via-transparent to-brand-gold/8 blur-2xl"
      />
      <div className="relative w-full">
        {/* object-cover + right-weighted focal point: emphasizes in-image UI / player card, de-emphasizes duplicate headline/CTA art on the left */}
        <div className="relative min-h-[360px] w-full overflow-hidden rounded-2xl border border-brand-gold/28 bg-brand-navy-mid shadow-[0_28px_72px_-32px_rgba(0,0,0,0.78),0_12px_48px_-24px_rgba(196,160,40,0.12),inset_0_1px_0_rgba(212,176,58,0.18)] ring-1 ring-black/40 sm:min-h-[400px] lg:min-h-[440px] xl:min-h-[460px]">
          <Image
            src={HERO_HOME_IMAGE}
            alt="Front Office Baseball — league hub, standings, and in-game UI"
            fill
            className="object-cover object-[92%_46%] min-[400px]:object-[86%_46%] sm:object-[82%_46%] md:object-[78%_46%] lg:object-[72%_45%] xl:object-[70%_44%]"
            sizes="(max-width: 640px) 96vw, (max-width: 1024px) 90vw, 760px"
            priority
          />
        </div>
      </div>
    </figure>
  );
}

function FirstGameVisual({ src, aspectClass }: { src: string; aspectClass: string }) {
  const alt =
    src === "/images/game-ui-shell.png"
      ? "Front Office Baseball in-game UI — franchise management shell"
      : "Front Office Baseball — team page and league header";
  return (
    <figure className="relative mx-auto w-full min-w-0 max-w-full lg:mx-0">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-tl from-brand-gold/12 via-transparent to-transparent blur-xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-brand-gold/24 bg-brand-panel-deep shadow-[0_20px_56px_-28px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(212,176,58,0.12)] ring-1 ring-black/35">
        <div className={`relative w-full max-w-full ${aspectClass}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
      </div>
    </figure>
  );
}

function FirstGameVisualFallback() {
  return (
    <aside
      className="rounded-2xl border border-dashed border-brand-gold/30 bg-brand-panel-deep/70 p-6 shadow-[inset_0_0_28px_rgba(0,0,0,0.3)]"
      aria-label="Game preview placeholder"
    >
      <SectionLabel>League memo</SectionLabel>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-gold/85">
        UI preview unavailable
      </p>
      <p className="mt-3 text-sm leading-relaxed text-brand-ivory-muted">
        Screens of the in-game shell and team views will appear here as the build is ready for
        public-facing shots—no placeholder hype, just the real interface when it earns the frame.
      </p>
    </aside>
  );
}

function RoadmapStatusIcon({ status }: { status: "active" | "progress" | "planned" }) {
  if (status === "active") {
    return (
      <span
        className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-gold-bright shadow-[0_0_8px_rgba(212,176,58,0.5)]"
        aria-hidden
      />
    );
  }
  if (status === "progress") {
    return (
      <span
        className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full border border-brand-gold/70 bg-brand-gold/35"
        aria-hidden
      />
    );
  }
  return (
    <span
      className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full border border-brand-gold/35 bg-transparent"
      aria-hidden
    />
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col text-brand-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-gold focus:px-3 focus:py-2 focus:text-brand-navy"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-brand-gold/12 bg-[#050910]/92 backdrop-blur-md shadow-[0_8px_32px_-12px_rgba(0,0,0,0.55)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 md:px-6 md:py-3 lg:px-8 lg:py-3.5">
          <a
            href="#"
            className="group flex min-w-0 shrink items-center gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4"
          >
            {hasCoMark ? (
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-brand-gold/45 bg-gradient-to-b from-brand-navy-light/60 to-brand-panel-deep shadow-[inset_0_1px_0_rgba(240,233,220,0.08),0_0_24px_-6px_rgba(196,160,40,0.35)] ring-1 ring-brand-gold/15 transition group-hover:border-brand-gold/65 md:h-11 md:w-11 lg:h-[50px] lg:w-[50px]">
                <Image
                  src="/images/co-logo-mark.png"
                  alt=""
                  width={52}
                  height={52}
                  className="h-6 w-6 object-contain md:h-9 md:w-9 lg:h-10 lg:w-10"
                  priority
                />
              </span>
            ) : hasWordmarkLogo ? (
              <span className="min-w-0 self-center">
                <Image
                  src="/images/commissioners-office-logo.png"
                  alt="The Commissioner’s Office"
                  width={360}
                  height={70}
                  className="h-8 w-auto max-w-[min(100%,280px)] object-contain object-left transition-opacity group-hover:opacity-95 sm:h-9 md:h-10"
                  priority
                />
              </span>
            ) : null}
            {hasCoMark ? (
              <span className="flex min-w-0 flex-col leading-[1.12]">
                <span className="font-serif text-[0.9375rem] font-semibold tracking-tight text-brand-ivory sm:text-base md:text-xl md:leading-[1.15] lg:text-[1.375rem] xl:text-[1.4rem]">
                  The Commissioner’s Office
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-brand-ivory-muted md:hidden">
                  commissionersoffice.games
                </span>
                <span className="mt-0.5 hidden font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-brand-ivory-muted/95 md:block lg:mt-1 lg:text-[10px] lg:tracking-[0.18em]">
                  Sports Franchise Simulation Platform
                </span>
              </span>
            ) : null}
            {!hasCoMark && !hasWordmarkLogo ? (
              <span className="font-serif text-lg font-semibold tracking-tight">The Commissioner’s Office</span>
            ) : null}
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 md:flex md:gap-1 lg:gap-4"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-brand-ivory-muted transition hover:bg-brand-gold/[0.06] hover:text-brand-gold-bright"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg border border-brand-gold/50 bg-gradient-to-b from-brand-gold-bright to-brand-gold px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-brand-panel-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_6px_20px_-6px_rgba(196,160,40,0.45)] transition hover:from-[#dec04a] hover:to-[#c4a028] sm:px-3.5 sm:py-2 sm:text-[11px] md:px-4 md:text-sm"
          >
            <span className="hidden sm:inline">Join Development List</span>
            <span className="sm:hidden">Join List</span>
          </a>
        </div>

        <nav
          aria-label="Mobile sections"
          className="flex flex-wrap justify-center gap-x-0.5 gap-y-0.5 border-t border-brand-gold/[0.08] px-2 py-1 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-2 py-0.5 text-[11px] font-medium tracking-wide text-brand-ivory-muted/90 transition hover:text-brand-gold-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="border-b border-brand-gold/10" aria-labelledby="hero-heading">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:gap-8 sm:px-6 sm:py-16 md:gap-10 md:py-20 lg:min-h-[min(88vh,56rem)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.26fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-28 xl:gap-20">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <SectionLabel>Indie Sports Franchise Simulation</SectionLabel>
                <BrassRule className="hidden min-w-[3rem] flex-1 sm:block" />
              </div>

              <h1
                id="hero-heading"
                className="mt-4 font-serif text-[1.45rem] font-normal leading-[1.08] tracking-[-0.02em] text-brand-ivory sm:mt-6 sm:text-3xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.06]"
              >
                <span className="block font-medium">Run your franchise.</span>
                <span className="mt-0.5 block text-brand-ivory/92 sm:mt-1">Build a dynasty.</span>
                <span className="mt-0.5 block text-brand-ivory-muted tracking-[0.04em] sm:mt-1">
                  Shape history<span className="text-brand-gold">.</span>
                </span>
              </h1>

              <p className="mt-3.5 max-w-xl text-[0.9375rem] leading-snug text-brand-ivory-muted sm:mt-5 sm:text-base sm:leading-relaxed lg:mt-6 lg:text-[1.05rem]">
                The Commissioner’s Office is a new indie sports franchise simulation platform. First
                up:{" "}
                <span className="text-brand-ivory">Front Office Baseball</span> — a fictional
                baseball GM sim built for fast seasons, smart roster decisions, and league histories
                that grow with every save.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
                <StatusChip>
                  <span className="text-brand-ivory">Front Office Baseball</span>
                  <span className="text-brand-gold/90" aria-hidden>
                    ·
                  </span>
                  <span className="sm:hidden">Early Alpha</span>
                  <span className="hidden sm:inline">Early Alpha Consolidation</span>
                </StatusChip>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-brand-gold/55 bg-gradient-to-b from-brand-gold-bright to-brand-gold px-4 py-2.5 text-[13px] font-semibold text-brand-panel-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_28px_-6px_rgba(196,160,40,0.5)] transition hover:from-[#dec04a] hover:to-[#b89224] sm:min-h-0 sm:px-5 sm:py-3 sm:text-sm"
                >
                  Join the Development List
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-brand-gold/35 bg-brand-panel-deep/80 px-4 py-2.5 text-[13px] font-semibold text-brand-ivory shadow-[inset_0_1px_0_rgba(240,233,220,0.04)] transition hover:border-brand-gold/55 hover:bg-brand-navy-mid/90 hover:text-brand-gold-bright sm:min-h-0 sm:px-5 sm:py-3 sm:text-sm"
                >
                  View Roadmap
                </a>
              </div>
            </div>

            <div className="min-w-0 w-full lg:justify-self-stretch lg:self-center">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Platform */}
        <section
          id="platform"
          className="scroll-mt-24 border-b border-brand-gold/10 py-16 sm:py-20"
          aria-labelledby="platform-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <BrassRule className="mb-8 max-w-xs" />
            <h2
              id="platform-heading"
              className="font-serif text-2xl font-semibold tracking-tight text-brand-ivory sm:text-3xl"
            >
              Built for saves that last.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-ivory-muted sm:text-lg">
              The Commissioner’s Office is designed around the parts of sports sims that keep you
              advancing: clear decisions, believable roster movement, evolving teams, and history
              that gives every season context.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {platformCards.map((card) => (
                <li
                  key={card.title}
                  className="flex flex-col rounded-xl border border-brand-gold/18 bg-gradient-to-b from-brand-navy-mid/90 to-brand-panel-deep/95 p-6 shadow-[0_14px_44px_-18px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(212,176,58,0.07)]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-gold/80">
                    Platform
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-brand-gold-bright">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ivory-muted">
                    {card.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* First game */}
        <section
          id="games"
          className="scroll-mt-24 border-b border-brand-gold/10 py-16 sm:py-20"
          aria-labelledby="games-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,0.95fr)] lg:items-center lg:gap-16">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-gold">
                  First game
                </p>
                <h2
                  id="games-heading"
                  className="mt-2 font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl"
                >
                  First up: Front Office Baseball
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-ivory-muted">
                  <p>
                    Take over a fictional baseball franchise and guide it through drafts, trades,
                    contracts, free agency, injuries, playoff races, award seasons, record chases,
                    and Hall of Fame debates. The goal is depth without turning every night into an
                    admin-heavy spreadsheet marathon.
                  </p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Game tags">
                  {fobTags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-brand-gold/22 bg-brand-panel-deep/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-ivory-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                {firstGameImageSrc ? (
                  <FirstGameVisual src={firstGameImageSrc} aspectClass={firstGameAspectClass} />
                ) : (
                  <FirstGameVisualFallback />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 8-team philosophy */}
        <section
          className="border-b border-brand-gold/10 py-16 sm:py-20"
          aria-labelledby="quickstart-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-brand-gold/16 bg-gradient-to-br from-brand-navy-mid/55 to-brand-panel-deep/50 p-8 shadow-[0_18px_52px_-26px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(212,176,58,0.06)] sm:p-10 lg:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                <div className="lg:w-[42%]">
                  <SectionLabel>Product decision</SectionLabel>
                  <h2
                    id="quickstart-heading"
                    className="mt-4 font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl"
                  >
                    Small league first. Better game first.
                  </h2>
                </div>
                <div className="min-w-0 flex-1 border-t border-brand-gold/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="text-base leading-relaxed text-brand-ivory-muted sm:text-[1.05rem]">
                    Front Office Baseball is starting with an 8-team fictional quick-start so the
                    first playable version can be fast, readable, and replayable. Expansion can
                    come later. The first priority is making the core franchise loop feel honest,
                    sticky, and worth replaying.
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-gold/75">
                    Intentional scope · readable league · replay-first
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature pillars */}
        <section className="border-b border-brand-gold/10 py-16 sm:py-20" aria-labelledby="pillars-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-gold">
              Scouting report
            </p>
            <h2 id="pillars-heading" className="mt-2 font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
              What we’re building toward
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-brand-ivory-muted">
              Six focus areas—described like internal design notes, not trailer beats.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featurePillars.map((p, i) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-brand-gold/16 bg-gradient-to-b from-brand-panel/90 to-brand-panel-deep/95 p-5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(212,176,58,0.05)]"
                >
                  <div className="flex items-baseline justify-between gap-2 border-b border-brand-gold/12 pb-2">
                    <h3 className="font-serif text-base font-semibold text-brand-gold-bright sm:text-lg">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] tabular-nums text-brand-ivory-muted/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ivory-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alpha / roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-24 border-b border-brand-gold/10 py-16 sm:py-20"
          aria-labelledby="roadmap-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-gold">
              Alpha status
            </p>
            <h2 id="roadmap-heading" className="mt-2 font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
              Currently in alpha consolidation
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
              <p className="text-base leading-relaxed text-brand-ivory-muted sm:text-[1.05rem]">
                The internal prototype already supports league generation, season simulation,
                playoffs, offseason flow, draft, trades, contracts, free agency, injuries, prospect
                progression, team strategy, awards, records, Hall of Fame cases, and long-save
                history. The current work is about clarity, pacing, UI polish, and replayability
                before opening the doors wider.
              </p>
              <div className="rounded-2xl border border-brand-gold/20 bg-brand-panel-deep/85 p-6 shadow-[inset_0_2px_14px_rgba(0,0,0,0.38)]">
                <div className="flex items-center justify-between border-b border-brand-gold/15 pb-3">
                  <SectionLabel>Roadmap board</SectionLabel>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-ivory-muted">
                    Internal
                  </span>
                </div>
                <ul className="mt-4 space-y-3" role="list">
                  {roadmapBoard.map((row) => (
                    <li
                      key={row.label}
                      className="flex gap-3 rounded-lg border border-brand-gold/10 bg-brand-navy-mid/40 px-3 py-2.5"
                    >
                      <RoadmapStatusIcon status={row.status} />
                      <span className="text-sm leading-snug text-brand-ivory-muted">{row.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Devlog / follow */}
        <section
          id="devlog"
          className="scroll-mt-24 border-b border-brand-gold/10 py-16 sm:py-20"
          aria-labelledby="devlog-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-brand-gold/18 bg-gradient-to-br from-brand-navy-mid/45 to-brand-panel-deep/35 px-6 py-10 shadow-[0_18px_52px_-28px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(212,176,58,0.06)] sm:px-10 sm:py-12">
              <h2 id="devlog-heading" className="font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
                Follow the build
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-ivory-muted">
                Development updates will focus on real progress: design decisions, system notes,
                screenshots, playtest learnings, and the path from internal alpha to public testing.
                No hype machine — just the making of an indie sports sim in public.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/55 bg-gradient-to-b from-brand-gold-bright to-brand-gold px-5 py-3 text-sm font-semibold text-brand-panel-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_28px_-6px_rgba(196,160,40,0.45)] transition hover:from-[#dec04a] hover:to-[#b89224]"
                >
                  Join Development List
                </a>
                <a
                  href={SOCIAL_X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/32 bg-brand-panel-deep/85 px-5 py-3 text-sm font-semibold text-brand-ivory shadow-[inset_0_1px_0_rgba(240,233,220,0.04)] transition hover:border-brand-gold/50 hover:text-brand-gold-bright"
                >
                  Follow on X
                </a>
                <a
                  href={SOCIAL_BLUESKY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/32 bg-brand-panel-deep/85 px-5 py-3 text-sm font-semibold text-brand-ivory shadow-[inset_0_1px_0_rgba(240,233,220,0.04)] transition hover:border-brand-gold/50 hover:text-brand-gold-bright"
                >
                  Follow on Bluesky
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-14 sm:py-16" aria-labelledby="about-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="about-heading" className="font-serif text-xl font-semibold text-brand-ivory sm:text-2xl">
              About
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-ivory-muted sm:text-base">
              The Commissioner’s Office is the umbrella for an indie sports franchise simulation
              platform. <span className="text-brand-ivory">Front Office Baseball</span> is the first
              game—a fictional baseball GM experience—built with the same long-save respect we want
              to carry into future titles.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="join"
          className="scroll-mt-24 border-t border-brand-gold/12 bg-gradient-to-b from-transparent to-brand-panel-deep/30 py-16 sm:py-20"
          aria-labelledby="join-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="join-heading" className="font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
                Get on the development/playtest list.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-ivory-muted">
                Join the list for future updates and possible playtest opportunities when Front
                Office Baseball is ready for outside feedback.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/55 bg-gradient-to-b from-brand-gold-bright to-brand-gold px-6 py-3 text-sm font-semibold text-brand-panel-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_28px_-6px_rgba(196,160,40,0.5)] transition hover:from-[#dec04a] hover:to-[#b89224]"
                >
                  Join the Development List
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/35 bg-brand-panel-deep/85 px-6 py-3 text-sm font-semibold text-brand-ivory shadow-[inset_0_1px_0_rgba(240,233,220,0.04)] transition hover:border-brand-gold/55 hover:text-brand-gold-bright"
                >
                  Contact the Commissioner
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-gold/15 bg-gradient-to-t from-brand-panel-deep/60 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              {hasWordmarkLogo ? (
                <Image
                  src="/images/commissioners-office-logo.png"
                  alt="The Commissioner’s Office"
                  width={240}
                  height={47}
                  className="h-7 w-auto object-contain object-left opacity-90"
                />
              ) : hasCoMark ? (
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-brand-gold/35 bg-brand-panel-deep">
                  <Image
                    src="/images/co-logo-mark.png"
                    alt="The Commissioner’s Office mark"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </span>
              ) : null}
              <div>
                <p className="font-serif text-sm font-semibold text-brand-ivory">The Commissioner’s Office</p>
                <p className="mt-1 font-mono text-[11px] text-brand-ivory-muted">commissionersoffice.games</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-sm text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <a
                  href={SOCIAL_X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-ivory-muted transition hover:text-brand-gold-bright"
                >
                  X / Twitter
                </a>
                <a
                  href={SOCIAL_BLUESKY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-ivory-muted transition hover:text-brand-gold-bright"
                >
                  Bluesky
                </a>
              </div>
            </div>
          </div>
          <BrassRule className="my-8 opacity-60" />
          <p className="text-center font-mono text-[11px] text-brand-ivory-muted/75">
            <a
              href="/privacy"
              className="text-brand-gold-bright/90 underline-offset-4 transition hover:text-brand-gold hover:underline"
            >
              Privacy &amp; disclosure
            </a>
            <span className="mx-2 text-brand-ivory-muted/50" aria-hidden>
              ·
            </span>
            © 2026 The Commissioner’s Office
          </p>
        </div>
      </footer>
    </div>
  );
}
