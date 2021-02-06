import { put, call } from "redux-saga/effects";
import { HeaderState } from "../../types";
import { getTitleSuccess } from "../actions/header";

export function* fetchHeaderSaga() {
  const response = yield call(fetch, "http://localhost:4000/header");
  const headerData: HeaderState = yield response.json();
  yield put(getTitleSuccess(headerData.title));
}
