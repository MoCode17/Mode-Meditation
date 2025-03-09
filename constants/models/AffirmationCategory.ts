export interface AffirmationCategory {
    title: string;
    image: GalleryPreviewData[];
}

export interface GalleryPreviewData {
    id: number;
    image: any;
    text: string;
}