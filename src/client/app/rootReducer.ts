import {combineReducers} from "@reduxjs/toolkit";

import {articlesReducer} from "../features/articles/articles.slice";
import {previewsReducer} from "../features/previews/prewies.slice";


export const rootReducer = combineReducers({
    articlesReducer,
    previewsReducer
});