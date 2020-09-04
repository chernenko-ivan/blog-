export enum PreviewSize {
    small,
    normal,
    large,
}

export interface Preview {
    img: string;
    size: PreviewSize;
    title: string;
    hoveredImage: string;
    date: Date;
    id: string;
}

export interface PreviewsResponse {
    previews: Preview[];
}