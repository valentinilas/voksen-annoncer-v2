import { Skeleton } from "@/components/ui/skeleton";
export function WordListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-base-200 py-12 gap-10 justify-start animate-pulse"
          >
            <div>
              <Skeleton className="h-6 w-3/4 mb-4"></Skeleton>
              <Skeleton className="h-4 w-full mb-2"></Skeleton>
              <Skeleton className="h-4 w-full mb-2"></Skeleton>
              <Skeleton className="h-4 w-full mb-2"></Skeleton>
            </div>
            <div className="mt-auto">
              <Skeleton className="h-8 w-1/3"></Skeleton>
            </div>
          </div>
        ))}
    </div>
  );
}
