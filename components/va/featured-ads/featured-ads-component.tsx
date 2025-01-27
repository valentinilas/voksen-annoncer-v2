import { Suspense } from "react";
import FeaturedAdsWrapper from "./featured-ads-wrapper";
import { FeaturedAdsSkeleton } from "./featured-ads-skeleton";

interface FeaturedAdsComponentProps {
  vertical?: boolean;
}

export default function FeaturedAdsComponent({
  vertical = false,
}: FeaturedAdsComponentProps) {
  return (
    <>
      <Suspense fallback={<FeaturedAdsSkeleton vertical={vertical} />}>
        <FeaturedAdsWrapper vertical={vertical} />
      </Suspense>
    </>
  );
}
