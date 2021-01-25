import { combineReducers } from "redux";
import { AppState } from "../../types";
import storyMapReducer from "./storyMap";

export default combineReducers<AppState>({
  storyMapState: storyMapReducer,
});
