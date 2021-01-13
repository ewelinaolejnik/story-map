import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import StoryContentList from "./StoryContentList/StoryContentList";
import StoryMap, { IPlace } from "./StoryMap/StoryMap";
import { Map as LeafletMap } from "leaflet";

const StyledInteractableStoryMap = styled.main`
  display: flex;
  height: 93vh;
`;

const InteractableStoryMap: FunctionComponent<any> = (props) => {
  const [selectedPlace, setSelectedPlace] = useState<IPlace | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(13);
  const [map, setMap] = useState<LeafletMap | null>(null);
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
    setSelectedPlace(places[0]);
  }, []);

  const handleSelectedPlaceChange = (id: number) => {
    setMapZoom(13);
    const selectedPlace: IPlace | undefined = places.find(
      (place: IPlace) => place.id === id,
    );
    if (selectedPlace) {
      map?.setView(
        { lat: selectedPlace?.latitude, lng: selectedPlace?.longitude },
        mapZoom,
      );
      setSelectedPlace(selectedPlace);
    }
  };

  return (
    <StyledInteractableStoryMap>
      <StoryMap
        selectedPlace={selectedPlace}
        places={places}
        zoom={mapZoom}
        setMap={setMap}
      ></StoryMap>
      <StoryContentList
        storyContentItems={storyContentList.storyContentItems}
        handleSelectedPlaceChange={handleSelectedPlaceChange}
      ></StoryContentList>
    </StyledInteractableStoryMap>
  );
};

export default InteractableStoryMap;
