import { createClient } from "../supabase/client";

interface Region {
  id: number;
  region_name: string;
  slug: string;
}
// Cache for 1 week = 604800 seconds
export const revalidate = 604800;
export const fetchRegions = async (): Promise<{
  regions: Region[];
  error: Error | null;
}> => {
  const supabase = createClient();
  try {
    const { data: regions, error } = await supabase.from("regions").select("*");
    if (error) {
      throw error;
    }
    return { regions, error: null };
  } catch (error) {
    console.error("Error fetching regions:", error);
    return { regions: [], error: error as Error };
  }
};
