


import { Article } from '@/types';
import { fetchAllArticles, fetchArticle } from '@/utils/fetch-data/fetch-articles';
import Markdown from 'react-markdown';
// import Image from "next/image";
// import Link from "next/link";

export const revalidate = 3600;
// This ensures all possible paths are generated at build time
export async function generateStaticParams() {
    try {
        const { articles, total } = await fetchAllArticles();
        console.log('Fetched articles:', total);

        const paths = articles.map((article: Article) => ({
            slug: article.Slug,
        }));
        console.log(paths);
        console.log('Generated paths');

        return paths;
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// export async function generateMetadata({ params, searchParams }) {
//     const { slug, locale } = await params;

//     try {
//         const { article } = await apiFetchSingleArticle(slug);
//         // console.log('Fetched article:', article.Slug);
//         return {
//             metadataBase: new URL('https://www.voksen-annoncer.com'),
//             title: article.Title + ' | Voksenannoncer',
//             description: article.Summary,
//             openGraph: {
//                 images: [article.Image?.url || ''],
//             },
//             alternates: generateAlternatesBlock(locale, `/articles/${slug}`, await searchParams, true),

//         };
//     } catch (error) {
//         console.error("Failed to fetch article data:", error);
//         return {

//         };
//     }
// }

// const components = {
//     h1: ({ _node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
//     h2: ({ _node, ...props }) => <h2 className="text-2xl font-semibold my-3" {...props} />,
//     h3: ({ _node, ...props }) => <h3 className="text-xl font-semibold my-2" {...props} />,
//     p: ({ _node, ...props }) => <p className="my-2" {...props} />,
//     ul: ({ _node, ...props }) => <ul className="list-disc list-inside my-2 pl-8" {...props} />,
//     ol: ({ _node, ...props }) => <ol className="list-decimal list-outside my-2 pl-8" {...props} />,
//     li: ({ _node, ...props }) => <li className="my-1" {...props} />,
// };




export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;


    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${slug}`, {
    //     next: { tags: ['public-posts'] }
    // });

    // const response: { article: Article } = await res.json();
    const { article } = await fetchArticle(slug); // Now 'article' is typed as Article


    if (!article) {
        return <>
            <article>
                <div className="bg-base-100 p-20 rounded-box shadow-sm">
                    <h1 className="text-4xl mb-5 text-center">Ikke fundet</h1>

                </div>
            </article>
        </>
    }

    const { Title, 'Body Text': BodyText, createdAt, Author, Summary } = article;
    // console.log(article);
    return <>
        <article>

            <div className=" mx-auto bg-base-100 p-10 rounded-box">

                <h1 className="text-4xl mb-5 ">{Title}</h1>
                <p>{Summary}</p>

                {/* <Image
                    src={`https://cms.voksen-annoncer.com${articleImage?.url}`}
                    alt={articleImage?.alt}
                    width={articleImage?.width}
                    height={articleImage?.height}
                    className="rounded-lg mx-auto size-full my-10"
                /> */}

                <Markdown className="prose prose-lg" >{BodyText}</Markdown>
                <p className="pt-10">{Author} | {createdAt} </p>
            </div>

            {/* <div className=" mx-auto  px-2 py-3 ">
                <Link href="/">Home</Link> / <Link href="/articles">Articles</Link> / <span>{Title}</span>
            </div> */}
        </article>
    </>
}
