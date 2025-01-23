import { fetchArticles } from "@/utils/fetch-data/fetch-articles";
import { Article } from '@/types';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { format } from "date-fns";
import { da } from "date-fns/locale";


import { cdnUrl } from "@/utils/imagekit/cdn-url";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Params = Promise<{ pagenumber: string }>


export default async function Articles(props: {params: Params}) {
    const params = await props.params
    const pagenumber = params.pagenumber;
    const currentPage = parseInt(pagenumber || "1", 10);

    const { articles, error, hasNextPage, hasPrevPage, nextPage, prevPage, totalPages, page } = await fetchArticles({ page: currentPage, limit: 12 });

    if (error) {
        <p>An error has occured</p>
    }


    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.length && articles.map((article: Article) => (

                    <Card key={article.id} className="overflow-hidden flex flex-col h-full">

                        <AspectRatio ratio={4 / 3}>
                            {article.Image ? (
                                <Image
                                    src={cdnUrl(`https://cms.voksen-annoncer.com${article.Image.url}`, 640, 480)}
                                    alt={article.Title}
                                    width={640}
                                    height={480}
                                />
                            ) : (
                                <div className="bg-zinc-100 w-full h-full"></div>
                            )}
                        </AspectRatio>
                        <CardHeader>

                            <CardTitle><h3 className="leading-normal">{article.Title}</h3></CardTitle>
                            <CardDescription> {format(new Date(article.createdAt), "dd MMMM yyyy", { locale: da })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{article.Summary}</p>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Button asChild>
                                <Link href={`/articles/${article.Slug}`}>Læs mere <ArrowRight className="ml-2" /></Link>
                            </Button>
                        </CardFooter>

                    </Card>
                ))}
            </div>
            <div className="mt-10">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href={hasPrevPage ? `/articles/page/${prevPage}` : "#"} className={!hasPrevPage ? "hidden" : ""} aria-disabled={!hasPrevPage}>
                                Previous
                            </PaginationPrevious>
                        </PaginationItem>

                        {[...Array(totalPages ?? 0)].map((_, i) => {
                            const pageNum = i + 1;
                            return (
                                <PaginationItem key={pageNum}>
                                    <PaginationLink href={`/articles/page/${pageNum}`} isActive={page === pageNum}>
                                        {pageNum}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {totalPages && page !== undefined && totalPages > 3 && page < totalPages - 1 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext  href={hasNextPage ? `/articles/page/${nextPage}` : "#"} className={!hasNextPage ? "hidden" : ""} aria-disabled={!hasNextPage}>
                                Next
                            </PaginationNext>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

        </div>

    );
}

export const revalidate = 3600;
// Static Params Generation (for SSG)
export async function generateStaticParams() {
    const { totalPages } = await fetchArticles({ page: 1, limit: 12 });
    const pageCount = totalPages ?? 0;
    console.log('Generating paths for blog pages: %c%s', 'color: green; font-weight: bold;', pageCount);
    return Array.from({ length: pageCount }, (_, i) => ({
        page: `${i + 1}` 
    }));
}
