import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Commissioner's Office — Indie sports franchise simulation",
  description:
    "Run the franchise. Build a dynasty. Shape history. An indie sports franchise simulation platform starting with Front Office Baseball.",
  metadataBase: new URL("https://commissionersoffice.games"),
  openGraph: {
    title: "The Commissioner's Office",
    description:
      "Indie sports franchise simulation platform. First game: Front Office Baseball.",
    url: "https://commissionersoffice.games",
    siteName: "The Commissioner's Office",
    locale: "en_US",
    type: "website",
  },
};

const MAIL_CONTACT = "contact@commissionersoffice.games";
const MAIL_DEVELOPMENT_LIST = `mailto:${MAIL_CONTACT}?subject=${encodeURIComponent("Development List")}`;
const MAIL_FOLLOW_DEVELOPMENT = `mailto:${MAIL_CONTACT}?subject=${encodeURIComponent("Follow Development")}`;

const nav = [
  { label: "Games", href: "#games" },
  { label: "Devlog", href: "#devlog" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
] as const;

const pillars = [
  {
    title: "Franchise Management",
    body: "Budgets, staff, facilities, and long-term identity—run the org, not just the lineup.",
  },
  {
    title: "Draft, Trade & Free Agency",
    body: "Meaningful roster churn with room for bold moves, rebuilds, and contention windows.",
  },
  {
    title: "Deep Stats & Analytics",
    body: "Numbers that support decisions without burying you in noise.",
  },
  {
    title: "Awards & History",
    body: "League stories that accumulate: MVPs, records, and the lore of your save.",
  },
  {
    title: "More Sports To Come",
    body: "Baseball first—built as a platform so future franchises can follow the same craft.",
  },
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

function MockDashboard() {
  const standings = [
    { t: "Harbor City", w: 52, l: 34, gb: "—" },
    { t: "Capitol Nine", w: 49, l: 37, gb: "3.0" },
    { t: "Midland Stars", w: 47, l: 39, gb: "5.0" },
    { t: "Riverfront", w: 44, l: 42, gb: "8.0" },
    { t: "Lakeside", w: 41, l: 45, gb: "11.0" },
  ];

  const statChips = [
    { k: "AVG", v: ".312" },
    { k: "OBP", v: ".384" },
    { k: "SLG", v: ".548" },
    { k: "wRC+", v: "142" },
    { k: "WAR", v: "4.2" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-brand-panel via-brand-navy-mid to-brand-panel-deep p-4 shadow-[0_1px_0_rgba(212,176,58,0.12)_inset,0_32px_64px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(0,0,0,0.35)] sm:p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-brand-gold/08 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent"
      />

      <div className="relative flex flex-col gap-3.5">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-brand-gold/15 pb-3.5">
          <div className="space-y-2">
            <SectionLabel>League hub</SectionLabel>
            <p className="text-sm font-semibold tracking-tight text-brand-ivory">
              Continental Baseball League
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-md border border-brand-gold/20 bg-brand-panel-deep/90 px-2.5 py-1.5 font-mono text-[10px] tabular-nums text-brand-ivory-muted shadow-[inset_0_1px_0_rgba(240,233,220,0.04)]">
              Season 2042
            </div>
            <div className="rounded-md border border-brand-gold/30 bg-brand-gold/12 px-2.5 py-1.5 font-mono text-[10px] font-medium tabular-nums text-brand-gold-bright shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              Day 112
            </div>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_1.12fr]">
          <div className="rounded-xl border border-brand-gold/18 bg-brand-panel-deep/80 p-3 shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)]">
            <div className="mb-2.5">
              <SectionLabel>Standings · East</SectionLabel>
            </div>
            <div className="mb-2 grid grid-cols-[1fr_auto_auto_auto] gap-x-2 border-b border-brand-gold/12 pb-1.5 font-mono text-[9px] uppercase tracking-wider text-brand-gold/75">
              <span>Team</span>
              <span className="text-right">W</span>
              <span className="text-right">L</span>
              <span className="text-right">GB</span>
            </div>
            <div className="space-y-1">
              {standings.map((row, i) => (
                <div
                  key={row.t}
                  className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-2 rounded-lg border border-transparent px-2 py-1.5 text-xs transition hover:border-brand-gold/20 hover:bg-brand-gold/[0.04]"
                >
                  <span className="flex min-w-0 items-center gap-2 text-brand-ivory-muted">
                    <span className="w-4 shrink-0 font-mono tabular-nums text-brand-gold/70">
                      {i + 1}
                    </span>
                    <span className="truncate text-brand-ivory">{row.t}</span>
                  </span>
                  <span className="font-mono tabular-nums text-brand-ivory">{row.w}</span>
                  <span className="font-mono tabular-nums text-brand-ivory-muted">{row.l}</span>
                  <span className="font-mono tabular-nums text-brand-ivory-muted">{row.gb}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-brand-gold/22 bg-gradient-to-b from-brand-navy-light/35 to-brand-panel-deep/90 p-3 shadow-[inset_0_1px_0_rgba(212,176,58,0.08)]">
              <SectionLabel>Featured player</SectionLabel>
              <div className="mt-3 flex gap-3">
                <div className="relative flex h-[4.5rem] w-[3.25rem] shrink-0 flex-col justify-between rounded-lg border border-brand-gold/35 bg-gradient-to-b from-brand-navy-light/60 to-brand-panel-deep p-1.5 shadow-[inset_0_1px_0_rgba(240,233,220,0.05),0_4px_12px_rgba(0,0,0,0.4)]">
                  <span className="font-mono text-[7px] uppercase tracking-widest text-brand-gold/80">
                    FOB
                  </span>
                  <span className="text-center font-serif text-lg font-bold leading-none text-brand-ivory">
                    24
                  </span>
                  <span className="text-center font-mono text-[6px] uppercase text-brand-ivory-muted">
                    Harbor
                  </span>
                  <span
                    aria-hidden
                    className="absolute right-0 top-0 h-3 w-3 rounded-bl-md border-b border-l border-brand-gold/25 bg-brand-gold/10"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-lg font-semibold tracking-tight text-brand-ivory">
                    Jordan Reyes
                  </p>
                  <p className="text-[11px] text-brand-ivory-muted">CF · Harbor City · Age 24</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {statChips.map((s) => (
                      <div
                        key={s.k}
                        className="rounded border border-brand-gold/22 bg-brand-panel-deep/90 px-1.5 py-0.5 shadow-[inset_0_1px_0_rgba(240,233,220,0.04)]"
                      >
                        <span className="font-mono text-[8px] uppercase tracking-wide text-brand-gold/85">
                          {s.k}
                        </span>
                        <span className="ml-1 font-mono text-[11px] font-medium tabular-nums text-brand-ivory">
                          {s.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-gold/18 bg-brand-panel-deep/85 p-3 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
              <SectionLabel>League news</SectionLabel>
              <ul className="mt-2.5 space-y-2 text-[11px] leading-snug text-brand-ivory-muted">
                <li className="border-l-2 border-brand-gold/45 pl-2.5 text-brand-ivory/90">
                  Trade wire: Stars acquire bullpen arm for two prospects.
                </li>
                <li className="border-l-2 border-brand-gold/28 pl-2.5">
                  Injury update: Capitol Nine SP week-to-week.
                </li>
                <li className="border-l-2 border-brand-gold/15 pl-2.5">
                  MVP race tightening as September opens.
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="w-full rounded-lg border border-brand-gold/45 bg-gradient-to-b from-brand-gold/25 to-brand-gold/12 py-2.5 text-sm font-semibold tracking-[0.12em] text-brand-gold-bright shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_-8px_rgba(196,160,40,0.35)] transition hover:border-brand-gold/60 hover:from-brand-gold/35 hover:to-brand-gold/18"
            >
              Advance day
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold/45 bg-gradient-to-b from-brand-navy-light/50 to-brand-panel-deep font-serif text-[13px] font-bold leading-none tracking-tight text-brand-gold-bright shadow-[inset_0_1px_0_rgba(240,233,220,0.07),0_0_28px_-6px_rgba(196,160,40,0.35)] ring-1 ring-brand-gold/15 ${className}`}
      aria-hidden
    >
      <span className="select-none">CO</span>
    </span>
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

      <header className="sticky top-0 z-50 border-b border-brand-gold/12 bg-[#050910]/88 backdrop-blur-md shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#" className="group flex min-w-0 shrink items-center gap-3">
            <CoMark className="transition group-hover:border-brand-gold/65 group-hover:shadow-[inset_0_1px_0_rgba(240,233,220,0.1),0_0_32px_-4px_rgba(196,160,40,0.45)]" />
            <span className="min-w-0 flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold tracking-tight text-brand-ivory transition group-hover:text-brand-ivory sm:text-xl">
                The Commissioner&apos;s Office
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-ivory-muted">
                commissionersoffice.games
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex md:gap-1 lg:gap-5"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-2 text-sm text-brand-ivory-muted transition hover:bg-brand-gold/[0.06] hover:text-brand-gold-bright"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={MAIL_FOLLOW_DEVELOPMENT}
            className="shrink-0 rounded-lg border border-brand-gold/50 bg-gradient-to-b from-brand-gold-bright to-brand-gold px-3 py-2 text-xs font-semibold tracking-wide text-brand-panel-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_6px_20px_-6px_rgba(196,160,40,0.45)] transition hover:from-[#dec04a] hover:to-[#c4a028] sm:px-4 sm:text-sm"
          >
            Follow Development
          </a>
        </div>

        <nav
          aria-label="Mobile sections"
          className="flex flex-wrap justify-center gap-1 border-t border-brand-gold/10 px-2 py-2 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 text-xs text-brand-ivory-muted transition hover:text-brand-gold-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="flex-1">
        <section className="border-b border-brand-gold/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
            <div>
              <div className="flex items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-brand-gold">
                  The Commissioner&apos;s Office
                </p>
                <span
                  aria-hidden
                  className="hidden h-px flex-1 max-w-[4.5rem] bg-gradient-to-r from-brand-gold/50 to-transparent sm:block"
                />
              </div>

              <h1 className="relative mt-5 font-serif font-normal tracking-[-0.02em] text-brand-ivory">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-3 top-1 hidden h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-transparent from-10% via-brand-gold/30 to-transparent to-90% lg:block"
                />
                <span className="relative block text-[1.7rem] leading-[1.12] shadow-[0_0_40px_-12px_rgba(240,233,220,0.12)] sm:text-3xl lg:pl-5 lg:text-[2.85rem] lg:leading-[1.06]">
                  <span className="font-medium text-brand-ivory">Run the franchise.</span>
                </span>
                <span className="relative mt-2 block pl-0 text-[1.45rem] leading-snug text-brand-ivory/88 sm:text-[1.65rem] lg:mt-3 lg:pl-5 lg:text-[2.2rem] lg:leading-[1.1]">
                  Build a dynasty.
                </span>
                <span className="relative mt-2 block pl-0 text-[1.25rem] leading-snug tracking-[0.06em] text-brand-ivory-muted sm:text-2xl lg:mt-3 lg:pl-5 lg:text-[1.65rem] lg:tracking-[0.08em]">
                  Shape history
                  <span className="text-brand-gold" aria-hidden>
                    .
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-ivory-muted sm:text-lg">
                The Commissioner&apos;s Office is an indie sports franchise simulation platform
                starting with{" "}
                <span className="text-brand-ivory">Front Office Baseball</span>, a fictional
                baseball GM game built for fast seasons, smart roster decisions, and long-running
                league stories.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={MAIL_DEVELOPMENT_LIST}
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/55 bg-gradient-to-b from-brand-gold-bright to-brand-gold px-5 py-3 text-sm font-semibold text-brand-panel-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_28px_-6px_rgba(196,160,40,0.5)] transition hover:from-[#dec04a] hover:to-[#b89224]"
                >
                  Join the Development List
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-gold/35 bg-brand-panel-deep/80 px-5 py-3 text-sm font-semibold text-brand-ivory shadow-[inset_0_1px_0_rgba(240,233,220,0.04)] transition hover:border-brand-gold/55 hover:bg-brand-navy-mid/90 hover:text-brand-gold-bright"
                >
                  View Roadmap
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:justify-self-end">
              <MockDashboard />
            </div>
          </div>
        </section>

        <section className="border-b border-brand-gold/10 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
                Built for saves that last
              </h2>
              <p className="mt-2 text-brand-ivory-muted">
                Pillars we design around as the platform grows.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-brand-gold/16 bg-gradient-to-b from-brand-navy-mid/90 to-brand-panel-deep/90 p-5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(212,176,58,0.06)]"
                >
                  <h3 className="font-serif text-lg font-semibold text-brand-gold-bright">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ivory-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="games" className="scroll-mt-24 border-b border-brand-gold/10 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,0.35fr)] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-gold">
                  First game
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
                  First up: Front Office Baseball
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-brand-ivory-muted">
                  <p>
                    Front Office Baseball is a fictional baseball franchise sim: prospects climbing
                    the system, contracts that matter, trades with consequences, free agency that
                    reshapes winters, awards that bookmark eras, and records that stick with the
                    league.
                  </p>
                  <p>
                    The goal is depth without turning your evening into an admin-heavy spreadsheet
                    monster—tight loops for season play, clarity when you need it, and room for the
                    long save to become its own history book.
                  </p>
                </div>
              </div>
              <aside className="rounded-xl border border-dashed border-brand-gold/28 bg-brand-panel-deep/60 p-5 font-mono text-xs text-brand-ivory-muted shadow-[inset_0_0_24px_rgba(0,0,0,0.25)]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand-gold-bright">
                  Quick read
                </p>
                <p className="mt-3 leading-relaxed">
                  Fictional league · GM mode · season sim · roster building · league story over
                  decades
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-24 border-b border-brand-gold/10 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-gold">
              Where we are
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-brand-ivory sm:text-3xl">
              Currently in alpha consolidation
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <p className="leading-relaxed text-brand-ivory-muted">
                The prototype is playable internally. Right now we&apos;re tightening the{" "}
                <span className="text-brand-ivory">8-team quick-start</span>
                —making it clearer, stickier, and more replayable before we expand scope. That
                focus comes before marketing noise: get the core loop honest, then grow the league.
              </p>
              <div className="rounded-xl border border-brand-gold/18 bg-brand-panel-deep/80 p-5 shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)]">
                <SectionLabel>Roadmap snapshot</SectionLabel>
                <ul className="mt-3 space-y-2 text-sm text-brand-ivory-muted">
                  <li className="flex gap-2">
                    <span className="text-brand-gold">·</span>
                    Quick-start flow & onboarding clarity
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-gold">·</span>
                    Replayable season beats & league texture
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-gold">·</span>
                    External playtests when the build earns them
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="devlog" className="scroll-mt-24 border-b border-brand-gold/10 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-brand-gold/16 bg-gradient-to-br from-brand-navy-mid/50 to-brand-panel-deep/40 px-6 py-8 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,176,58,0.05)] sm:px-10">
              <h2 className="font-serif text-xl font-semibold text-brand-ivory">Devlog</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-ivory-muted">
                Build notes and design decisions will live here as we move from internal alpha
                toward public updates. Follow development to get them first—no spam, just progress.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl font-semibold text-brand-ivory">About</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-ivory-muted sm:text-base">
              The Commissioner&apos;s Office is an indie studio building a sports franchise
              simulation platform—thoughtful systems, respectful pacing, and UI you can live in for
              years. Baseball is the first proof; the ambition is a family of games that honor the
              same save-long mindset.
            </p>
          </div>
        </section>
      </main>

      <footer
        id="follow"
        className="scroll-mt-24 border-t border-brand-gold/15 bg-gradient-to-t from-brand-panel-deep/50 to-transparent"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-navy-mid/40 to-brand-panel-deep/60 p-8 shadow-[0_20px_56px_-28px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(212,176,58,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-ivory">
                Follow development
              </h2>
              <p className="mt-2 max-w-md text-sm text-brand-ivory-muted">
                We&apos;ll share milestones, devlog posts, and future playtest opportunities when
                they&apos;re ready—straightforward updates, no hype machine.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href="mailto:contact@commissionersoffice.games"
                className="font-mono text-sm text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
              >
                contact@commissionersoffice.games
              </a>
              <p className="text-xs text-brand-ivory-muted">
                Join the list: use the email above with subject{" "}
                <span className="text-brand-ivory">&quot;Development list&quot;</span>
              </p>
            </div>
          </div>
          <p className="mt-10 text-center font-mono text-[11px] text-brand-ivory-muted/80">
            © {new Date().getFullYear()} The Commissioner&apos;s Office · commissionersoffice.games
          </p>
        </div>
      </footer>
    </div>
  );
}
