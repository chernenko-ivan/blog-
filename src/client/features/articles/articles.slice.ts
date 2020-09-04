import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArticlesState} from "./articles.types";
import {Article} from "../../../common/articles.types";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";

const initialState: ArticlesState= {
    articles: [],
    loading: false
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        fetchArticles: (state: ArticlesState) => {
            state.loading = true;
        },
        articlesFetchSuccess: (state: ArticlesState, action: PayloadAction<Article[]>) => {
            state.articles.push(...action.payload);
            state.loading = true;
        }
    }
});

const {actions, reducer} = articlesSlice;

export const {
    fetchArticles,
    articlesFetchSuccess
} = actions;

export const articlesReducer = reducer;
