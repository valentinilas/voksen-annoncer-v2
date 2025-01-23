export interface ArticleImage {
    id: number;
    alt: string;
    prefix: string;
    updatedAt: string;
    createdAt: string;
    url: string;
    thumbnailURL: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    sizes: {
        thumbnail: {
            url: string;
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
        };
    };
}