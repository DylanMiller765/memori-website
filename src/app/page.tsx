import Link from "next/link";

/* ─── Game Card ─── */
function GameCard({ icon, title, desc, color, delay }: {
  icon: string; title: string; desc: string; color: string; delay: string;
}) {
  return (
    <div className="card p-5 animate-slide-up" style={{ animationDelay: delay, opacity: 0 }}>
      <div
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
        style={{ background: `${color}15` }}
      >
        {icon}
      </div>
      <h3 className="mb-1 text-sm font-bold text-text-primary">{title}</h3>
      <p className="text-xs leading-relaxed text-text-secondary">{desc}</p>
    </div>
  );
}

/* ─── Score Ring ─── */
function ScoreRing() {
  const score = 748;
  const progress = score / 1000;
  const circumference = 2 * Math.PI * 68;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative animate-float">
      <div className="card animate-pulse-glow relative overflow-hidden p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent" />

        <div className="relative">
          <svg width="160" height="160" viewBox="0 0 160 160" className="mx-auto">
            <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="12" />
            <circle
              cx="80" cy="80" r="68" fill="none"
              stroke="url(#scoreGrad)" strokeWidth="12" strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 80 80)"
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3885F5" />
                <stop offset="100%" stopColor="#00D19E" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[42px] font-black tracking-tight text-text-primary">{score}</span>
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-text-tertiary">Brain Score</span>
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-center gap-3">
          <span className="rounded-full bg-surface-2 px-3 py-1.5 text-xs font-bold text-text-secondary">
            Brain Age: <span className="text-accent">24</span>
          </span>
          <span className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
            Top 6%
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step ─── */
function Step({ num, title, desc, delay }: {
  num: string; title: string; desc: string; delay: string;
}) {
  return (
    <div className="card relative p-7 text-center animate-slide-up" style={{ animationDelay: delay, opacity: 0 }}>
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-black text-accent">
        {num}
      </div>
      <h3 className="mb-2 text-base font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{desc}</p>
    </div>
  );
}

