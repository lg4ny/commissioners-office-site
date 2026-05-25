import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const WAITLIST_FORM_URL = "https://tally.so/r/OD8BZM";
const SOCIAL_X_URL = "https://x.com/CommissionersHQ";
const SOCIAL_BLUESKY_URL = "https://bsky.app/profile/commishoffice.bsky.social";
const CONTACT_EMAIL = "contact@commissionersoffice.games";

export const metadata: Metadata = {
  title: "Privacy & Site Disclosure | The Commissioner’s Office",
  description:
    "Plain-English overview of analytics, forms, contact, and outbound links on the Commissioner’s Office marketing site.",
  alternates: {
    canonical: "/privacy",
  },
};

function DisclosureSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-brand-gold/12 pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-xl font-semibold text-brand-ivory sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-ivory-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-full flex-col text-brand-ivory">
      <header className="border-b border-brand-gold/12 bg-[#050910]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-serif text-sm font-semibold text-brand-ivory transition hover:text-brand-gold-bright"
          >
            The Commissioner’s Office
          </Link>
          <Link
            href="/"
            className="font-mono text-xs text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold-bright">
            Site disclosure
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-brand-ivory sm:text-4xl">
            Privacy &amp; site disclosure
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-ivory-muted">
            This page explains, in plain English, what third-party tools this marketing site uses and
            what may happen when you browse, join the development list, email us, or follow our social
            profiles. The Commissioner’s Office is an early-stage indie project—this is practical
            transparency, not a formal legal policy or compliance certification.
          </p>
          <p className="mt-3 font-mono text-[11px] text-brand-ivory-muted/80">Last updated: May 2026</p>

          <div className="mt-10 space-y-8">
            <DisclosureSection title="What this site is">
              <p>
                <strong className="font-medium text-brand-ivory">commissionersoffice.games</strong> is
                a public marketing site for The Commissioner’s Office and its first game, Front Office
                Baseball. It does not host game accounts, saved leagues, or in-game data. Visiting this
                site is separate from playing a build.
              </p>
            </DisclosureSection>

            <DisclosureSection title="Analytics (Google Analytics)">
              <p>
                We use{" "}
                <a
                  href="https://analytics.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  Google Analytics
                </a>{" "}
                to understand aggregate traffic—roughly how many people visit, which pages they open,
                and whether key calls-to-action get clicks.
              </p>
              <p>
                Google Analytics may collect information such as pages viewed, approximate location,
                browser and device type, and referral source. It may use cookies or similar technologies
                as part of that service. We track page views on this site and clicks on certain
                development-list links for basic engagement measurement.
              </p>
              <p>
                We use this data to improve the site and understand interest in the project—not to
                build individual marketing profiles. You can limit analytics collection through your
                browser settings, privacy extensions, or Google&apos;s own opt-out tools.
              </p>
            </DisclosureSection>

            <DisclosureSection title="Development / playtest list (Tally)">
              <p>
                Buttons such as &ldquo;Join the Development List&rdquo; open a form hosted by{" "}
                <a
                  href="https://tally.so/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  Tally
                </a>
                , a third-party form provider. Our current form is at{" "}
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-mono text-sm text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  {WAITLIST_FORM_URL}
                </a>
                .
              </p>
              <p>
                Information you choose to submit—such as an email address or playtest-related
                details—goes to Tally and is available to us for project communication. We use it to
                send development updates and, when appropriate, invite people to possible playtests.
                We do not sell mailing-list data.
              </p>
              <p>
                Tally operates under its own terms and privacy practices. Please review their
                documentation if you want details on how they store and process form submissions.
              </p>
            </DisclosureSection>

            <DisclosureSection title="Email contact">
              <p>
                Email links on this site (for example{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-mono text-sm text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                ) open your email client. If you write to us, we receive whatever you send—your address,
                message contents, and any attachments.
              </p>
              <p>
                We use email to respond to questions, feedback, and project-related inquiries. Keep
                sensitive personal information out of messages unless it is necessary for your request.
              </p>
            </DisclosureSection>

            <DisclosureSection title="Social profile links">
              <p>
                This site links to our profiles on third-party social platforms, including{" "}
                <a
                  href={SOCIAL_X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  X / Twitter
                </a>{" "}
                and{" "}
                <a
                  href={SOCIAL_BLUESKY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  Bluesky
                </a>
                . Those links leave this site. Each platform has its own privacy policy and data
                practices.
              </p>
            </DisclosureSection>

            <DisclosureSection title="Cookies and similar technologies">
              <p>
                Aside from analytics-related technologies described above, this marketing site does not
                run its own login system or broad advertising trackers. We do not operate a separate
                cookie-consent banner at this early stage; if that changes as the project grows, this
                page will be updated.
              </p>
            </DisclosureSection>

            <DisclosureSection title="Changes and contact">
              <p>
                This disclosure may change as the site, tools, or project stage evolves. Material
                updates will be reflected on this page.
              </p>
              <p>
                Questions about this page or how we handle site-related communication? Email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-mono text-sm text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </DisclosureSection>
          </div>
        </article>
      </main>

      <footer className="border-t border-brand-gold/15 bg-gradient-to-t from-brand-panel-deep/60 to-transparent">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-[11px] text-brand-ivory-muted/75">
            © 2026 The Commissioner’s Office ·{" "}
            <Link
              href="/"
              className="text-brand-gold-bright underline-offset-4 transition hover:text-brand-gold hover:underline"
            >
              commissionersoffice.games
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
