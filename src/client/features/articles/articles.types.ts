import {Article} from "../../../common/articles.types";

export interface ArticlesState {
    articles: Article[];
    loading: boolean;
}