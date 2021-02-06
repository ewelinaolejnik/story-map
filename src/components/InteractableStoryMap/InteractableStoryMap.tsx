import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import StoryContentList from "./StoryContentList/StoryContentList";
import StoryMap from "./StoryMap/StoryMap";
import { Map as LeafletMap } from "leaflet";
import { useHistory, useLocation } from "react-router-dom";
import {
  Action,
  AppState,
  InteractableStoryMapProps,
  IPlace,
} from "../../types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  getPlaces,
  getStoryContentList,
  toInitZoom,
  updateSelectedPlace,
} from "../../redux/actions/storyMap";

const StyledInteractableStoryMap = styled.main`
  display: flex;
  height: 93vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InteractableStoryMap: FunctionComponent<InteractableStoryMapProps> = ({
  storyMapProps,
  onUpdateSelectedPlace,
  onToInitZoom,
  onGetPlaces,
  onGetStoryContentList,
}) => {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    onGetPlaces();
    onGetStoryContentList();
  }, []);

  useEffect(() => {
    const selectedPlaceId: string = location.hash.replace("#place", "");
    const selectedPlace: IPlace | undefined = storyMapProps.places.find(
      (place: IPlace) => place.id === parseInt(selectedPlaceId),
    );
    if (selectedPlace) {
      updateMapPlace(selectedPlace);
    }
  }, [location]);

  useEffect(() => {
    const selectedPlaceId: string = location.hash.replace("#place", "");
    if (selectedPlaceId) {
      handleSelectedPlaceChange(parseInt(selectedPlaceId));
      return;
    }
    onUpdateSelectedPlace(storyMapProps.places[0]);
  }, [storyMapProps.places]);

  const handleSelectedPlaceChange = (id: number) => {
    const selectedPlace: IPlace | undefined = storyMapProps.places.find(
      (place: IPlace) => place.id === id,
    );
    if (selectedPlace) {
      updateMapPlace(selectedPlace);
      movePlaceScroll(id);
    }
  };

  const updateMapPlace = (selectedPlace: IPlace) => {
    onToInitZoom();
    onUpdateSelectedPlace(selectedPlace);
    map?.flyTo(
      { lat: selectedPlace?.latitude, lng: selectedPlace?.longitude },
      storyMapProps.zoom,
    );
  };

  const movePlaceScroll = (id: number) => {
    const placeId = `place${id}`;
    const placeNode = document.getElementById(placeId);
    history.push(`#${placeId}`);
    placeNode?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledInteractableStoryMap>
      <StoryMap
        selectedPlace={storyMapProps.selectedPlace}
        places={storyMapProps.places}
        zoom={storyMapProps.zoom}
        setMap={setMap}
        handleSelectedPlaceChange={handleSelectedPlaceChange}
      ></StoryMap>
      <StoryContentList
        storyContentItems={storyMapProps.storyContentList}
        handleSelectedPlaceChange={handleSelectedPlaceChange}
      ></StoryContentList>
    </StyledInteractableStoryMap>
  );
};

export const mapStateToProps = (state: AppState) => ({
  storyMapProps: state.storyMapState,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onGetPlaces: () => dispatch(getPlaces()),
  onGetStoryContentList: () => dispatch(getStoryContentList()),
  onToInitZoom: () => dispatch(toInitZoom()),
  onUpdateSelectedPlace: (selectedPlace: IPlace | null) =>
    dispatch(updateSelectedPlace(selectedPlace)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InteractableStoryMap);
