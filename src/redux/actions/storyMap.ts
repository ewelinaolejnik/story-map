import {
  Action,
  ActionUpdateSelectedPlace,
  IPlace,
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
