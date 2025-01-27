import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

export function FeaturedAdsSkeleton({ vertical = false }) {
  return (
    <div
      className={`${vertical ? "flex-col h-[500px]" : "flex"} mb-10 h-full overflow-hidden`}
    >
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`embla__slide h-full  grow-0 shrink-0 px-3  ${vertical ? "pb-2  basis-1/4" : "basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"}`}
          >
            <Card className="overflow-hidden flex flex-col h-full">
              <AspectRatio ratio={3 / 2}>
                <Skeleton className="w-full  h-full  object-cover" />
              </AspectRatio>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-full  h-12" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full  h-4 mb-1" />
                <Skeleton className="w-full  h-4 mb-1" />
                <Skeleton className="w-1/2  h-4" />
              </CardContent>
              <CardFooter className="mt-auto">
                <Skeleton className="w-1/2  h-9" />
              </CardFooter>
            </Card>
          </div>
        ))}
    </div>
  );
}
