import { createClient } from "@/utils/supabase/client";
import { cdnUrl } from "@/utils/imagekit/cdn-url";
import { FetchRandomAdsResponse } from "@/types/va-types";
import { Ad } from "@/types/va-types";
import { AdImage } from "@/types/va-types";

// Cache for 6 hours = 21600 seconds
export const revalidate = 21600;
export const fetchRandomPublicAds = async (
  count: number = 12,
): Promise<FetchRandomAdsResponse> => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.rpc("get_random_ads", { count });

    if (error) {
      throw new Error(`Failed to fetch random ads: ${error.message}`);
    }

    const transformedAds: Ad[] = data.map((ad: Ad) => ({
      ...ad,
      ad_images: ad.ad_images?.map((image: AdImage) => ({
        ...image,
        image_url: cdnUrl(image.image_url, 300, 300),
      })),
    }));

    return { ads: transformedAds, error: null };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { ads: [], error: error as Error };
  }
};
