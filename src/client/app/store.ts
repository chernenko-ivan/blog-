import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import {all} from "redux-saga/effects";

import {rootReducer} from "./rootReducer";
import {loginSaga} from "../features/login/login.saga";

const sagaMiddleware = createSagaMiddleWare();

function* rootSaga() {
    yield all([
        loginSaga()
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