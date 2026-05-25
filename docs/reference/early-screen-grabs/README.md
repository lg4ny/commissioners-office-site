# Front Office Baseball — Early Screenshot Archive (Reference Index)

**Status:** Internal / reference-only  
**Last indexed:** 2026-05-25  
**Ticket:** P1-screenshot-and-reference-archive-index-v1

---

## Purpose

This folder holds early **Front Office Baseball** in-game screenshots captured during internal alpha development (April–May 2026). The archive exists so future website, dev log, marketing, and visual-polish work can quickly find relevant UI references without digging through raw folders.

This is a **private planning asset** inside the website repo. Nothing here is published on the public site by default. Use this index to orient yourself; open folders directly when you need a specific shot.

---

## Access and publication policy

| Rule | Detail |
|------|--------|
| Default use | Internal reference, design review, ticket planning, dev log drafting |
| Public use | Requires a **separate ticket** and **human review** before any image ships to `public/` or the live site |
| This index | Does **not** approve screenshots for public use |
| Candidate language | Sections below flag areas that *may* be worth reviewing for future public use — not pre-approved assets |

The live site currently uses a small set of **curated, renamed** images under [`public/images/`](../../../public/images/) (for example `hero-dashboard.png`, `game-ui-shell.png`). Those are separate from this archive.

A full duplicate of this archive also exists at [`public/images/Early Screen Grabs/`](../../../public/images/Early%20Screen%20Grabs/) (106 PNGs, same structure). That copy is **not wired into any routes** today; treat both locations as reference storage until a curation ticket consolidates them.

---

## Archive at a glance

| Metric | Value |
|--------|-------|
| Total PNG screenshots | **106** |
| Feature-area subfolders | **13** (2 empty placeholders) |
| Uncategorized (archive root) | **55** |
| Capture date range | **2026-04-16** through **2026-05-14** |
| Naming convention | macOS default: `Screenshot YYYY-MM-DD at H.MM.SS AM/PM.png` (some with ` 2` / ` 3` duplicate suffixes) |

---

## Folder structure

```
early-screen-grabs/
├── README.md                 ← this index
├── *.png                     ← 55 uncategorized screenshots (archive root)
├── Awards/                   ← end-of-season awards, voting, results
├── Draft/                    ← amateur draft board and pick flow
├── Free Agents/              ← free-agent market and signings
├── Hall of Fame/             ← (empty — reserved for future captures)
├── History/                  ← (empty — reserved for future captures)
├── Home/                     ← franchise hub / league home dashboard
├── International Market/     ← international prospect pool
├── League Leaders/           ← statistical leaderboards
├── Pipeline/                 ← farm-system / prospect pipeline views
├── Player Page/              ← individual player profile screens
├── Team Composition/         ← roster, lineup, and staff composition
├── Teams/                    ← team list and team-level pages
└── Trades/                   ← trade builder and completed deals
```

Paths above are relative to this README.

---

## Inventory by category

Rough counts as of indexing. Open each folder for the full set.

| Folder | PNG count | Representative content | Notes |
|--------|-----------|-------------------------|-------|
| *(archive root)* | 55 | Mixed / uncategorized | Largest gap in organization; includes heavy **2026-05-13** (12) and **2026-05-14** (25) batches |
| [Awards/](Awards/) | 10 | Award ceremonies, ballot results, season honors | Spans Apr 18 and May 12 sessions |
| [Draft/](Draft/) | 4 | Draft board, pick selection | All captured 2026-05-11 |
| [Free Agents/](Free%20Agents/) | 3 | FA pool, offer/signing UI | All captured 2026-05-11 |
| [Hall of Fame/](Hall%20of%20Fame/) | 0 | — | Placeholder folder only |
| [History/](History/) | 0 | — | Placeholder folder only |
| [Home/](Home/) | 2 | League hub, dashboard shell | Apr 16 captures |
| [International Market/](International%20Market/) | 2 | International signing pool | May 11 captures |
| [League Leaders/](League%20Leaders/) | 7 | Batting/pitching leader tables | Apr 16 – May 13 |
| [Pipeline/](Pipeline/) | 4 | Prospect lists, org depth | May 12 captures |
| [Player Page/](Player%20Page/) | 8 | Player cards, stats, career views | Apr 17 – May 7 |
| [Team Composition/](Team%20Composition/) | 3 | Active roster / lineup management | May 11 captures |
| [Teams/](Teams/) | 2 | Team directory and team header | Apr 16–17 |
| [Trades/](Trades/) | 6 | Trade proposal UI, completed trades | Apr 17 – Apr 30 |

**Categorized subfolder total:** 51 PNGs across 11 populated folders.

---

## Screenshot types (by feature area)

Use these groupings when scoping future tickets:

