import {  NextResponse } from 'next/server';
import { fetchArticle } from '@/utils/fetch-data/fetch-articles';



export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
  )  {
    const { slug } = await params;

    if (!slug) {
        return NextResponse.json(
            { error: 'Slug query parameter is required' },
            { status: 400 }
        );
    }

    const { article, articleError } = await fetchArticle(slug);

    if (articleError) {
        return NextResponse.json(
            { error: articleError },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { article },
        {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=2592000, stale-while-revalidate=59',
            },
        }
    );
}