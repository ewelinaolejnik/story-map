import { combineReducers } from "redux";
import { AppState } from "../../types";
import headerReducer from "./header";
import storyMapReducer from "./storyMap";

export default combineReducers<AppState>({
  storyMapState: storyMapReducer,
  headerState: headerReducer,
});
