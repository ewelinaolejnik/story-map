import { put } from "redux-saga/effects";
import { IPlace, IStoryContentItem } from "../../types";
import { getPlaces, getStoryContentList } from "../actions/storyMap";

export function* fetchStoryContentListSaga() {
  const storyContentList: IStoryContentItem[] = yield fetch(
    "http://localhost:4000/storyContentList",
  );
  yield put(getStoryContentList(storyContentList));
}

export function* fetchPlaces() {
  const places: IPlace[] = yield fetch("http://localhost:4000/cities");
  yield put(getPlaces(places));
}
