import { takeEvery } from "redux-saga/effects";
import { HeaderActions } from "../../types";
import { fetchHeaderSaga } from "./header";

export function* watchHeader() {
  yield takeEvery(HeaderActions.GET_HEADER, fetchHeaderSaga);
}
