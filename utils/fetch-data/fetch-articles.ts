import { Article } from "@/types";

interface PaginatedResponse {
    docs: Article[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: number | null;
    totalDocs: number;
    totalPages: number;
}

export const fetchAllArticles = async (): Promise<{ articles: Article[], total: number, error: string | null }> => {
    const baseUrl = 'https://cms.voksen-annoncer.com/api/posts';
    let articles: Article[] = [];
    

    try {
        const firstPageRes = await fetch(`${baseUrl}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
            signal: AbortSignal.timeout(10000)
        });

        if (!firstPageRes.ok) {
            throw new Error(`Failed to fetch first page: ${firstPageRes.statusText}`);
        }

        const firstPageData: PaginatedResponse = await firstPageRes.json();
        articles = [...firstPageData.docs];
        
        let currentPage = 1;
        const { totalPages } = firstPageData;
        
        // Fetch remaining pages with delay
        while (currentPage < totalPages) {
            currentPage++;
            
            console.log(`Fetching page ${currentPage}/${totalPages}`);
            
            try {
                const res = await fetch(`${baseUrl}?page=${currentPage}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                   
                });

                if (res.ok) {
                    const data: PaginatedResponse = await res.json();
                    articles = [...articles, ...data.docs];
                }
            } catch (error) {
                console.error(`Failed to fetch page ${currentPage}:`, error);
                continue; // Continue with next page if one fails
            }
        }

        return {
            articles,
            total: articles.length,
            error: null
        };
    } catch (error) {
        console.error('Error in fetchArticles:', error);
        return {
            articles,
            total: articles.length,
            error: (error as Error).message
        };
    }
};



interface FetchSingleArticleResponse {
    article: Article | null;
    articleError: string | null;
}

export const fetchArticle = async (slug: string): Promise<FetchSingleArticleResponse> => {
    if (!slug) {
        return { article: null, articleError: 'Slug is required' };
    }

    try {
        const res = await fetch(
            `https://cms.voksen-annoncer.com/api/posts?where[Slug][equals]=${slug}`
        );

        // Check if the response is ok (status code 200)
        if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        // Parse the JSON response
        const data = await res.json();

        // Assuming 'docs' contains the posts, return the first post
        const article = data.docs?.[0] || null;
        return { article, articleError: null };
    } catch (error: any) {
        console.error('Error fetching article:', error);
        return { article: null, articleError: error.message };
    }
};

