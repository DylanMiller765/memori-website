"use client";

import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/links";

/** App Store-style bar pinned to the bottom on phones. Shows only while no
 *  other download badge is on screen, so there is always one tap to the store. */
export function DownloadDock({ watch }: { watch: string[] }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const targets = watch.map((id) => document.getElementById(id)).filter(Boolean) as Element[];
    if (targets.length === 0) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setShow(visible.size === 0);
    });
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [watch]);

  return (
    <div
      data-show={show}
      className="dock fixed inset-x-3 bottom-3 z-50 flex items-center gap-3 rounded-[22px] border-[2.5px] border-ink bg-white p-2.5 pr-3 shadow-[0_5px_0_#0B1B22] sm:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!show}
    >
      <img src="/app-icon.png" alt="" className="h-11 w-11 rounded-[12px] border-2 border-ink" />
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-[15px] font-extrabold text-ink">Memo: App Blocker</p>
        <p className="truncate text-xs font-semibold text-ink/60">Block apps. Play to unlock.</p>
      </div>
      <a
        href={APP_STORE_URL}
        tabIndex={show ? 0 : -1}
        className="rounded-full border-2 border-ink bg-accent px-5 py-2 text-[15px] font-extrabold text-white shadow-[0_3px_0_#0B1B22] active:translate-y-[2px] active:shadow-[0_1px_0_#0B1B22]"
      >
        Get
      </a>
    </div>
  );
}