/* ─── Feature Row ─── */
function FeatureRow({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/8 text-lg">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-sm font-bold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary">{desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* ─── Nav ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-page-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/app-icon.png" alt="Memori" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-bold text-text-primary">Memori</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/privacy" className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:block">
              Privacy
            </Link>
            <Link href="/support" className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:block">
              Support
            </Link>
            <a href="#download" className="btn-primary px-5 py-2 text-sm">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="glow-orb h-[400px] w-[400px] bg-accent/8 top-[-10%] left-[-10%]" />
        <div className="glow-orb h-[300px] w-[300px] bg-violet/6 top-[20%] right-[-5%]" />
        <div className="glow-orb h-[200px] w-[200px] bg-teal/5 bottom-[0%] left-[30%]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <div className="animate-fade-in mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-1.5">
                <span className="text-xs font-bold text-accent">Science-backed brain training</span>
              </div>

              <h1 className="animate-slide-up delay-1 mb-5 text-[44px] font-black leading-[1.05] tracking-tight md:text-[56px] lg:text-[64px]">
                What&apos;s your{" "}
                <span className="gradient-text">Brain Age</span>?
              </h1>

              <p className="animate-slide-up delay-2 mb-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                Take a 2-minute assessment. Discover your Brain Score, Brain Age, and Brain Type.
                Train with 8 cognitive games. <span className="font-bold text-text-primary">Get sharper every day.</span>
              </p>

              <div className="animate-slide-up delay-3 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <a href="#download" className="btn-primary w-full sm:w-auto">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
                  </svg>
                  Download Free
                </a>
                <a href="#how" className="btn-secondary w-full sm:w-auto">
                  How it works
                </a>
              </div>
            </div>

            <div className="w-72 flex-shrink-0">
              <ScoreRing />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="relative z-10 px-6 pb-16">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: "8", label: "Cognitive Games" },
            { value: "2min", label: "Assessment" },
            { value: "30+", label: "Achievements" },
            { value: "100%", label: "Private" },
          ].map((stat, i) => (
            <div key={stat.label} className="card animate-slide-up px-4 py-4 text-center" style={{ animationDelay: `${0.1 + i * 0.08}s`, opacity: 0 }}>
              <p className="text-xl font-black text-text-primary">{stat.value}</p>
              <p className="text-xs font-medium text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Games ─── */}
      <section className="relative py-20 px-6">
        <div className="glow-orb h-[300px] w-[300px] bg-violet/5 top-[10%] right-[-5%]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              8 Science-Backed <span className="gradient-text">Games</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-text-secondary">
              Every exercise is rooted in peer-reviewed cognitive psychology research. Not random puzzles — proven techniques.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <GameCard icon="⚡" title="Reaction Time" desc="Test and improve your processing speed" color="#FA6B59" delay="0.1s" />
            <GameCard icon="🎨" title="Color Match" desc="Build attention and inhibitory control" color="#9457EB" delay="0.15s" />
            <GameCard icon="🔄" title="Speed Match" desc="Train rapid visual recognition" color="#409CFB" delay="0.2s" />
            <GameCard icon="👁️" title="Visual Memory" desc="Strengthen spatial working memory" color="#5957D6" delay="0.25s" />
            <GameCard icon="🔢" title="Number Memory" desc="Expand your digit span capacity" color="#00D19E" delay="0.3s" />
            <GameCard icon="🧮" title="Math Speed" desc="Sharpen mental arithmetic under pressure" color="#F5A623" delay="0.35s" />
            <GameCard icon="🧠" title="Dual N-Back" desc="The gold standard in working memory training" color="#3885F5" delay="0.4s" />
            <GameCard icon="🧩" title="Chunking" desc="Master memory techniques used by champions" color="#FF6B8A" delay="0.45s" />
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how" className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-page-bg via-surface-2/50 to-page-bg" />
        <div className="glow-orb h-[300px] w-[300px] bg-accent/5 bottom-[0%] left-[-5%]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              How It <span className="gradient-text">Works</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Step num="1" title="Take the Assessment" desc="3 quick tests — digit span, reaction time, visual memory. Only 2 minutes." delay="0.1s" />
            <Step num="2" title="Get Your Brain Score" desc="See your Brain Score, Brain Age, and Brain Type. Share with friends." delay="0.2s" />
            <Step num="3" title="Train Daily" desc="Adaptive exercises keep you improving. Compete on global leaderboards." delay="0.3s" />
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="relative py-20 px-6">
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              Everything You <span className="gradient-text">Need</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <FeatureRow icon="📊" title="Adaptive Difficulty" desc="Stays in the optimal learning zone based on the 85% Rule (Wilson et al. 2019)" />
            <FeatureRow icon="🏆" title="Game Center Leaderboards" desc="Compete globally on Brain Score, per-game rankings, and more" />
            <FeatureRow icon="🔥" title="Streaks & Daily Challenges" desc="Same challenge for every player, every day. Keep your streak alive" />
            <FeatureRow icon="🏅" title="30+ Achievements" desc="Unlock badges for milestones, perfect scores, and personal bests" />
            <FeatureRow icon="📈" title="Progress Insights" desc="Performance charts, heatmap calendar, and personal records" />
            <FeatureRow icon="🔒" title="100% Private" desc="All data stays on your device. No accounts, no tracking, no cloud" />
          </div>
        </div>
      </section>

      {/* ─── Challenge ─── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="card relative overflow-hidden p-10 text-center md:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-violet/[0.03]" />

            <div className="relative">
              <h2 className="mb-3 text-3xl font-black md:text-4xl">
                Challenge Your Friends
              </h2>
              <p className="mx-auto mb-8 max-w-md text-base text-text-secondary">
                Share your Brain Score on social media. See who has the sharpest mind in your friend group.
              </p>

              <div className="mb-8 flex items-center justify-center gap-3">
                <div className="-rotate-3 rounded-2xl bg-gradient-to-br from-accent to-accent-light p-5 text-white shadow-lg shadow-accent/15">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Brain Score</p>
                  <p className="text-3xl font-black">748</p>
                  <p className="mt-1 text-[10px] font-bold opacity-80">Brain Age: 24</p>
                </div>
                <div className="rotate-2 rounded-2xl bg-gradient-to-br from-violet to-indigo p-5 text-white shadow-lg shadow-violet/15">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Your Turn</p>
                  <p className="text-3xl font-black">???</p>
                  <p className="mt-1 text-[10px] font-bold opacity-80">Can you beat me?</p>
                </div>
              </div>

              <a href="#download" className="btn-primary">
                Accept the Challenge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-page-bg via-surface-2/30 to-page-bg" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              Free to <span className="gradient-text">Start</span>
            </h2>
            <p className="text-base text-text-secondary">All 8 games are always available. Pro unlocks unlimited training.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="mb-1 text-lg font-bold">Free</h3>
              <p className="mb-5 text-sm text-text-secondary">Everything you need to get started</p>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-center gap-2"><span className="text-teal font-bold">✓</span> All 8 cognitive games</li>
                <li className="flex items-center gap-2"><span className="text-teal font-bold">✓</span> Brain Score assessment</li>
                <li className="flex items-center gap-2"><span className="text-teal font-bold">✓</span> 3 sessions per day</li>
                <li className="flex items-center gap-2"><span className="text-teal font-bold">✓</span> Streak tracking</li>
                <li className="flex items-center gap-2"><span className="text-teal font-bold">✓</span> Leaderboards</li>
              </ul>
            </div>

            <div className="card relative overflow-hidden p-7" style={{ borderColor: "rgba(56, 133, 245, 0.15)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent" />
              <div className="relative">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-lg font-bold">Pro</h3>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">POPULAR</span>
                </div>
                <p className="mb-5 text-sm text-text-secondary">$3.99/mo or $19.99/yr <span className="text-teal font-bold">(save 58%)</span></p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  <li className="flex items-center gap-2"><span className="text-accent font-bold">✓</span> <span className="text-text-primary font-medium">Unlimited training</span></li>
                  <li className="flex items-center gap-2"><span className="text-accent font-bold">✓</span> Everything in Free</li>
                  <li className="flex items-center gap-2"><span className="text-accent font-bold">✓</span> Detailed analytics</li>
                  <li className="flex items-center gap-2"><span className="text-accent font-bold">✓</span> All future games & features</li>
                  <li className="flex items-center gap-2"><span className="text-accent font-bold">✓</span> Support development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="download" className="relative overflow-hidden py-24 px-6">
        <div className="glow-orb h-[400px] w-[400px] bg-accent/6 top-[20%] left-[30%]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            Ready to train<br />your <span className="gradient-text">brain</span>?
          </h2>
          <p className="mb-10 text-lg text-text-secondary">
            Download free. Take the assessment. See where you stand.
          </p>

          <a href="https://apps.apple.com" className="btn-primary text-lg px-8 py-4">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
            </svg>
            Download on the App Store
          </a>

          <p className="mt-6 text-sm text-text-tertiary">Free to download · No account needed · Your data stays on your device</p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-black/5 py-10 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[10px] font-black text-white">M</div>
            <span className="text-sm font-semibold text-text-secondary">Memori</span>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm font-medium text-text-tertiary transition-colors hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-text-tertiary transition-colors hover:text-text-primary">
              Terms of Use
            </Link>
            <Link href="/support" className="text-sm font-medium text-text-tertiary transition-colors hover:text-text-primary">
              Support
            </Link>
          </div>

          <p className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} Memori
          </p>
        </div>
      </footer>
    </div>
  );
}
