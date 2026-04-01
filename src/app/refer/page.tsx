"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ReferContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) return;

    const deepLink = `memori://refer?code=${code}`;
    const appStore = "https://apps.apple.com/app/id6760178716";

    // Try to open the app via deep link
    window.location.href = deepLink;

    // If app isn't installed, redirect to App Store after 1.5s
    const timer = setTimeout(() => {
      window.location.href = appStore;
    }, 1500);

    return () => clearTimeout(timer);
  }, [code]);

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
      <div style={{ fontSize: "64px", marginBottom: "16px" }}>🧠</div>
      <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}>
        Your friend invited you to Memori
      </h1>
      <p style={{ fontSize: "18px", opacity: 0.8, marginBottom: "32px" }}>
        Get 1 week of Pro free — all brain games unlocked
      </p>
      <a
        href="https://apps.apple.com/app/id6760178716"
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
        Download Memori
      </a>
      <p style={{ fontSize: "13px", opacity: 0.5, marginTop: "16px" }}>
        Opening Memori...
      </p>
    </div>
  );
}

export default function ReferPage() {
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
          }}
        >
          Loading...
        </div>
      }
    >
      <ReferContent />
    </Suspense>
  );
}
