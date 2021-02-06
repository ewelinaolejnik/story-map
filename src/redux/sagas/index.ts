import { takeEvery } from "redux-saga/effects";
import { HeaderActions, StoryMapActions } from "../../types";
import { fetchHeaderSaga } from "./header";
import { fetchPlacesSaga, fetchStoryContentListSaga } from "./storyMap";

export function* watchHeader() {
  yield takeEvery(HeaderActions.GET_HEADER, fetchHeaderSaga);
}

export function* watchStoryMap() {
  yield takeEvery(
    StoryMapActions.GET_STORY_CONTENT_LIST,
    fetchStoryContentListSaga,
  );
  yield takeEvery(StoryMapActions.GET_PLACES, fetchPlacesSaga);
}
