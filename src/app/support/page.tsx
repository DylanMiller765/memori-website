import Link from "next/link";

export const metadata = {
  title: "Support — Memori",
  description: "Get help with Memori. FAQ, troubleshooting, and contact information.",
};

export default function Support() {
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
            q="Is Memori really free?"
            a="Yes! All 8 cognitive games are available to everyone. Free users can play 3 training sessions per day. Memori Pro ($3.99/mo or $19.99/yr) unlocks unlimited training."
          />
          <FaqItem
            q="How is my Brain Score calculated?"
            a="Your Brain Score is based on a 2-minute assessment testing three cognitive areas: digit span (memory), reaction time (processing speed), and visual memory (attention). The composite score ranges from 0-1000."
          />
          <FaqItem
            q="Is my data private?"
            a="Absolutely. All your data stays on your device. We don't collect any personal information, use analytics, or have cloud servers. Your brain data is yours alone."
          />
          <FaqItem
            q="How do I cancel my subscription?"
            a="Open the Settings app on your iPhone → tap your name → Subscriptions → Memori Pro → Cancel Subscription. You'll keep Pro access until the end of your billing period."
          />
          <FaqItem
            q="How do I restore my purchase on a new device?"
            a="Open Memori → go to the Profile tab → tap 'Restore Purchases'. Your Pro subscription is tied to your Apple ID and will be restored automatically."
          />
          <FaqItem
            q="What does Brain Age mean?"
            a="Brain Age estimates your cognitive performance relative to age norms. A Brain Age lower than your actual age means above-average performance. It's for entertainment purposes, not a medical assessment."
          />
          <FaqItem
            q="How do leaderboards work?"
            a="Leaderboards use Apple's Game Center. Sign in to Game Center in your iPhone settings, and your scores will automatically appear on global leaderboards."
          />
          <FaqItem
            q="How do I delete my data?"
            a="Go to Profile → scroll to the bottom → tap 'Reset All Data'. This permanently deletes all scores, streaks, and achievements. Uninstalling the app also removes all data."
          />
          <FaqItem
            q="The app isn't working correctly. What should I do?"
            a="Try closing and reopening the app. Make sure you're running the latest version from the App Store. If it still doesn't work, email us with a description of the problem and your iOS version."
          />
        </div>

        {/* Manage Subscription */}
        <div className="mt-12 card p-7">
          <h2 className="mb-2 text-lg font-bold text-text-primary">Manage Subscription</h2>
          <p className="mb-4 text-sm text-text-secondary">
            View, change, or cancel your Memori Pro subscription through Apple.
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
