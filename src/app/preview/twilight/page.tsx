import type { Metadata } from "next";
import { Landing } from "@/components/landing";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function Preview() {
  return <Landing variant="twilight" />;
}
