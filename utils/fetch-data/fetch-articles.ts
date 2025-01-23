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
interface FetchOptions {
    page?: number;
    limit?: number;
}

export const fetchArticles = async (
    options?: FetchOptions
): Promise<{
    articles: Article[],
    total: number,
    error: string | null,
    hasNextPage?: boolean,
    hasPrevPage?: boolean,
    nextPage?: number,
    prevPage?: number | null,
    totalPages?: number,
    page?: number
}> => {
    const baseUrl = "https://cms.voksen-annoncer.com/api/posts";
    const { page = 1, limit = 10 } = options || {}; // Default to page 1, limit 10 if not provided
    let articles: Article[] = [];

    try {
        const url = `${baseUrl}?page=${page}&limit=${limit}`;
        const res = await fetch(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            cache: 'force-cache',
            signal: AbortSignal.timeout(10000),
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch articles: ${res.statusText}`);
        }

        const data: PaginatedResponse = await res.json();
        articles = data.docs;
        return {
            articles,
            total: data.totalDocs,
            hasNextPage: data.hasNextPage,
            hasPrevPage: data.hasPrevPage,
            nextPage: data.nextPage,
            prevPage: data.prevPage,
            totalPages: data.totalPages,
            page: data.page,
            error: null,
        };
    } catch (error) {
        console.error("Error in fetchArticles:", error);
        return {
            articles,
            total: 0,
            error: (error as Error).message,
        };
    }
};

export const fetchAllArticles = async (): Promise<{
    articles: Article[];
    total: number;
    error: string | null;
}> => {
    const baseUrl = "https://cms.voksen-annoncer.com/api/posts";
    let articles: Article[] = [];
    let currentPage = 1;
    let totalPages = 1; // Initialize to 1 to start the loop
    let error: string | null = null;

    try {
        while (currentPage <= totalPages) {
            const url = `${baseUrl}?page=${currentPage}`;
            const res = await fetch(url, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                cache: "no-store",
                signal: AbortSignal.timeout(10000),
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch page ${currentPage}: ${res.statusText}`);
            }

            const data: PaginatedResponse = await res.json();
            articles = [...articles, ...data.docs];
            totalPages = data.totalPages; // Update totalPages from response
            currentPage++; // Increment to fetch the next page
        }

        return {
            articles,
            total: articles.length,
            error: null,
        };
    } catch (err) {
        console.error("Error in fetchAllArticles:", err);
        return {
            articles,
            total: articles.length,
            error: (err as Error).message,
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

