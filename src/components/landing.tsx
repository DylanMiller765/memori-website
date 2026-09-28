import Image from "next/image";
import Link from "next/link";
import { DownloadDock } from "./download-dock";
import { APP_STORE_URL } from "@/lib/links";

export type Variant = "day" | "twilight";

const PRICE_LINE = "Free for 7 days, then $39.99/year";

export function AppStoreBadge({ id, className = "" }: { id?: string; className?: string }) {
  return (
    <a
      id={id}
      href={APP_STORE_URL}
      aria-label="Download Memo on the App Store"
      className={`inline-block transition-transform active:scale-95 ${className}`}
    >
      {/* Apple's official badge, unmodified */}
      <img src="/img/app-store-badge.svg" alt="Download on the App Store" className="h-[54px] w-auto sm:h-[60px]" />
    </a>
  );
}

function Stars({ light }: { light: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border-2 px-3.5 py-1.5 text-sm font-bold ${
        light ? "border-white/25 bg-white/10 text-white" : "border-ink bg-white text-ink shadow-[0_3px_0_#0B1B22]"
      }`}
    >
      <span className="tracking-[0.12em] text-amber [text-shadow:0_1px_0_#0B1B22]">★★★★★</span>
      <span>5.0 on the App Store</span>
    </div>
  );
}

/** Rolling hills. Strokes stay crisp however wide the viewport stretches them. */
function Hills({ back, front, stroke, className = "" }: { back: string; front: string; stroke: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 160" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M0 72 C 60 38, 130 40, 190 66 S 330 34, 400 52 L400 160 L0 160 Z"
        fill={back}
        stroke={stroke}
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 116 C 70 96, 130 70, 200 70 C 270 70, 330 94, 400 108 L400 160 L0 160 Z"
        fill={front}
        stroke={stroke}
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Cloud({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 56" className={`cloud absolute ${className}`} style={style} aria-hidden>
      <path
        d="M22 50 C6 50 4 32 18 29 C16 14 36 8 46 18 C52 4 78 4 82 20 C98 14 114 26 106 40 C116 44 112 52 100 50 Z"
        fill="white"
        stroke="#0B1B22"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STICKERS = [
  { src: "/img/icon-tiktok.png", alt: "TikTok", pos: "left-[2%] top-[6%] sm:left-[14%]", tilt: "-12deg", delay: "0s" },
  { src: "/img/icon-instagram.png", alt: "Instagram", pos: "right-[2%] top-[2%] sm:right-[14%]", tilt: "10deg", delay: "1.1s" },
  { src: "/img/icon-youtube.png", alt: "YouTube", pos: "left-[4%] top-[42%] sm:left-[18%]", tilt: "8deg", delay: "0.6s" },
  { src: "/img/icon-x.png", alt: "X", pos: "right-[4%] top-[36%] sm:right-[18%]", tilt: "-9deg", delay: "1.7s" },
];

const STAR_POSITIONS = [
  [8, 6], [22, 14], [35, 4], [48, 11], [63, 5], [77, 13], [90, 7], [15, 26], [84, 24], [5, 38], [95, 40], [70, 30], [30, 34],
];

function Hero({ variant }: { variant: Variant }) {
  const night = variant === "twilight";
  return (
    <section className={`relative overflow-hidden ${night ? "sky-twilight" : "sky-day"}`}>
      {night ? (
        <>
          {STAR_POSITIONS.map(([x, y], i) => (
            <span key={i} className="star" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 5) * 0.6}s` }} />
          ))}
          <div className="absolute right-[-18px] top-[64px] h-14 w-14 sm:right-[8%] sm:top-[14%] rounded-full border-[2.5px] border-ink bg-[#FFF3CF] shadow-[0_0_40px_rgba(255,243,207,0.6)] sm:h-20 sm:w-20" />
        </>
      ) : (
        <>
          <Cloud className="left-[-4%] top-[16%] w-24 opacity-95 sm:w-36" />
          <Cloud className="right-[-2%] top-[30%] w-20 opacity-90 sm:w-32" style={{ animationDelay: "-9s" }} />
        </>
      )}

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 pt-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="" width={34} height={34} className="rounded-[10px] border-2 border-ink" />
          <span className={`text-xl font-extrabold tracking-tight ${night ? "text-white" : "text-ink"}`}>Memo</span>
        </Link>
        <a
          href={APP_STORE_URL}
          className={`rounded-full border-2 px-4 py-1.5 text-sm font-extrabold ${
            night ? "border-white/30 text-white" : "border-ink bg-white text-ink shadow-[0_3px_0_#0B1B22]"
          }`}
        >
          Get the app
        </a>
      </header>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 pt-9 text-center sm:pt-14">
        <Stars light={night} />
        <h1 className={`display mt-5 text-[clamp(2.6rem,12.2vw,5.4rem)] ${night ? "text-white" : "text-ink"}`}>
          Block apps.
          <br />
          <span className={night ? "text-amber [text-shadow:0_0_28px_rgba(255,211,107,0.55)]" : "text-accent"}>Play to unlock.</span>
        </h1>
        <p className={`mt-4 max-w-md text-lg font-medium sm:text-xl ${night ? "text-white/80" : "text-ink/75"}`}>
          Want TikTok back? Beat a quick brain game first.
        </p>
        <AppStoreBadge id="hero-download" className="mt-6" />
        <p className={`mt-3 text-sm font-semibold ${night ? "text-white/60" : "text-ink/55"}`}>{PRICE_LINE}</p>
      </div>

      {/* The stage: phone on the hill, stickers floating, Memo standing by */}
      <div className="relative mx-auto mt-8 flex max-w-5xl justify-center pb-24 sm:mt-12 sm:pb-28">
        {STICKERS.map((s) => (
          <div
            key={s.alt}
            className={`sticker z-20 ${s.pos}`}
            style={{ ["--tilt" as string]: s.tilt, animationDelay: s.delay } as React.CSSProperties}
          >
            <img src={s.src} alt={s.alt} />
          </div>
        ))}

        <div className={`phone z-10 ${night ? "booth-glow" : ""}`}>
          <video
            src="/img/unlock-loop.mp4"
            poster="/img/unlock-loop-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Memo blocks TikTok, spins a brain game, and unlocks it after you win"
          />
        </div>

        <Image
          src="/img/memo-stand.png"
          alt="Memo, the brain mascot"
          width={720}
          height={610}
          priority
          className="absolute bottom-[5.2rem] left-1/2 z-20 w-[34vw] max-w-[150px] translate-x-[38%] sm:bottom-[6rem] sm:translate-x-[62%]"
        />

        <Hills
          back={night ? "#1D5B55" : "#7FD98E"}
          front={night ? "#154540" : "#5BC977"}
          stroke="#0B1B22"
          className="absolute inset-x-0 bottom-0 h-[34%] w-full"
        />
      </div>
    </section>
  );
}

