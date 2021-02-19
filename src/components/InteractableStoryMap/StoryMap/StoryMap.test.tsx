import React from "react";
import { shallow } from "enzyme";
import { IStoryMapProps } from "../../../types";
import StoryMap from "./StoryMap";
import { Map as LeafletMap } from "leaflet";

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
});
