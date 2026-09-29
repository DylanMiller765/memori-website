"use client";

import { useEffect, useState } from "react";
import { appStoreUrl } from "@/lib/links";

const STORE = appStoreUrl("sic-bio");
const METHODS = [
  { n: 1, label: "Normal link", href: STORE },
  { n: 2, label: "App Store scheme", href: "itms-apps://apps.apple.com/app/id6760178716?pt=127835518&ct=sic-bio&mt=8" },
  { n: 3, label: "Open in Safari", href: "x-safari-https://getmemoriapp.com/tt" },
  { n: 4, label: "New tab", href: STORE, blank: true },
];

export function TtTest() {
  const [ua, setUa] = useState("");
  useEffect(() => setUa(navigator.userAgent), []);
  return (
    <main className="mx-auto flex max-w-md flex-col gap-4 px-5 py-10 text-ink">
      <h1 className="text-2xl font-extrabold">TikTok link test</h1>
      <p className="text-sm text-ink/70">Tap each one from inside TikTok. Note which open the App Store (or Safari).</p>
      {METHODS.map((m) => (
        <a
          key={m.n}
          href={m.href}
          target={m.blank ? "_blank" : undefined}
          rel={m.blank ? "noopener" : undefined}
          className="rounded-2xl border-2 border-ink bg-white px-5 py-4 text-lg font-extrabold shadow-[0_3px_0_#0B1B22]"
        >
          {m.n}. {m.label}
        </a>
      ))}
      <p className="break-all text-xs text-ink/50">{ua}</p>
    </main>
  );
}
