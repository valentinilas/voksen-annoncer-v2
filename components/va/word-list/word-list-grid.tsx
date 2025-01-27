import { Button } from "@/components/ui/button";
import { WordListItem } from "@/types/word-list-item";
import Link from "next/link";

export async function WordListGrid({ wordList }: { wordList: WordListItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {wordList.map((item: WordListItem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border-b border-base-200 py-12 gap-10 justify-start"
          >
            <div>
              <h3 className="text-lg font-bold">{item.term_da}</h3>
              <p>{item.term_description_da}</p>
            </div>
            <div className="mt-auto">
              <Button asChild variant="secondary">
                <Link href={`/search/${item.term_da}`}>Finde</Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
