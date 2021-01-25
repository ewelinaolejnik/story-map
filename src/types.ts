import { Map as LeafletMap } from "leaflet";

export enum StoryMapActions {
  TO_INIT_ZOOM,
  UPDATE_SELECTED_PLACE,
}

export enum HeaderActions {
  UPDATE_TITLE,
}

export interface Action {
  type: StoryMapActions | HeaderActions;
}

export interface ActionUpdateHeader extends Action {
  title: string;
}

export interface ActionUpdateSelectedPlace extends Action {
  selectedPlace: IPlace | null;
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
}

export interface InteractableStoryMapProps {
  storyMapProps: StoryMapState;
  onToInitZoom: () => void;
  onUpdateSelectedPlace: (selectedPlace: IPlace | null) => void;
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
  onUpdateTitle: (title: string) => void;
}
