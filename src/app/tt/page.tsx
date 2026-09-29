import type { Metadata } from "next";
import { Landing } from "@/components/landing";

// TikTok bio link. TikTok's in-app browser can't jump straight to the App Store,
// so the bio points here and the buttons carry the "sic-bio" campaign.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: false },
};

export default function TikTokBio() {
  return <Landing campaign="sic-bio" />;
}