- **Core shell & navigation** — [Home/](Home/), [Teams/](Teams/), root captures from Apr 16–28
- **Player identity & stats** — [Player Page/](Player%20Page/), [League Leaders/](League%20Leaders/)
- **Roster management** — [Team Composition/](Team%20Composition/), [Pipeline/](Pipeline/)
- **Offseason / acquisition loops** — [Draft/](Draft/), [Free Agents/](Free%20Agents/), [International Market/](International%20Market/), [Trades/](Trades/)
- **League memory & legacy** — [Awards/](Awards/); [Hall of Fame/](Hall%20of%20Fame/) and [History/](History/) await captures
- **Uncategorized / needs triage** — 55 files at archive root, especially the May 13–14 batches (likely mixed game-flow and UI states — confirm visually before filing)

---

## Recommended uses for future tickets

| Ticket type | Start here |
|-------------|------------|
| Homepage hero / feature art refresh | [Home/](Home/), [Player Page/](Player%20Page/), curated picks from root after triage |
| Dev log post with UI progress | One feature folder per post; prefer dated sequences within a folder |
| Public screenshot gallery | Not in scope yet — requires curation ticket, compression, and explicit publish list |
| Marketing / social crops | [Home/](Home/), [Draft/](Draft/), [Trades/](Trades/) — **candidate only**; review for readable text and fictional-team safety |
| UX polish reference | [Team Composition/](Team%20Composition/), [Pipeline/](Pipeline/), [League Leaders/](League%20Leaders/) |
| “Shape the League” / history pillar copy | [Awards/](Awards/); capture new shots into [Hall of Fame/](Hall%20of%20Fame/) and [History/](History/) |
| OG / social preview images | Use existing [`public/images/`](../../../public/images/) assets today; do not promote raw archive files without review |

---

## Public-use candidates (review required)

The following areas *may* be worth human review for future public-facing use. **None are approved for publication by this document.**

| Area | Why it might work | Review before use |
|------|-------------------|-------------------|
| [Home/](Home/) | Shows core franchise shell | Check for stale UI, legibility at crop sizes |
| [Player Page/](Player%20Page/) | Strong “GM sim” identity | Verify fictional player/team names are acceptable |
| [Draft/](Draft/) | Clear, readable feature moment | Confirm no debug overlays or WIP labels |
| [Awards/](Awards/) | Supports “history accumulates” messaging | Prefer cleaner May 12 set over earlier captures |
| Curated root picks (post-triage) | May fill gaps after categorization | Must be filed into a feature folder and renamed first |

---

## Naming and organization notes

1. **Default macOS names** — Files use `Screenshot YYYY-MM-DD at …` with optional ` 2` / ` 3` suffixes for duplicates. Not web-friendly; rename only in a dedicated curation ticket.
2. **Archive root backlog** — 55 files (~52% of the archive) sit uncategorized. The May 14 cluster (25 files) likely needs a dedicated triage pass to assign feature folders.
3. **Empty placeholders** — [Hall of Fame/](Hall%20of%20Fame/) and [History/](History/) exist but contain no PNGs yet. Add captures there rather than leaving history-related shots in root.
4. **Duplicate locations** — `docs/reference/early-screen-grabs/` (this archive) and `public/images/Early Screen Grabs/` currently mirror each other. Future work should pick a **single source of truth** and stop dual maintenance.
5. **Public marketing assets** — The homepage uses renamed files in `public/images/` (not this archive path). See `src/app/page.tsx` for which filenames are referenced.

---

## Follow-up recommendations

1. **Triage archive root** — Sort the 55 loose PNGs into feature folders; tag or delete exact duplicates.
2. **Fill placeholder folders** — Capture Hall of Fame and History screens when those features are ready.
3. **Consolidate copies** — Decide whether reference lives under `docs/reference/` only, with `public/` holding published subsets.
4. **Compression pass** — Raw PNGs are large (~1–2 MB each). Optimize only selected public candidates, not the full archive.
5. **Stable public names** — When publishing, use semantic names (`fob-draft-board.png`) rather than screenshot timestamps.
6. **Dev log workflow** — Link posts to folder paths in this index; attach 2–4 shots per post, not bulk dumps.
7. **Periodic re-index** — Update this README when folder counts or structure change materially.

---

## Related repo locations

| Path | Role |
|------|------|
| `docs/reference/early-screen-grabs/` | **This archive** — internal reference index |
| `public/images/Early Screen Grabs/` | Mirror copy (same 106 PNGs); not served by dedicated routes |
| `public/images/*.png` | Curated public marketing images used on the live homepage |
| `src/app/page.tsx` | Homepage; references curated `public/images/` assets only |

---

## Index maintenance

When adding screenshots:

1. Save into the appropriate feature subfolder (create one if needed).
2. Update the inventory table in this README if counts change by more than a few files.
3. Do not assume new captures are public-ready.
