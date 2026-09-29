// Campaign links from App Store Connect → Analytics → Campaigns, so installs
// show up per source: "website" for the site, "sic-bio" for the TikTok bio (/tt).
export const appStoreUrl = (campaign: string) =>
  `https://apps.apple.com/app/apple-store/id6760178716?pt=127835518&ct=${campaign}&mt=8`;

export const APP_STORE_URL = appStoreUrl("website");
