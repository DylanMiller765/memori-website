import type { Metadata } from "next";
import { TtTest } from "./tt-test";

// Temporary: which App Store hand-off survives TikTok's in-app browser?
export const metadata: Metadata = { robots: { index: false } };

export default function Page() {
  return <TtTest />;
}
