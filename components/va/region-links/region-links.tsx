import { Button } from "@/components/ui/button";
import { fetchRegions } from "@/utils/fetch-data/fetch-regions";
import Link from "next/link";

// Revalidate for 60 seconds
export const revalidate = 60;
export default async function RegionLinks() {
  const { regions } = await fetchRegions();
  return (
    <>
      {regions.length && (
        <div className="max-w-4xl pt-32 pb-32 mx-auto text-center">
          <h2 className="text-center text-charcoal-600 text-2xl md:text-4xl mb-11">
            Find ads near you
          </h2>

          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((region) => {
              return (
                <Button variant="outline" asChild key={region.id}>
                  <Link href={`/location/${region.slug}`}>
                    {region.region_name}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
