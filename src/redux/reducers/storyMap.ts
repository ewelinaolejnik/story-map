import {
  Action,
  ActionUpdateSelectedPlace,
  StoryMapState,
  StoryMapActions,
} from "../../types";

const initialState: StoryMapState = {
  zoom: 12,
  selectedPlace: null,
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
    default:
      return state;
  }
};

export default storyMapReducer;
