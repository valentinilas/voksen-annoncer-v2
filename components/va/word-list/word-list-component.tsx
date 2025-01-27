import { Suspense } from "react";
import WordListWrapper from "./word-list-wrapper";
import { WordListSkeleton } from "./word-list-skeleton";

export default function WordListComponent() {
  return (
    <>
      <Suspense fallback={<WordListSkeleton />}>
        <WordListWrapper />
      </Suspense>
    </>
  );
}
