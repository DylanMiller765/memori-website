import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Memori",
  description: "Memori terms of use and end-user license agreement.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-page-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/app-icon.png" alt="Memori" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-bold text-text-primary">Memori</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/15 bg-violet/5 px-4 py-1.5">
          <span className="text-xs font-bold text-violet">Terms of Use</span>
        </div>

        <h1 className="mb-2 text-3xl font-black text-text-primary">Terms of Use</h1>
        <p className="mb-10 text-sm font-medium text-text-tertiary">Last updated: March 6, 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-text-primary [&_strong]:text-text-primary [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-1">
          <section>
            <h2>Agreement to Terms</h2>
            <p>By downloading, installing, or using Memori (&quot;the App&quot;), you agree to these Terms. If you do not agree, do not use the App.</p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>Memori is a cognitive training app providing brain assessments, memory exercises, and progress tracking for educational and entertainment purposes. It is not a medical device.</p>
          </section>

          <section>
            <h2>Medical Disclaimer</h2>
            <p><strong>Memori is not a substitute for professional medical advice, diagnosis, or treatment.</strong> Brain Score, Brain Age, and other metrics are for entertainment and self-improvement only. Consult a healthcare professional for cognitive health concerns.</p>
          </section>

          <section>
            <h2>Subscriptions and Payments</h2>
            <p>Optional auto-renewable subscriptions:</p>
            <ul>
              <li><strong>Monthly Pro:</strong> $3.99/month</li>
              <li><strong>Annual Pro:</strong> $19.99/year (save 58%)</li>
            </ul>
            <p className="mt-3">Processed through Apple&apos;s App Store. Subscriptions auto-renew unless cancelled at least 24 hours before the billing period ends. Manage subscriptions in App Store account settings.</p>
          </section>

          <section>
            <h2>Free and Pro Features</h2>
            <p>All 8 games are available to everyone with 3 sessions/day for free users. Pro unlocks unlimited training.</p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for unlawful purposes</li>
              <li>Reverse engineer or decompile the App</li>
              <li>Manipulate leaderboard scores or game data</li>
              <li>Distribute modified versions of the App</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>All content and materials in Memori are owned by the developer and protected by copyright law.</p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>The App is provided &quot;as is&quot; without warranties. The developer is not liable for indirect or consequential damages.</p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>Continued use after changes constitutes acceptance of new terms.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions? Email <a href="mailto:dylanbryanmiller@gmail.com" className="font-bold text-accent underline">dylanbryanmiller@gmail.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
