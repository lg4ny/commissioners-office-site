# The Commissioner’s Office — Durable Learnings

These learnings capture what should survive beyond the current site: the positioning, evidence standards, and scope choices that remain useful for future Commissioner's Office projects. They separate repository facts from operator recollection and avoid treating early participation or future intent as proof of traction, conversion, or a mature portfolio.

### Use the umbrella to express intent, not portfolio maturity

**Learning**
The Commissioner’s Office is a durable umbrella for future sports simulation games, while Front Office Baseball is the only concrete title today. The brand should create room for a portfolio without presenting one as already established.

**Evidence**
The first landing-page implementation described the site as an indie sports franchise simulation platform and labeled Front Office Baseball as the first game; the current homepage still says “First up: Front Office Baseball” and describes The Commissioner’s Office as the umbrella. The operator confirms that the name exists because additional sports games are intended and that future titles should remain under it, but no other concrete title appears in the repository.

**Future implication**
Keep umbrella-level language broad enough to travel across sports, but anchor every present-tense product claim, screenshot, CTA, and milestone in the game that actually exists. Introduce another title only when it becomes concrete.

**Confidence**
HIGH

**Evidence type**
MIXED

### Preserve the durable game promise

**Learning**
The enduring promise is player ownership of a long-running franchise story: “Run your franchise. Build a dynasty. Shape history.” Fast, readable decisions and history that accumulates are the supporting product principles, not separate slogans.

**Evidence**
Commit `afa5b10` deliberately changed “Run the franchise” to “Run your franchise.” The exact three-part line remains the homepage hero and is marked immutable in `docs/strategy/site-posture.md`. Current homepage sections reinforce it through fast franchise loops, decision-first management, long-save history, evolving teams, awards, records, and league stories that grow with each save.

**Future implication**
Use the promise as a filter for future games and launch copy. New feature language should explain how the player makes consequential decisions, builds attachment over time, or creates remembered history rather than merely listing systems.

**Confidence**
HIGH

**Evidence type**
POSITIONING DECISION

### Let demonstrated evidence determine stage language

**Learning**
Stage language should describe the strongest state the project can currently prove, no more: Front Office Baseball is a playable private MVP with deliberately limited access, not a public launch, release, beta, or commercially complete product.

**Evidence**
The homepage history moved from “internal prototype” and “early alpha consolidation” to “Playable Private MVP” only as the approved posture changed. `docs/strategy/site-posture.md` records the evidence boundary: a web-playable build, an 8-team fictional quick-start, an established core loop, a small contacted tester group, limited access, and no fixed public launch timeline. The current homepage and metadata use those facts consistently.

**Future implication**
Maintain a small approved-facts set for each project and derive status chips, metadata, roadmap copy, and CTAs from it. Advance the label only after the underlying state changes, and retire language that either understates or overstates the evidence.

**Confidence**
HIGH

**Evidence type**
FACT

### Define the funnel honestly and read small signals at their true size

**Learning**
“Join the Development List” is an updates-and-possible-future-feedback CTA, not a promise of playtest access. Four remembered signups show that a few people acted; they do not establish meaningful demand, product-market fit, site-driven tester acquisition, or conversion performance.

**Evidence**
The repository first routed interest through email, then commit `c0d74f8` connected the CTA to a Tally form. The current site and `docs/strategy/site-posture.md` explicitly say that access is limited and not immediate and that future feedback rounds may draw from the list; they reject bare “Join the Playtest” language. The operator remembers four development-list signups, but the repository does not attribute testers to the site or provide traffic and conversion evidence that would support a stronger conclusion.

**Future implication**
Name each funnel for what it delivers, instrument source and outcomes before making acquisition claims, and treat tiny counts as qualitative participation signals. If a future CTA offers access, state the eligibility, timing, and next step plainly.

**Confidence**
HIGH

**Evidence type**
MIXED

### Make the public roadmap a statement of focus, not a promise ledger

**Learning**
A useful public roadmap communicates current focus, sequencing, and constraints without publishing speculative scope or dates.

