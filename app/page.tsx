import { Button } from "@/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import RegionLinks from "@/components/va/region-links/region-links";
import Link from "next/link";
import FeaturedAdsComponent from "@/components/va/featured-ads/featured-ads-component";

export const revalidate = 60;
export default async function Home() {
  return (
    <div className="">
      <div className="max-w-4xl pt-32 pb-32 mx-auto text-center">
        <h1 className="text-charcoal-600 text-5xl md:text-7xl mb-11">
          Build products that <br />
          people actually want
        </h1>
        <p className="text-center text-lg md:text-xl mb-11 ">
          Velkommen til Voksenannoncer – din førende platform for voksne, hvor
          du kan finde alt fra{" "}
          <Link className="underline hover:text-red-600" href="/search/sex">
            sex
          </Link>
          ,{" "}
          <Link className="underline hover:text-red-600" href="/search/escort">
            escorttjenester
          </Link>
          ,{" "}
          <Link className="underline hover:text-red-600" href="/search/massage">
            massage{" "}
          </Link>
          til{" "}
          <Link className="underline hover:text-red-600" href="/search/sugar">
            sugar relationships
          </Link>{" "}
          . Uanset hvad du søger, er det nemt og helt gratis at oprette en
          annonce på Voksenannoncer. Lad os hjælpe dig med at skabe
          forbindelser, der matcher dine ønsker.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary">
            See ads
            <ChevronRight />
          </Button>
          <Button>
            Create a new ad
            <Plus />
          </Button>
        </div>
      </div>
      <FeaturedAdsComponent />
      <RegionLinks />
    </div>
  );
}
