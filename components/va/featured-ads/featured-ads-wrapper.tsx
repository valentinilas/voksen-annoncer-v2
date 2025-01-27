import { fetchRandomPublicAds } from "@/utils/fetch-data/fetch-ads-featured";
import { FeaturedAdsSlider } from "./featured-ads-slider";

export default async function FeaturedAdsWrapper({ vertical = false }) {
  const { ads } = await fetchRandomPublicAds();
  // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  // await delay(30000);
  return <FeaturedAdsSlider ads={ads} vertical={vertical} />;
}
