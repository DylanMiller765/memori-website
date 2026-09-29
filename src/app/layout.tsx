import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const title = "Memo: Screen Time App Blocker";
const description =
  "Block TikTok, Instagram and any app that eats your day. To get back in, beat a quick brain game first.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getmemoriapp.com"),
  title: { default: `${title} — Block apps. Train to unlock.`, template: "%s — Memo" },
  description,
  keywords:
    "app blocker, screen time, doomscrolling, block tiktok, block instagram, focus, study, brain games, dopamine detox",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  itunes: { appId: "6760178716" },
  openGraph: {
    title: "Block apps. Train to unlock.",
    description,
    type: "website",
    siteName: "Memo",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Memo: Block apps. Train to unlock." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Block apps. Train to unlock.",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#74C6F8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
