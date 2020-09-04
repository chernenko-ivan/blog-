import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import {all} from "redux-saga/effects";

import {articlesSaga} from "../features/articles/articles.sagas";
import {rootReducer} from "./rootReducer";
import {previewsSaga} from "../features/previews/previews.sagas";

const sagaMiddleware = createSagaMiddleWare();

function* rootSaga() {
    yield all([
        articlesSaga(),
        previewsSaga(),
    ])
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        store.replaceReducer(require('./rootReducer').rootReducer);
    })
}

sagaMiddleware.run(rootSaga);

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;