"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ReferContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [showSteps, setShowSteps] = useState(false);

  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    if (!code) return;

    // Detect in-app browsers (TikTok, Instagram, Facebook, etc.)
    const ua = navigator.userAgent || "";
    const inApp = /FBAN|FBAV|Instagram|TikTok|BytedanceWebview|Line|Twitter|Snapchat/i.test(ua);
    setIsInAppBrowser(inApp);

    if (inApp) {
      // In-app browsers block custom schemes, show manual steps immediately
      setShowSteps(true);
      return;
    }

    const deepLink = `memori://refer?code=${code}`;

    // Try to open the app via deep link
    window.location.href = deepLink;

    // If app didn't open after 2s, show the steps instead of auto-redirecting
    const timer = setTimeout(() => {
      if (!document.hidden) {
        setShowSteps(true);
      }
    }, 2000);

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

      {showSteps ? (
        <div style={{ maxWidth: "340px" }}>
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
                Open in Safari to claim your free week:
              </p>
              <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
                Tap the <strong>...</strong> menu above and select <strong>&quot;Open in Safari&quot;</strong>
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
                To claim your free week:
              </p>
              <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
                <strong>Step 1:</strong> Download Memori from the App Store
              </p>
              <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
                <strong>Step 2:</strong> Open this link again after installing
              </p>
              <p style={{ fontSize: "14px", opacity: 0.6 }}>
                The link will activate your free Pro week automatically
              </p>
            </div>
          )}
          {isInAppBrowser ? (
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied! Paste it in Safari to claim your free week.");
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
            <a
              href="https://apps.apple.com/app/id6760178716"
              style={{
                display: "block",
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
          )}
        </div>
      ) : (
        <>
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
        </>
      )}
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
