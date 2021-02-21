import React from "react";

import StoryContentItem from "./StoryContentItem";

export default {
  component: StoryContentItem,
  title: "StoryContentItem",
};

const Template = (args: any) => <StoryContentItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  title: "test",
  description: "test test",
  handleSelectedPlaceChange: (id: number) => {
    console.log("story item clicked");
  },
};
