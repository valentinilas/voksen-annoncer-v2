import { fetchRandomPublicAds } from "@/utils/fetch-data/fetch-ads";
import { FeaturedAdsSlider } from "./featured-ads-slider";
// Cache for 6 hours = 21600 seconds
export const revalidate = 21600;
export default async function FeaturedAdsWrapper({ vertical = false }) {
  const { ads } = await fetchRandomPublicAds();
  // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(30000);
  return <FeaturedAdsSlider ads={ads} vertical={vertical} />;
}
