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

export const getStoryContentList = (
  storyContentList: IStoryContentItem[],
): ActionGetStoryContentList => ({
  type: StoryMapActions.FETCH_STORY_CONTENT_LIST,
  storyContentList,
});

export const getPlaces = (places: IPlace[]): ActionGetPlaces => ({
  type: StoryMapActions.FETCH_PLACES,
  places,
});
