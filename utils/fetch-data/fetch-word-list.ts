import { createClient } from "@/utils/supabase/client";
import { WordListItem } from "@/types/word-list-item";

// Cache for 1 week = 604800 seconds
export const revalidate = 604800;
export const fetchWordList = async (): Promise<{
  wordList: WordListItem[];
  error: Error | null;
}> => {
  const supabase = createClient();

  try {
    const { data: wordList, error } = await supabase
      .from("ad_terms")
      .select("*");

    if (error) {
      throw error;
    }
    return { wordList, error: null };
  } catch (error) {
    console.error("Error fetching word list:", error);
    return { wordList: [], error: error as Error };
  }
};
