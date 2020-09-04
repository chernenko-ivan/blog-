import {call, put, takeEvery, all} from "redux-saga/effects";
import {fetchPreviewsSuccess, fetchPreviews} from "./prewies.slice";
import {getPreviews} from "../../api/articles";
import {Response} from "../../../common/transport.types";
import {PreviewsResponse} from "../../../common/preview.types";

function* fetchPreviewsSaga() {
    const res: Response<PreviewsResponse> = yield call(getPreviews);
    yield put(fetchPreviewsSuccess(res.data))
}

function* watchFetchPreviews() {
    yield takeEvery(fetchPreviews.type, fetchPreviewsSaga);
}

export function* previewsSaga() {
    yield all([
        watchFetchPreviews()
    ])
}