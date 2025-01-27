import { fetchWordList } from "@/utils/fetch-data/fetch-word-list";
import { WordListGrid } from "./word-list-grid";

export default async function WordListWrapper() {
  const { wordList } = await fetchWordList();
  return <WordListGrid wordList={wordList} />;
}
