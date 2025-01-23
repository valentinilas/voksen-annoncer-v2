import { ArticleImage } from "./article-image";

export interface Article {
    id: number;
    Slug: string;
    Topic: string;
    Author: string;
    Title: string;
    Summary: string;
    "Body Text": string;
    RT: string | null;
    Image: ArticleImage;
    updatedAt: string;
    createdAt: string;
}