import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import StoryContentList from "./StoryContentList/StoryContentList";
import StoryMap from "./StoryMap/StoryMap";
import { Map as LeafletMap } from "leaflet";
import { useHistory } from "react-router-dom";
import {
  Action,
  AppState,
  InteractableStoryMapProps,
  IPlace,
  IStoryContentItem,
} from "../../types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toInitZoom, updateSelectedPlace } from "../../redux/actions/storyMap";

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
}) => {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const history = useHistory();
  const [storyContentList, setStoryContentList] = useState<IStoryContentItem[]>(
    [],
  );
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/storyContentList")
      .then((result) => result.json())
      .then((response: IStoryContentItem[]) => {
        setStoryContentList(response);
      });

    fetch("http://localhost:4000/cities")
      .then((result) => result.json())
      .then((response: IPlace[]) => {
        setPlaces(response);
      });
  }, []);

  useEffect(() => {
    const selectedPlaceId: string = history.location.hash.replace("#place", "");
    if (selectedPlaceId) {
      handleSelectedPlaceChange(parseInt(selectedPlaceId));
      return;
    }
    onUpdateSelectedPlace(places[0]);
  }, [places, history]);

  const handleSelectedPlaceChange = (id: number) => {
    const selectedPlace: IPlace | undefined = places.find(
      (place: IPlace) => place.id === id,
    );
    if (selectedPlace) {
      onToInitZoom();
      onUpdateSelectedPlace(selectedPlace);
      map?.flyTo(
        { lat: selectedPlace?.latitude, lng: selectedPlace?.longitude },
        storyMapProps.zoom,
      );
      const placeId = `place${id}`;
      const placeNode = document.getElementById(placeId);
      history.push(`#${placeId}`);
      placeNode?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledInteractableStoryMap>
      <StoryMap
        selectedPlace={storyMapProps.selectedPlace}
        places={places}
        zoom={storyMapProps.zoom}
        setMap={setMap}
        handleSelectedPlaceChange={handleSelectedPlaceChange}
      ></StoryMap>
      <StoryContentList
        storyContentItems={storyContentList}
        handleSelectedPlaceChange={handleSelectedPlaceChange}
      ></StoryContentList>
    </StyledInteractableStoryMap>
  );
};

export const mapStateToProps = (state: AppState) => ({
  storyMapProps: state.storyMapState,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onToInitZoom: () => dispatch(toInitZoom()),
  onUpdateSelectedPlace: (selectedPlace: IPlace | null) =>
    dispatch(updateSelectedPlace(selectedPlace)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InteractableStoryMap);
