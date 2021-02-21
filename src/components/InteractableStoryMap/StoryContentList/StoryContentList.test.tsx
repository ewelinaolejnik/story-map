import React from "react";
import { shallow } from "enzyme";

import StoryContentList from "./StoryContentList";
import { IStoryContentListProps } from "../../../types";
import StoryContentItem from "./StoryContentItem/StoryContentItem";

describe("<StoryContentList/>", () => {
  let storyContentList: any;
  let props: IStoryContentListProps;

  beforeEach(() => {
    props = {
      storyContentItems: [
        { id: 1, title: "test", description: "test desc" },
        { id: 2, title: "test2", description: "test2 desc" },
      ],
      handleSelectedPlaceChange: (id: number) => {
        return;
      },
    };
    storyContentList = shallow(<StoryContentList {...props} />);
  });

  it("contains as many StoryContentItem components as passed array", () => {
    expect(storyContentList.find(StoryContentItem)).toHaveLength(
      props.storyContentItems.length,
    );
  });

  it("does not contain StoryContentItem if the passed array is empty", () => {
    storyContentList.setProps({ storyContentItems: [] });
    expect(storyContentList.find(StoryContentItem)).toHaveLength(0);
  });
});
