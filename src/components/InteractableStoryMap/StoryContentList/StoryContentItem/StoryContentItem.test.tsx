import React from "react";
import { shallow } from "enzyme";

import StoryContentItem, { StyledDesc, StyledTitle } from "./StoryContentItem";
import { IStoryContentItemProps } from "../../../../types";

describe("<StoryContentItem/>", () => {
  let storyContentItem: any;
  let props: IStoryContentItemProps;

  beforeEach(() => {
    props = {
      id: 1,
      title: "test",
      description: "test desc",
      handleSelectedPlaceChange: () => {
        return;
      },
    };
    storyContentItem = shallow(<StoryContentItem {...props} />);
  });

  it("contains passed title with the element with id that equals 'place' + 'id'", () => {
    expect(
      storyContentItem.contains(
        <StyledTitle id="place1">
          <p>test</p>
        </StyledTitle>,
      ),
    ).toEqual(true);
  });

  it("contains passed description", () => {
    expect(
      storyContentItem.contains(<StyledDesc>test desc</StyledDesc>),
    ).toEqual(true);
  });
});
