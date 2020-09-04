import {put, call, takeEvery, all} from 'redux-saga/effects';
import {getArticles} from "../../api/articles";
import {articlesFetchSuccess, fetchArticles as fetchArticlesActions} from './articles.slice'
import {ArticlesResponse} from "../../../common/articles.types";
import {Response} from "../../../common/transport.types";

function* fetchArticles() {
    const res: Response<ArticlesResponse> = yield call(getArticles);
    yield put(articlesFetchSuccess(res.data.articles));
}

function* articleFetchWatch() {
    yield takeEvery(fetchArticlesActions.type, fetchArticles)
}

export function* articlesSaga() {
    yield all([
        articleFetchWatch()
    ])
}