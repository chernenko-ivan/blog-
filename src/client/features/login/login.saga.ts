import {takeEvery, all, put, call} from 'redux-saga/effects'
import {
    sendLoginRequest,
    sendLoginRequestSuccess,
    sendCreateProfileRequest,
    sendCreateProfileRequestSuccess
} from './login.slice';
import {Response} from "../../../common/transport.types";
import {LoginRequest, LoginResponse} from "../../../common/login.types";
import {createProfile, login} from "../../api/login";
import {PayloadAction} from "@reduxjs/toolkit";

function* loginRequestSaga(action: PayloadAction<LoginRequest>) {
    const res: Response<LoginResponse> = yield call(login, action.payload);
    yield put(sendLoginRequestSuccess(res.data.token));
}

function* loginRequestWatcher() {
    yield takeEvery(sendLoginRequest.type, loginRequestSaga)
}

function* createProfileRequestSaga(action: PayloadAction<LoginRequest>) {
    const res: Response<LoginResponse> = yield call(createProfile, action.payload);
    yield put(sendCreateProfileRequestSuccess(res.data.token));
}

function* createProfileRequestWatcher() {
    yield takeEvery(sendCreateProfileRequest.type, createProfileRequestSaga)
}

export function* loginSaga() {
    yield all([
        loginRequestWatcher(),
        createProfileRequestWatcher()
    ])
}