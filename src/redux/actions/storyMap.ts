import {
  Action,
  ActionGetPlaces,
  ActionGetStoryContentList,
  ActionUpdateSelectedPlace,
  IPlace,
  IStoryContentItem,
  StoryMapActions,
} from "../../types";

export const toInitZoom = (): Action => ({
  type: StoryMapActions.TO_INIT_ZOOM,
});

export const updateSelectedPlace = (
  selectedPlace: IPlace | null,
): ActionUpdateSelectedPlace => ({
  type: StoryMapActions.UPDATE_SELECTED_PLACE,
  selectedPlace,
});

export const fetchStoryContentList = (
  storyContentList: IStoryContentItem[],
): ActionGetStoryContentList => ({
  type: StoryMapActions.FETCH_STORY_CONTENT_LIST_SUCCESS,
  storyContentList,
});

export const fetchPlaces = (places: IPlace[]): ActionGetPlaces => ({
  type: StoryMapActions.FETCH_PLACES_SUCCESS,
  places,
});

export const getStoryContentList = (): Action => ({
  type: StoryMapActions.GET_STORY_CONTENT_LIST,
});

export const getPlaces = (): Action => ({
  type: StoryMapActions.GET_PLACES,
});
