import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Memo",
  description: "What Memo collects, why, and who it is shared with.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-page-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/app-icon.png" alt="Memo" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-bold text-text-primary">Memo</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/15 bg-teal/5 px-4 py-1.5">
          <span className="text-xs font-bold text-teal">Privacy Policy</span>
        </div>

        <h1 className="mb-2 text-3xl font-black text-text-primary">Privacy Policy</h1>
        <p className="mb-10 text-sm font-medium text-text-tertiary">Last updated: September 28, 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-text-primary [&_strong]:text-text-primary [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-1 [&_a]:font-bold [&_a]:text-accent [&_a]:underline">
          <section>
            <h2>The Short Version</h2>
            <p>Memo: Screen Time App Blocker (&quot;Memo&quot;) does not have accounts. We never ask for your name, email, or phone number. We cannot see which apps you block or how you use them. We collect anonymous usage analytics and purchase records so we can improve the App and manage subscriptions. We do not sell your data and do not use it for advertising.</p>
          </section>

          <section>
            <h2>Screen Time Data Stays With Apple</h2>
            <p>Memo uses Apple&apos;s Screen Time frameworks (Family Controls, Managed Settings, and Device Activity) to block the apps you choose. Apple gives Memo only opaque tokens for your selections, not app names or usage history. These tokens stay on your device. Memo cannot read, and never sends to us or anyone else, which apps you block, your browsing, or your Screen Time activity.</p>
          </section>

          <section>
            <h2>Data Stored on Your Device</h2>
            <p>Your game results, scores, streaks, settings, and focus history are stored locally on your device. Deleting the App deletes this data.</p>
          </section>

          <section>
            <h2>Data We Collect</h2>
            <p><strong>Usage analytics (PostHog).</strong> When you use the App, we record events such as screens viewed, onboarding steps, games started and finished, scores, streak length, paywall views, and subscription status. We also record basic device and app information (device model, iOS version, app version, language, and approximate country derived from IP address). These events are tied to a random ID generated on your device, not to your name or Apple ID. If you answer &quot;Where did you find Memo?&quot;, your answer is saved with this ID.</p>
            <p className="mt-3"><strong>Screen recordings of onboarding.</strong> To see where people get stuck, the App may record what appears on screen during the first-run onboarding and send that recording to PostHog. Recording stops when onboarding ends. It does not include other apps, your Screen Time selections, or payment screens handled by Apple.</p>
            <p className="mt-3"><strong>Purchases (RevenueCat).</strong> When you start a trial or subscribe, Apple processes the payment. We use RevenueCat to verify purchases and track subscription status. RevenueCat receives your App Store transaction information and the same random ID. We never see or store your payment details.</p>
            <p className="mt-3"><strong>Game Center (Apple).</strong> If you are signed in to Game Center, your scores are submitted to Apple&apos;s leaderboards and shown with your Game Center name. This is handled by Apple under Apple&apos;s privacy policy.</p>
            <p className="mt-3"><strong>Notifications.</strong> Reminders are scheduled locally on your device. We do not use push-notification tokens.</p>
          </section>

          <section>
            <h2>How We Use Data</h2>
            <ul>
              <li>To provide the App and unlock Memo Pro features you pay for</li>
              <li>To understand which features and onboarding steps work, and fix what doesn&apos;t</li>
              <li>To find and fix crashes and bugs</li>
              <li>To understand which channels (for example TikTok or App Store search) bring people to Memo</li>
            </ul>
            <p className="mt-3">We do not sell your data, share it with data brokers, or use it for targeted advertising. We do not track you across other companies&apos; apps or websites.</p>
          </section>

          <section>
            <h2>Service Providers</h2>
            <ul>
              <li><strong>PostHog</strong>: product analytics and onboarding recordings (<a href="https://posthog.com/privacy">privacy policy</a>)</li>
              <li><strong>RevenueCat</strong>: subscription management (<a href="https://www.revenuecat.com/privacy">privacy policy</a>)</li>
              <li><strong>Apple</strong>: App Store payments, Screen Time, and Game Center (<a href="https://www.apple.com/legal/privacy/">privacy policy</a>)</li>
            </ul>
            <p className="mt-3">These providers process data on our behalf and only to provide their services to us.</p>
          </section>

          <section>
            <h2>Retention and Your Choices</h2>
            <p>Analytics data is kept for as long as it helps us improve the App, and no longer than two years. Purchase records are kept as long as needed for subscription and legal purposes.</p>
            <p className="mt-3">You can revoke Screen Time access at any time in iOS Settings → Screen Time. To ask us to delete analytics or purchase data linked to your device&apos;s random ID, or to ask what we hold, email us. Because we don&apos;t know who you are, we may ask for details such as a purchase receipt so we can find your data. Depending on where you live (for example the EU, UK, or California), you may have additional rights to access, correct, or delete your data, and we will honor them.</p>
          </section>

          <section>
            <h2>Children</h2>
            <p>Memo is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us data, contact us and we will delete it.</p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>If we change this policy, we will update the &quot;Last updated&quot; date above.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions or requests? Email <a href="mailto:dylanbryanmiller@gmail.com">dylanbryanmiller@gmail.com</a>. See also our <Link href="/terms">Terms of Use</Link>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
