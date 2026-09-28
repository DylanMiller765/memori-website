import Link from "next/link";

export const metadata = {
  title: "Support — Memo",
  description: "Get help with Memo. FAQ, troubleshooting, and contact information.",
};

export default function Support() {
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
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-1.5">
          <span className="text-xs font-bold text-accent">We&apos;re here to help</span>
        </div>

        <h1 className="mb-2 text-3xl font-black text-text-primary">Support</h1>
        <p className="mb-10 text-base text-text-secondary">Find answers to common questions or get in touch.</p>

        {/* Contact */}
        <div className="card mb-10 p-7">
          <h2 className="mb-2 text-lg font-bold text-text-primary">Contact Us</h2>
          <p className="mb-4 text-sm text-text-secondary">
            Have a question, found a bug, or want to suggest a feature? We&apos;d love to hear from you.
          </p>
          <a href="mailto:dylanbryanmiller@gmail.com" className="btn-primary inline-flex text-sm px-5 py-2.5">
            Email Support
          </a>
          <p className="mt-3 text-xs text-text-tertiary">dylanbryanmiller@gmail.com · We typically respond within 24 hours</p>
        </div>

        {/* FAQ */}
        <h2 className="mb-6 text-xl font-bold text-text-primary">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <FaqItem
            q="How does Memo block apps?"
            a="Memo uses Apple's Screen Time. You pick the apps to block, and when you open one, Memo steps in. Play a quick brain game and the app unlocks for a few minutes, then it locks again."
          />
          <FaqItem
            q="Can't I just get around it?"
            a="You can always turn Screen Time access off in iOS Settings, since it's your phone. But it's a few taps and a moment to think, and a quick game is usually the easier path. That pause is the point."
          />
          <FaqItem
            q="How much does Memo cost?"
            a="Memo requires Memo Pro. The annual plan is $39.99/year and includes a 7-day free trial for eligible new subscribers. There's also a weekly plan at $3.99/week. The exact price for your country is shown in the app before you buy."
          />
          <FaqItem
            q="How do I cancel my subscription?"
            a="Open the Settings app on your iPhone → tap your name → Subscriptions → Memo → Cancel Subscription. Cancel at least 24 hours before your trial or billing period ends to avoid the next charge. Deleting the app does not cancel your subscription."
          />
          <FaqItem
            q="How do I restore my purchase on a new device?"
            a="Open Memo → Profile → tap the gear icon → Restore Purchases. Your subscription is tied to your Apple ID."
          />
          <FaqItem
            q="Can Memo see which apps I use?"
            a="No. Apple only gives Memo anonymous tokens for the apps you pick, and they stay on your device. See our Privacy Policy for what we do collect."
          />
          <FaqItem
            q="Apps aren't getting blocked. What should I do?"
            a="Check that Screen Time access is still on for Memo in iOS Settings → Screen Time, then open Memo and re-select your apps. Make sure you're on the latest version from the App Store. Still stuck? Email us with your iOS version."
          />
          <FaqItem
            q="How do leaderboards work?"
            a="Leaderboards use Apple's Game Center. Sign in to Game Center in iOS Settings and your scores will show up automatically."
          />
          <FaqItem
            q="How do I delete my data?"
            a="Open Memo → Profile → tap the gear icon → Reset All Data. Deleting the app also removes everything stored on your device. To delete analytics data we hold, email us."
          />
        </div>

        {/* Manage Subscription */}
        <div className="mt-12 card p-7">
          <h2 className="mb-2 text-lg font-bold text-text-primary">Manage Subscription</h2>
          <p className="mb-4 text-sm text-text-secondary">
            View, change, or cancel your Memo Pro subscription through Apple.
          </p>
          <a
            href="https://apps.apple.com/account/subscriptions"
            className="btn-secondary inline-flex text-sm px-5 py-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manage in App Store
          </a>
        </div>
      </main>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="card p-5">
      <h3 className="mb-2 text-sm font-bold text-text-primary">{q}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{a}</p>
    </div>
  );
}
