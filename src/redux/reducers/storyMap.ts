import {
  Action,
  ActionUpdateSelectedPlace,
  StoryMapState,
  StoryMapActions,
  ActionGetStoryContentList,
  ActionGetPlaces,
} from "../../types";

const initialState: StoryMapState = {
  zoom: 12,
  selectedPlace: null,
  places: [],
  storyContentList: [],
};

const storyMapReducer = (
  state: StoryMapState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case StoryMapActions.TO_INIT_ZOOM:
      return { ...state, zoom: initialState.zoom };
    case StoryMapActions.UPDATE_SELECTED_PLACE:
      return {
        ...state,
        selectedPlace: (action as ActionUpdateSelectedPlace).selectedPlace,
      };
    case StoryMapActions.FETCH_STORY_CONTENT_LIST:
      return {
        ...state,
        storyContentList: (action as ActionGetStoryContentList)
          .storyContentList,
      };
    case StoryMapActions.FETCH_PLACES:
      return { ...state, places: (action as ActionGetPlaces).places };
    default:
      return state;
  }
};

export default storyMapReducer;
