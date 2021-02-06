import { Map as LeafletMap } from "leaflet";

export enum StoryMapActions {
  TO_INIT_ZOOM = "TO_INIT_ZOOM",
  UPDATE_SELECTED_PLACE = "UPDATE_SELECTED_PLACE",
  FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS",
  FETCH_STORY_CONTENT_LIST_SUCCESS = "FETCH_STORY_CONTENT_LIST_SUCCESS",
  GET_PLACES = "GET_PLACES",
  GET_STORY_CONTENT_LIST = "GET_STORY_CONTENT_LIST",
}

export enum HeaderActions {
  FETCH_TITLE_SUCCESS = "FETCH_TITLE_SUCCESS",
  GET_HEADER = "GET_HEADER",
}

export interface Action {
  type: StoryMapActions | HeaderActions;
}

export interface ActionGetHeaderSuccess extends Action {
  title: string;
}

export interface ActionUpdateSelectedPlace extends Action {
  selectedPlace: IPlace | null;
}

export interface ActionGetPlaces extends Action {
  places: IPlace[];
}

export interface ActionGetStoryContentList extends Action {
  storyContentList: IStoryContentItem[];
}

export interface IPlace {
  id: number;
  latitude: number;
  longitude: number;
}

export interface AppState {
  storyMapState: StoryMapState;
  headerState: HeaderState;
}

export interface StoryMapState {
  selectedPlace: IPlace | null;
  zoom: number;
  places: IPlace[];
  storyContentList: IStoryContentItem[];
}

export interface InteractableStoryMapProps {
  storyMapProps: StoryMapState;
  onToInitZoom: () => void;
  onUpdateSelectedPlace: (selectedPlace: IPlace | null) => void;
  onGetPlaces: () => void;
  onGetStoryContentList: () => void;
}

export interface IStoryMapProps {
  places: IPlace[];
  zoom: number;
  selectedPlace: IPlace | null;
  setMap: (map: LeafletMap) => void;
  handleSelectedPlaceChange: (id: number) => void;
}

export interface IStoryContentItem {
  id: number;
  title: string;
  description: string;
}
export interface IStoryContentListProps {
  storyContentItems: IStoryContentItem[];
  handleSelectedPlaceChange: (id: number) => void;
}

export interface IStoryContentItemProps {
  id: number;
  title: string;
  description: string;
  handleSelectedPlaceChange: (id: number) => void;
}

export interface HeaderState {
  title: string;
}

export interface HeaderContainerProps {
  headerProps: HeaderState;
  onGetHeader: () => Action;
}
