import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memori — What's Your Brain Age?",
  description: "Discover your Brain Age with a 2-minute assessment. Train with 8 science-backed cognitive games. Compete on leaderboards. All data stays on your device.",
  keywords: "brain training, brain age, memory games, cognitive training, brain score, dual n-back, reaction time, brain test",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Memori — What's Your Brain Age?",
    description: "Discover your Brain Age with a 2-minute assessment. Train with 8 science-backed games. Challenge your friends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
