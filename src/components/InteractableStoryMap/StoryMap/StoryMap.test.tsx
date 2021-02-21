import React from "react";
import { shallow } from "enzyme";
import { IStoryMapProps } from "../../../types";
import StoryMap from "./StoryMap";
import { Map as LeafletMap } from "leaflet";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";

describe("<StoryMap/>", () => {
  let storyMap: any;
  let props: IStoryMapProps;

  beforeEach(() => {
    props = {
      places: [
        { id: 1, latitude: 15, longitude: 16 },
        { id: 2, latitude: 15, longitude: 17 },
      ],
      zoom: 12,
      selectedPlace: null,
      setMap: (map: LeafletMap) => {
        return map;
      },
      handleSelectedPlaceChange: (id: number) => {
        return;
      },
    };
    storyMap = shallow(<StoryMap {...props} />);
  });

  it("returns null if selectedPlace is null", () => {
    expect(storyMap.html()).toEqual(null);
  });

  it("contains MapContainer if selectedPlace is not null", () => {
    storyMap.setProps({
      selectedPlace: { id: 1, latitude: 15, longitude: 16 },
    });
    expect(storyMap.find(MapContainer)).toHaveLength(1);
  });

  it("contains TileLayer if selectedPlace is not null", () => {
    storyMap.setProps({
      selectedPlace: { id: 1, latitude: 15, longitude: 16 },
    });
    expect(storyMap.find(TileLayer)).toHaveLength(1);
  });

  it("contains as many Marker components as passed array if selectedPlace is not null", () => {
    storyMap.setProps({
      selectedPlace: { id: 1, latitude: 15, longitude: 16 },
    });
    expect(storyMap.find(Marker)).toHaveLength(props.places.length);
  });

  it("contains one Polyline components per two places if selectedPlace is not null", () => {
    storyMap.setProps({
      selectedPlace: { id: 1, latitude: 15, longitude: 16 },
    });
    expect(storyMap.find(Polyline)).toHaveLength(props.places.length - 1);
  });
});
