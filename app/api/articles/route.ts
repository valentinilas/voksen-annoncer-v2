import { NextResponse } from 'next/server';
import { fetchAllArticles } from '@/utils/fetch-data/fetch-articles';

export async function GET(): Promise<NextResponse> {
    try {
        const { articles, total, error } = await fetchAllArticles();

        if (error) {
            throw new Error(error);
        }

        // Set cache headers, cache for 1 hour
        const response = NextResponse.json(
            { articles, total },
            {
                status: 200,
                headers: {
                    'Cache-Control': 'public, s-maxage=2592000, stale-while-revalidate=59',
                },
            }
        );

        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message },
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }
    
        // Handle non-Error types gracefully
        return NextResponse.json(
            { error: 'An unknown error occurred' },
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}