const STEPS = [
  {
    img: "/img/memo-lookout.png",
    w: 480,
    h: 266,
    title: "Pick your time-sinks",
    body: "TikTok, Instagram, YouTube. Any app that eats your day.",
  },
  {
    img: "/img/memo-dealer.png",
    w: 480,
    h: 384,
    title: "Open one, spin the booth",
    body: "Memo deals you a quick brain game instead of the feed.",
  },
  {
    img: "/img/memo-unlocked.png",
    w: 480,
    h: 435,
    title: "Win, then scroll",
    body: "Your app unlocks for a few minutes. Then it locks again.",
  },
];

function HowItWorks({ variant }: { variant: Variant }) {
  const night = variant === "twilight";
  return (
    <section className={`${night ? "bg-[#154540]" : "bg-grass"} px-5 pb-16 pt-4`}>
      <h2 className={`display mx-auto max-w-md text-center text-4xl sm:text-5xl ${night ? "text-white" : "text-ink"}`}>
        No feed til you train.
      </h2>
      <ol className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="step flex items-center gap-4 p-4 sm:flex-col sm:p-6 sm:text-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center sm:h-28 sm:w-28">
              <Image src={s.img} alt="" width={s.w} height={s.h} className="max-h-full w-auto object-contain" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">Step {i + 1}</p>
              <h3 className="mt-0.5 text-xl font-extrabold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-1 text-[15px] font-medium leading-snug text-ink/70">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Closing({ variant }: { variant: Variant }) {
  const night = variant === "twilight";
  return (
    <section className={`relative overflow-hidden ${night ? "bg-gradient-to-b from-[#154540] via-[#F4B183] to-[#FFE3A8]" : "sky-sunset"}`}>
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 pt-16 text-center">
        <h2 className="display text-5xl text-ink sm:text-6xl">
          Less scrolling.
          <br />
          <span className="text-accent">More brain.</span>
        </h2>
        <AppStoreBadge id="closing-download" className="mt-7" />
        <p className="mt-3 max-w-xs text-sm font-semibold text-ink/60">
          7-day free trial for new subscribers, then $39.99/year. Cancel anytime in Settings.
        </p>
      </div>

      <div className="relative mt-6 h-[300px] sm:h-[360px]">
        <div className="absolute left-[12%] top-[8%] h-24 w-24 rounded-full border-[2.5px] border-ink bg-amber shadow-[0_0_60px_rgba(255,211,107,0.8)] sm:h-32 sm:w-32" />
        <Hills back="#7FD98E" front="#5BC977" stroke="#0B1B22" className="absolute inset-x-0 bottom-0 h-[62%] w-full" />
        <Image
          src="/img/memo-cool.png"
          alt="Memo relaxing in sunglasses"
          width={720}
          height={437}
          className="absolute bottom-[17%] left-1/2 z-10 w-[62vw] max-w-[300px] -translate-x-1/2"
        />
      </div>

      <footer className="bg-grass px-5 pb-28 pt-2 text-center text-sm font-semibold text-ink/70 sm:pb-10">
        <nav className="flex justify-center gap-5">
          <Link href="/terms" className="hover:text-ink">Terms</Link>
          <Link href="/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/support" className="hover:text-ink">Support</Link>
        </nav>
        <p className="mt-3 text-ink/50">© 2026 Memo · Made for people who&apos;d rather be doing something else</p>
      </footer>
    </section>
  );
}

export function Landing({ variant = "day" }: { variant?: Variant }) {
  return (
    <main>
      <Hero variant={variant} />
      <HowItWorks variant={variant} />
      <Closing variant={variant} />
      <DownloadDock watch={["hero-download", "closing-download"]} />
    </main>
  );
}
