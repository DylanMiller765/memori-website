"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const GAME_META: Record<string, { name: string; emoji: string; scoreLabel: (s: number) => string }> = {
  reactionTime:      { name: "Reaction Time",    emoji: "⚡", scoreLabel: (s) => `${s}ms` },
  colorMatch:        { name: "Color Match",       emoji: "🎨", scoreLabel: (s) => `${s}%` },
  speedMatch:        { name: "Speed Match",       emoji: "⚡", scoreLabel: (s) => `${s}%` },
  visualMemory:      { name: "Visual Memory",     emoji: "🟦", scoreLabel: (s) => `Level ${s}` },
  sequentialMemory:  { name: "Number Memory",     emoji: "🔢", scoreLabel: (s) => `${s} digits` },
  mathSpeed:         { name: "Math Speed",        emoji: "🧮", scoreLabel: (s) => `${s} solved` },
  dualNBack:         { name: "Dual N-Back",       emoji: "🧠", scoreLabel: (s) => `N=${s}` },
  chunkingTraining:  { name: "Chunking",          emoji: "📦", scoreLabel: (s) => `${s} correct` },
  chimpTest:         { name: "Chimp Test",        emoji: "🐵", scoreLabel: (s) => `Level ${s}` },
  verbalMemory:      { name: "Verbal Memory",     emoji: "📝", scoreLabel: (s) => `${s} words` },
};

function ChallengeContent() {
  const searchParams = useSearchParams();
  const game = searchParams.get("game") ?? "";
  const seed = searchParams.get("seed") ?? "";
  const score = parseInt(searchParams.get("score") ?? "0", 10);
  const name = searchParams.get("name") ?? "Someone";

  const [showSteps, setShowSteps] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  const meta = GAME_META[game];
  const scoreText = meta ? meta.scoreLabel(score) : `${score}`;
  const gameName = meta?.name ?? game;
  const gameEmoji = meta?.emoji ?? "🧠";
  const deepLink = `memori://duel?game=${encodeURIComponent(game)}&seed=${encodeURIComponent(seed)}&score=${encodeURIComponent(score)}&name=${encodeURIComponent(name)}`;

  useEffect(() => {
    if (!game) return;

    const ua = navigator.userAgent || "";
    const inApp = /FBAN|FBAV|Instagram|TikTok|BytedanceWebview|Line|Twitter|Snapchat/i.test(ua);
    setIsInAppBrowser(inApp);

    if (inApp) {
      setShowSteps(true);
      return;
    }

    window.location.href = deepLink;

    const timer = setTimeout(() => {
      if (!document.hidden) {
        setShowSteps(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [game, deepLink]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "white",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        padding: "24px",
        textAlign: "center",
      }}
    >
      {/* Game badge */}
      <div style={{ fontSize: "64px", marginBottom: "12px" }}>{gameEmoji}</div>
      <div
        style={{
          background: "rgba(255,255,255,0.12)",
          borderRadius: "24px",
          padding: "6px 18px",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "20px",
          opacity: 0.8,
        }}
      >
        {gameName}
      </div>

      {/* Challenge headline */}
      <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.2 }}>
        {name} challenged you!
      </h1>

      {/* Score pill */}
      <div
        style={{
          background: "linear-gradient(135deg, #3885f5, #7c5ce0)",
          borderRadius: "20px",
          padding: "16px 32px",
          marginBottom: "12px",
          marginTop: "8px",
        }}
      >
        <div style={{ fontSize: "13px", opacity: 0.8, marginBottom: "4px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Their Score
        </div>
        <div style={{ fontSize: "36px", fontWeight: 800 }}>{scoreText}</div>
      </div>

      <p style={{ fontSize: "17px", opacity: 0.75, marginBottom: "32px" }}>
        Think you can beat that?
      </p>

      {showSteps ? (
        <div style={{ maxWidth: "340px", width: "100%" }}>
          {isInAppBrowser ? (
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>
                Open in Safari to accept:
              </p>
              <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
                Tap the <strong>...</strong> menu and select <strong>&quot;Open in Safari&quot;</strong>
              </p>
              <p style={{ fontSize: "14px", opacity: 0.6 }}>
                Or copy this link and paste it in Safari
              </p>
            </div>
          ) : (
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>
                Get Memori to accept:
              </p>
              <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
                <strong>Step 1:</strong> Download Memori from the App Store
              </p>
              <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
                <strong>Step 2:</strong> Open this link again to start the challenge
              </p>
              <p style={{ fontSize: "14px", opacity: 0.6 }}>
                You&apos;ll play the exact same round — same seed, fair match
              </p>
            </div>
          )}

          {isInAppBrowser ? (
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied! Paste it in Safari to accept the challenge.");
              }}
              style={{
                display: "block",
                width: "100%",
                background: "linear-gradient(135deg, #3885f5, #7c5ce0)",
                color: "white",
                padding: "16px 48px",
                borderRadius: "16px",
                fontSize: "18px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Copy Link
            </button>
          ) : (
            <>
              <a
                href={deepLink}
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #3885f5, #7c5ce0)",
                  color: "white",
                  padding: "16px 48px",
                  borderRadius: "16px",
                  fontSize: "18px",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: "12px",
                }}
              >
                Open in Memori
              </a>
              <a
                href="https://apps.apple.com/app/id6760178716"
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  padding: "14px 48px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Download Memori
              </a>
            </>
          )}
        </div>
      ) : (
        <>
          <a
            href={deepLink}
            style={{
              background: "linear-gradient(135deg, #3885f5, #7c5ce0)",
              color: "white",
              padding: "16px 48px",
              borderRadius: "16px",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Accept Challenge
          </a>
          <p style={{ fontSize: "13px", opacity: 0.5, marginTop: "16px" }}>
            Opening Memori...
          </p>
        </>
      )}

      <p style={{ fontSize: "12px", opacity: 0.35, marginTop: "40px" }}>
        Memori — Brain Training Games
      </p>
    </div>
  );
}

export default function ChallengePage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1a1a2e",
            color: "white",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Loading challenge...
        </div>
      }
    >
      <ChallengeContent />
    </Suspense>
  );
}