**Evidence**
Commit `563ac7d` revised the roadmap around the 8-team quick-start, core-loop tuning, readability, replayability, and readiness for outside feedback while explicitly rejecting a launch date. The current board continues that pattern with active, in-progress, and planned items. `docs/strategy/site-posture.md` forbids unapproved timelines and high-risk scope claims such as 30 teams, 162 games, multiplayer, modding, public accounts, and downloads, and warns against turning internal roadmap material into public claims.

**Future implication**
Publish only near-horizon outcomes supported by current work. Prefer focus areas and evidence gates to dates or exhaustive feature lists; move uncertain systems back into internal planning until they are ready to become commitments.

**Confidence**
HIGH

**Evidence type**
POSITIONING DECISION

### Govern visual truth before ambiguity becomes a problem

**Learning**
Current-build evidence and future-looking design work need an explicit visual contract: label each by status and never let presentation imply that an exploration has shipped. This is prudent governance, not a postmortem claim that earlier AI-generated images caused harm.

**Evidence**
`docs/strategy/site-posture.md` requires “Current MVP Build” for real playable-build screens and “Future Interface Direction” or “Design Exploration” plus a no-commitment disclaimer for future comps. It also establishes the `fob-vision-*` naming convention and forbids mixing the two classes without clear labels. The operator recalls that some AI-generated screenshots may have been somewhat ahead of the product but does not consider them a meaningful failure and does not remember major early marketing claims as problematic.

**Future implication**
Record provenance and status when a visual is created, keep current and aspirational assets separate, and carry the label into captions and surrounding copy. Treat the rule as a reusable trust safeguard rather than evidence of past damage.

**Confidence**
HIGH

**Evidence type**
MIXED

### Curate screenshots as proof, not inventory

**Learning**
Public screenshots should be a small, reviewed proof set chosen to demonstrate the core experience. A large internal capture archive is useful source material, not a publishable gallery.

**Evidence**
`docs/reference/early-screen-grabs/README.md` inventories 106 internal alpha PNGs, including 55 uncategorized captures, and says public use requires a separate ticket and human review. It recommends stable semantic names, compression, explicit publish lists, and small groups of images rather than bulk dumps. By contrast, the homepage references a few renamed assets such as `hero-dashboard.png`, `game-ui-shell.png`, `player-profile-card.png`, and `team-page-header.png`; commit `3bc79e0` added a deliberately curated feature showcase, and the current section calls the images “curated product views.”

**Future implication**
For each launch or update, select only the images needed to prove a claim, verify that they depict the stated build, rename and optimize them, and obtain human approval. Keep raw captures in an internal source of truth and keep unpublished archives out of the public asset surface where practical.

**Confidence**
HIGH

**Evidence type**
FACT

### Keep build-in-public practice real and proportionate

**Learning**
The project did build in public through informal social updates, but it did not establish a sustained formal site-based devlog. The durable practice is to share concrete progress when there is something worth sharing, not to imply an editorial program that did not exist.

**Evidence**
The operator confirms that development updates were posted on social media. Commit `25f95f5` expanded the homepage's “Follow the build” section around X and Bluesky notes, curated screenshots, interface decisions, and playtest readiness. The current site still sends followers to social channels and describes what updates may cover, while the tracked repository contains no published `docs/devlog` entry or dedicated devlog route.

**Future implication**
Continue lightweight, evidence-based updates through channels the operator can sustain. Add a formal on-site devlog only if there is a real publishing cadence and archive to support it; until then, label the site area as a way to follow development rather than as an existing body of posts.

**Confidence**
HIGH

**Evidence type**
MIXED

### Keep the public surface intentionally small

**Learning**
The site succeeded as a focused, quick-to-build public surface. Its simplicity is a deliberate constraint to preserve, not an overengineering problem to solve.

**Evidence**
The site began in commit `4ed9122` as a single landing page organized around the brand, one game, a roadmap, development-following, and contact. The current application still has one substantive homepage and one privacy/disclosure page, plus technical metadata routes; the primary outbound actions are the development-list form, social profiles, and email. The operator confirms that the site was intentionally simple, quick, and easy to build.

**Future implication**
For a future title or umbrella refresh, start with the smallest surface that can state the promise, show honest proof, explain current status, and offer one clear next step. Add infrastructure, content types, or routes only when a concrete publishing, measurement, or portfolio need earns them.

**Confidence**
HIGH

**Evidence type**
MIXED
