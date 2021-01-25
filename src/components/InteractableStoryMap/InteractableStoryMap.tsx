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
  const storyContentList = {
    storyContentItems: [
      {
        id: 1,
        title: "test",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      {
        id: 2,
        title: "test 2",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      {
        id: 3,
        title: "test 3",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      {
        id: 4,
        title: "test 4",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
    ],
  };

  const places = [
    {
      id: 1,
      latitude: 40.7167,
      longitude: -74.0,
    },
    {
      id: 2,
      latitude: 37.773972,
      longitude: -122.431297,
    },
    {
      id: 3,
      latitude: 36.114647,
      longitude: -115.172813,
    },
  ];

  useEffect(() => {
    const selectedPlaceId: string = history.location.hash.replace("#place", "");
    if (selectedPlaceId) {
      handleSelectedPlaceChange(parseInt(selectedPlaceId));
      return;
    }
    onUpdateSelectedPlace(places[0]);
  }, []);

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
        storyContentItems={storyContentList.storyContentItems}
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
