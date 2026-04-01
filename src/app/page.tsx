import Link from "next/link";
import Image from "next/image";

/* ─── Phone Mockup (devices.css iPhone 14 Pro) ─── */
function PhoneMockup({ src, alt, className = "", scale = 0.55 }: { src: string; alt: string; className?: string; scale?: number }) {
  return (
    <div className={`${className}`} style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
      <div className="device device-iphone-14-pro device-black">
        <div className="device-frame">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={830}
            className="device-screen"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
        <div className="device-home"></div>
      </div>
    </div>
  );
}

/* ─── Feature Row ─── */
function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-bold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary mt-1">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Game Card ─── */
function GameCard({ icon, title, category, color, delay }: {
  icon: string; title: string; category: string; color: string; delay: string;
}) {
  return (
    <div
      className="card p-5 animate-slide-up text-center"
      style={{ animationDelay: delay, opacity: 0 }}
    >
      <div
        className="mb-3 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
        style={{ background: `${color}18` }}
      >
        {icon}
      </div>
      <h3 className="text-sm font-bold text-text-primary">{title}</h3>
      <p className="text-xs text-text-tertiary mt-1">{category}</p>
    </div>
  );
}

/* ─── Step Card ─── */
function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
        {num}
      </div>
      <h3 className="text-base font-bold text-text-primary mb-1">{title}</h3>
      <p className="text-sm text-text-secondary">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── Navbar ─── */}
      <nav className="fixed top-0 w-full z-50 bg-page-bg/80 backdrop-blur-xl border-b border-card-border">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2.5">
            <Image src="/app-icon.png" alt="Memori" width={36} height={36} className="rounded-xl" />
            <span className="text-lg font-extrabold text-text-primary">Memori</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-text-secondary">
            <Link href="#games" className="hover:text-accent transition-colors">Games</Link>
            <Link href="#features" className="hover:text-accent transition-colors">Features</Link>
            <Link href="/support" className="hover:text-accent transition-colors">Support</Link>
          </div>
          <a
            href="https://apps.apple.com/app/id6760178716"
            className="btn-primary !py-2.5 !px-5 !text-sm !rounded-xl"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
            Download
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background glow orbs */}
        <div className="glow-orb bg-accent/20 w-[400px] h-[400px] -top-40 -left-40" />
        <div className="glow-orb bg-violet/15 w-[300px] h-[300px] top-20 -right-20" />
        <div className="glow-orb bg-teal/10 w-[250px] h-[250px] bottom-0 left-1/3" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center relative">
            {/* Floating mascots */}
            <div className="relative inline-block">
              {/* Top left - wave */}
              <Image
                src="/mascots/mascot-wave.png" alt="Memori waving" width={80} height={80}
                className="absolute -top-4 -left-24 animate-float hidden md:block"
                style={{ animationDelay: "0s" }}
              />
              {/* Top right - crown */}
              <Image
                src="/mascots/mascot-crown.png" alt="Memori champion" width={70} height={70}
                className="absolute -top-8 -right-20 animate-float hidden md:block"
                style={{ animationDelay: "1s", animationDuration: "5s" }}
              />
              {/* Bottom left - fire */}
              <Image
                src="/mascots/mascot-streak-fire.png" alt="Memori on fire" width={65} height={65}
                className="absolute -bottom-6 -left-16 animate-float hidden md:block"
                style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
              />
              {/* Bottom right - cool */}
              <Image
                src="/mascots/mascot-cool.png" alt="Memori cool" width={68} height={68}
                className="absolute -bottom-4 -right-16 animate-float hidden md:block"
                style={{ animationDelay: "1.5s", animationDuration: "5.5s" }}
              />

              {/* Main headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-primary animate-slide-up">
                How Old Is<br />
                <span className="gradient-text">Your Brain?</span>
              </h1>
            </div>

            <p className="mt-5 text-lg text-text-secondary max-w-md mx-auto animate-slide-up delay-1">
              8 brain games. 2-minute brain age test. Track your cognitive score. Compete globally.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up delay-2">
              <a href="https://apps.apple.com/app/id6760178716" className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                Download Free on iOS
              </a>
              <a href="#games" className="btn-secondary">
                See All Games ↓
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center justify-center gap-8 text-center animate-slide-up delay-3">
              <div>
                <div className="text-2xl font-extrabold text-text-primary">8</div>
                <div className="text-xs text-text-tertiary mt-0.5">Brain Games</div>
              </div>
              <div className="h-8 w-px bg-card-border" />
              <div>
                <div className="text-2xl font-extrabold text-text-primary">2 min</div>
                <div className="text-xs text-text-tertiary mt-0.5">Brain Age Test</div>
              </div>
              <div className="h-8 w-px bg-card-border" />
              <div>
                <div className="text-2xl font-extrabold text-text-primary">100%</div>
                <div className="text-xs text-text-tertiary mt-0.5">Private</div>
              </div>
            </div>
          </div>

          {/* Phone mockups row */}
          <div className="mt-14 flex items-start justify-center gap-0 sm:gap-2">
            <div className="hidden sm:block opacity-75 -mr-4" style={{ marginTop: "40px" }}>
              <PhoneMockup src="/screenshots/train.png" alt="Train tab showing 8 brain games" scale={0.48} />
            </div>
            <div className="z-10">
              <PhoneMockup src="/screenshots/home.png" alt="Home screen with brain score and mascot" scale={0.55} />
            </div>
            <div className="hidden sm:block opacity-75 -ml-4" style={{ marginTop: "40px" }}>
              <PhoneMockup src="/screenshots/insights.png" alt="Brain score insights and history" scale={0.48} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Games ─── */}
      <section id="games" className="py-20 relative">
        <div className="glow-orb bg-accent/10 w-[300px] h-[300px] top-0 right-0" />
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
              8 Brain Games
            </h2>
            <p className="mt-3 text-text-secondary max-w-md mx-auto">
              Each game targets a different cognitive skill. Play daily to track your improvement.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <GameCard icon="⚡" title="Reaction Time" category="Speed" color="#FA6B59" delay="0s" />
            <GameCard icon="🎨" title="Color Match" category="Attention" color="#9457EB" delay="0.05s" />
            <GameCard icon="⭐" title="Speed Match" category="Speed" color="#409CFB" delay="0.1s" />
            <GameCard icon="🟪" title="Visual Memory" category="Memory" color="#5957D6" delay="0.15s" />
            <GameCard icon="🔢" title="Number Memory" category="Memory" color="#00D19E" delay="0.2s" />
            <GameCard icon="🧮" title="Math Speed" category="Problem Solving" color="#F5A623" delay="0.25s" />
            <GameCard icon="🧩" title="Dual N-Back" category="Focus" color="#3885F5" delay="0.3s" />
            <GameCard icon="🔗" title="Chunking" category="Memory" color="#FF6B8A" delay="0.35s" />
          </div>
        </div>
      </section>

      {/* ─── Brain Score Section ─── */}
      <section className="py-20 bg-surface-2/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
                Your Brain Has a Score.{" "}
                <span className="gradient-text">Do You Know Yours?</span>
              </h2>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">
                Take a 2-minute assessment and get your Brain Age. Track Memory, Speed, and Visual
                scores over time. Watch your mascot evolve as you train.
              </p>
              <div className="mt-8 space-y-4">
                <Feature icon="🧠" title="Brain Score out of 1000" desc="Combined metric across all cognitive domains" />
                <Feature icon="📊" title="Track your progress" desc="See your score history and domain breakdowns" />
                <Feature icon="🏆" title="Compete globally" desc="Rank on leaderboards against other players" />
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneMockup src="/screenshots/compete.png" alt="Global leaderboard rankings" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <StepCard num="1" title="Take the Test" desc="2-minute brain age assessment. Find out how old your brain really is." />
            <StepCard num="2" title="Train Daily" desc="Play 3 brain games per day. Your mascot reacts to your performance." />
            <StepCard num="3" title="Track & Compete" desc="Watch your Brain Score improve. Climb the global leaderboards." />
          </div>
        </div>
      </section>

      {/* ─── Mascot Section ─── */}
      <section className="py-20 bg-surface-2/50 relative overflow-hidden">
        <div className="glow-orb bg-violet/10 w-[350px] h-[350px] -bottom-20 -left-20" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="grid grid-cols-3 gap-3 max-w-xs">
                {[
                  { src: "/mascots/mascot-crown.png", label: "900+" },
                  { src: "/mascots/mascot-cool.png", label: "800+" },
                  { src: "/mascots/mascot-celebrate.png", label: "700+" },
                  { src: "/mascots/mascot-wave.png", label: "600+" },
                  { src: "/mascots/mascot-thinking.png", label: "500+" },
                  { src: "/mascots/mascot-bored.png", label: "400+" },
                  { src: "/mascots/mascot-working-out.png", label: "300+" },
                  { src: "/mascots/mascot-streak-fire.png", label: "Streak" },
                  { src: "/mascots/mascot-locked-sad.png", label: "Locked" },
                ].map((m, i) => (
                  <div key={i} className="card p-3 text-center hover:scale-105 transition-transform">
                    <Image src={m.src} alt={m.label} width={80} height={80} className="mx-auto" />
                    <div className="text-[10px] font-bold text-text-tertiary mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
                Meet Your Brain&apos;s{" "}
                <span className="gradient-text">Mascot</span>
              </h2>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">
                Your mascot reflects your brain health. Train daily and watch it thrive —
                skip a day and it gets sad. 9 different states based on your Brain Score.
              </p>
              <p className="mt-3 text-text-secondary">
                From crowned champion to couch potato — your mascot tells the story of your cognitive journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
              Free to Play. Pro to Dominate.
            </h2>
            <p className="mt-3 text-text-secondary">
              Most features are free. Go Pro for unlimited games and full analytics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Free */}
            <div className="card p-6">
              <div className="text-sm font-bold text-teal mb-1">FREE</div>
              <div className="text-3xl font-black text-text-primary">$0</div>
              <div className="text-sm text-text-tertiary mb-6">Forever</div>
              <ul className="space-y-3 text-sm text-text-secondary">
                {["3 games per day", "Brain Age assessment", "Brain Score tracking", "All 8 games", "Global leaderboards", "Mascot system"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-teal">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="card p-6 border-2 !border-accent/30 relative">
              <div className="absolute -top-3 left-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              <div className="text-sm font-bold text-accent mb-1">PRO</div>
              <div className="text-3xl font-black text-text-primary">$1.67<span className="text-base font-medium text-text-tertiary">/mo</span></div>
              <div className="text-sm text-text-tertiary mb-6">$19.99/year · 3-day free trial</div>
              <ul className="space-y-3 text-sm text-text-secondary">
                {["Unlimited daily games", "Full score history", "Domain analytics", "Priority leaderboards", "All free features", "Support development"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Referral callout */}
          <div className="mt-6 card p-5 bg-accent/5 border-accent/20 text-center">
            <p className="text-sm font-bold text-text-primary">
              🎁 Don&apos;t want to pay? <span className="text-accent">Invite a friend</span> and you both get 1 week of Pro free!
            </p>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="glow-orb bg-accent/15 w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Image
            src="/mascots/mascot-celebrate.png" alt="Memori celebrating" width={120} height={120}
            className="mx-auto mb-6 animate-float"
          />
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
            Ready to Test Your Brain?
          </h2>
          <p className="mt-3 text-text-secondary text-lg">
            Download Memori and find out your Brain Age in 2 minutes. Free forever.
          </p>
          <a href="https://apps.apple.com/app/id6760178716" className="btn-primary mt-8 inline-flex">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
            Download Memori — It&apos;s Free
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-card-border py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Image src="/app-icon.png" alt="Memori" width={28} height={28} className="rounded-lg" />
              <span className="text-sm font-bold text-text-primary">Memori</span>
              <span className="text-xs text-text-tertiary">Brain Training Games</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
              <Link href="/support" className="hover:text-accent transition-colors">Support</Link>
            </div>
            <div className="text-xs text-text-tertiary">
              © {new Date().getFullYear()} Memori
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
