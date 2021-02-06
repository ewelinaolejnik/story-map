import { put, call } from "redux-saga/effects";
import { IPlace, IStoryContentItem } from "../../types";
import { fetchPlaces, fetchStoryContentList } from "../actions/storyMap";

export function* fetchStoryContentListSaga() {
  const response = yield call(fetch, "http://localhost:4000/storyContentList");
  const storyContentList: IStoryContentItem[] = yield response.json();
  yield put(fetchStoryContentList(storyContentList));
}

export function* fetchPlacesSaga() {
  const response = yield call(fetch, "http://localhost:4000/cities");
  const places: IPlace[] = yield response.json();
  yield put(fetchPlaces(places));
}
