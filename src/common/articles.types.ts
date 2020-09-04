export enum ArticleType {
    Code,
    Travel
}

export interface Meta {
    type: ArticleType;
    date: Date;
    _id: string;
    title: string;
}

export interface Article extends Meta {
    text: string;
}

export interface ArticlesResponse {
    articles: Article[];
}

export interface ArticlesListResponse {
    articlesNames: string[];
}

export interface CreateArticleRequest {
    title: string;
    text: string;
}