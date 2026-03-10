import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Memori",
  description: "Memori terms of use and end-user license agreement.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-page-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-xs font-black text-white">M</div>
            <span className="text-base font-bold text-text-primary">Memori</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/5 px-4 py-1.5">
          <span className="text-xs font-bold text-violet">Terms of Use</span>
        </div>

        <h1 className="mb-2 text-3xl font-black text-text-primary">Terms of Use</h1>
        <p className="mb-10 text-sm font-medium text-text-tertiary">Last updated: March 6, 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-text-primary [&_strong]:text-text-primary [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-1">
          <section>
            <h2>Agreement to Terms</h2>
            <p>By downloading, installing, or using Memori (&quot;the App&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App.</p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>Memori is a cognitive training application that provides brain assessment tests, memory exercises, and progress tracking. The App is designed for educational and entertainment purposes and is not a medical device or diagnostic tool.</p>
          </section>

          <section>
            <h2>Medical Disclaimer</h2>
            <p><strong>Memori is not a substitute for professional medical advice, diagnosis, or treatment.</strong> The Brain Score, Brain Age, and other metrics provided by the App are for entertainment and self-improvement purposes only. They do not constitute a medical or neurological assessment. If you have concerns about your cognitive health, consult a qualified healthcare professional.</p>
          </section>

          <section>
            <h2>Subscriptions and Payments</h2>
            <p>Memori offers optional auto-renewable subscriptions:</p>
            <ul>
              <li><strong>Monthly Pro:</strong> $3.99/month</li>
              <li><strong>Annual Pro:</strong> $19.99/year (save 58%)</li>
            </ul>
            <p className="mt-3">Subscriptions are processed through Apple&apos;s App Store. Payment is charged to your Apple ID account at confirmation of purchase. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period. Your account will be charged for renewal within 24 hours prior to the end of the current period.</p>
            <p className="mt-3">You can manage and cancel your subscriptions by going to your App Store account settings. Any unused portion of a free trial period will be forfeited when you purchase a subscription.</p>
          </section>

          <section>
            <h2>Free and Pro Features</h2>
            <p>The App provides all 8 cognitive games to all users at no cost, with a limit of 3 training sessions per day for free users. Pro subscriptions unlock unlimited training sessions and support continued development of new games and features.</p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Interfere with or disrupt the App&apos;s functionality</li>
              <li>Manipulate leaderboard scores or game data</li>
              <li>Share or distribute modified versions of the App</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>All content, design, code, graphics, and other materials in Memori are owned by the developer and are protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the App without prior written permission.</p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the App. The App is provided &quot;as is&quot; without warranties of any kind.</p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>If you have questions about these terms, contact us at <a href="mailto:dylanbryanmiller@gmail.com" className="font-bold text-accent underline">dylanbryanmiller@gmail.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
