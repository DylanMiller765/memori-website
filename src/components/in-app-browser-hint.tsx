"use client";

import { useEffect, useState } from "react";

// TikTok's in-app browser blocks every hand-off to the App Store (tested 2026-09-29:
// plain link, itms-apps://, x-safari-https://, new tab). Only "••• → Open in browser"
// works, so inside TikTok the download buttons explain that step instead of failing.
const IN_APP = /musical_ly|BytedanceWebview|TikTok|trill/i;

export function InAppBrowserHint() {
  const [inApp, setInApp] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!IN_APP.test(navigator.userAgent)) return;
    setInApp(true);
    document.body.style.paddingTop = "40px";
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.('a[href*="apps.apple.com"]');
      if (!a) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.body.style.paddingTop = "";
    };
  }, []);

  if (!inApp) return null;

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center gap-2 bg-ink px-4 text-sm font-extrabold text-white">
        To download, tap ••• then Open in browser
        <span aria-hidden className="absolute right-4 text-lg leading-none">↗</span>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-end bg-ink/55 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-label="Open in your browser to download"
        >
          <div className="mt-10 w-full max-w-sm rounded-[22px] border-[2.5px] border-ink bg-white p-5 text-ink shadow-[0_5px_0_#0B1B22]">
            <p className="text-right text-3xl leading-none" aria-hidden>↗</p>
            <h2 className="mt-1 text-xl font-extrabold tracking-tight">One quick step</h2>
            <p className="mt-1 text-[15px] font-medium text-ink/70">TikTok can&apos;t open the App Store from here.</p>
            <ol className="mt-4 space-y-2 text-[17px] font-bold">
              <li>1. Tap <span className="rounded-md bg-ink/10 px-1.5">•••</span> in the top right</li>
              <li>2. Tap <span className="rounded-md bg-ink/10 px-1.5">Open in browser</span></li>
              <li>3. Tap Download on the App Store</li>
            </ol>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-full border-2 border-ink bg-accent py-2.5 text-[15px] font-extrabold text-white shadow-[0_3px_0_#0B1B22]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
