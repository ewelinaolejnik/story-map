import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";

export interface IPlace {
  id: number;
  latitude: number;
  longitude: number;
}

export interface IStoryMapProps {
  places: IPlace[];
  zoom: number;
  selectedPlace: IPlace | null;
  setMap: (map: LeafletMap) => void;
}

const StyledStoryMap = styled.main`
  display: flex;
  justify-content: stretch;
  align-content: stretch;
  width: 70vw;
`;

const StoryMap: FunctionComponent<IStoryMapProps> = ({
  selectedPlace,
  places,
  zoom,
  setMap,
}) => {
  return selectedPlace ? (
    <StyledStoryMap>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        zoom={zoom}
        center={[selectedPlace.latitude, selectedPlace.longitude]}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place: IPlace) => (
          <Marker
            key={"place " + place.id}
            position={[place.latitude, place.longitude]}
          ></Marker>
        ))}
        {places.map((place: IPlace, index) => {
          const nextPlace = places[index + 1];
          if (!nextPlace) return null;
          return (
            <Polyline
              key={"polyline " + place.id}
              positions={[
                [place.latitude, place.longitude],
                [nextPlace.latitude, nextPlace.longitude],
              ]}
            ></Polyline>
          );
        })}
      </MapContainer>
    </StyledStoryMap>
  ) : null;
};

export default StoryMap;
