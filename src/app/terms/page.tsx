import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Memo",
  description: "Memo terms of use, subscription terms and end-user license agreement.",
};

export default function TermsOfUse() {
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
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/15 bg-violet/5 px-4 py-1.5">
          <span className="text-xs font-bold text-violet">Terms of Use</span>
        </div>
        <h1 className="mb-2 text-3xl font-black text-text-primary">Terms of Use</h1>
        <p className="mb-10 text-sm font-medium text-text-tertiary">Last updated: September 28, 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-text-primary [&_strong]:text-text-primary [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-1 [&_a]:font-bold [&_a]:text-accent [&_a]:underline">
          <section>
            <h2>Agreement to Terms</h2>
            <p>These Terms of Use (&quot;Terms&quot;) govern your use of Memo: Screen Time App Blocker (&quot;Memo&quot; or &quot;the App&quot;). By downloading, installing, or using the App, you agree to these Terms. If you do not agree, do not use the App.</p>
          </section>

          <section>
            <h2>What Memo Does</h2>
            <p>Memo lets you choose apps to block using Apple&apos;s Screen Time framework. When you open a blocked app, Memo asks you to play a short brain game before the app unlocks for a limited time. Memo also includes brain games, streaks, scores, insights, and Game Center leaderboards.</p>
            <p className="mt-3">Blocking relies on Screen Time permissions that you grant and can revoke at any time in iOS Settings. Memo cannot guarantee that every app or website will be blocked in every situation, and blocking may stop working if permissions are removed or if iOS changes.</p>
          </section>

          <section>
            <h2>Memo Pro Subscription</h2>
            <p><strong>Memo requires a Memo Pro subscription to use.</strong> Memo Pro is an auto-renewable subscription purchased through Apple&apos;s App Store. Current plans in the United States:</p>
            <ul className="mt-3">
              <li><strong>Memo Pro Annual:</strong> $39.99 per year, with a 7-day free trial for eligible new subscribers</li>
              <li><strong>Memo Pro Weekly:</strong> $3.99 per week, no free trial</li>
            </ul>
            <p className="mt-3">Other plans or limited-time offers (for example, a monthly plan or a discounted first year) may occasionally be shown in the App. Prices vary by country and may change. The price, billing period, and any trial are always shown in the App before you confirm a purchase, and that is the price you pay.</p>
            <ul className="mt-3">
              <li>Payment is charged to your Apple ID account when you confirm the purchase, or when a free trial ends.</li>
              <li>Your subscription renews automatically at the same price and period unless you cancel at least 24 hours before the end of the current period.</li>
              <li>Your account is charged for renewal within 24 hours before the end of the current period.</li>
              <li>If you cancel during a free trial, you will not be charged. Any unused portion of a free trial is forfeited when you purchase a subscription.</li>
              <li>You can manage or cancel your subscription in your Apple ID settings at any time: Settings → your name → Subscriptions, or at <a href="https://apps.apple.com/account/subscriptions">apps.apple.com/account/subscriptions</a>. Deleting the App does not cancel your subscription.</li>
              <li>Refunds are handled by Apple under Apple&apos;s policies. You can request one at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</li>
            </ul>
            <p className="mt-3">Existing subscribers on earlier Memori Pro plans keep their plan and price until they cancel.</p>
          </section>

          <section>
            <h2>Not Medical Advice</h2>
            <p><strong>Memo is not a medical device and is not a substitute for professional advice, diagnosis, or treatment.</strong> Brain scores, brain age, and other metrics are for entertainment and self-improvement only. If you are concerned about your health, phone use, or cognitive function, talk to a qualified professional.</p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Reverse engineer, decompile, or modify the App</li>
              <li>Cheat, automate, or manipulate games, scores, or leaderboards</li>
              <li>Use offensive Game Center names or content on leaderboards</li>
            </ul>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>How we handle data is described in our <Link href="/privacy">Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2>License and Apple Terms</h2>
            <p>We grant you a personal, non-transferable, non-exclusive license to use the App on Apple devices you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions. The App is also subject to Apple&apos;s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a>. Where these Terms and Apple&apos;s agreement conflict, these Terms apply to the extent permitted.</p>
            <p className="mt-3">These Terms are between you and the developer of Memo, not Apple. Apple is not responsible for the App or its content, has no obligation to provide maintenance or support for it, and is not responsible for any claims relating to the App, including product liability claims, claims that the App fails to meet legal or regulatory requirements, consumer protection claims, or intellectual property claims. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>The App, including its games, artwork, mascot, and content, is owned by the developer and protected by copyright and other laws.</p>
          </section>

          <section>
            <h2>Disclaimer and Limitation of Liability</h2>
            <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. To the maximum extent permitted by law, the developer is not liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will change the &quot;Last updated&quot; date above when we do. Continuing to use the App after changes means you accept the updated Terms.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions? Email <a href="mailto:dylanbryanmiller@gmail.com">dylanbryanmiller@gmail.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
