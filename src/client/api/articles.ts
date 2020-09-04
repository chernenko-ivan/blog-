import {ArticlesResponse} from "../../common/articles.types";
import {Response} from "../../common/transport.types";
import {PreviewsResponse} from "../../common/preview.types";

export const getArticles = (): Promise<Response<ArticlesResponse>> => {
    return fetch('/api/articles/list')
        .then<Response<ArticlesResponse>>(res => res.json());
};

export const getPreviews = (): Promise<Response<PreviewsResponse>> => {
    return fetch('/api/previews/list')
        .then<Response<PreviewsResponse>>(res => res.json());
};