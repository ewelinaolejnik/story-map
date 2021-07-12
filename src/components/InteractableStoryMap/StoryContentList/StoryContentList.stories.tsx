import React from "react";

import StoryContentList from "./StoryContentList";

export default {
  component: StoryContentList,
  title: "StoryContentList",
};

const Template = (args: any) => <StoryContentList {...args} />;

export const Default = Template.bind({});
(Default as any).args = {
  storyContentItems: [
    {
      id: 1,
      title: "test",
      description: "test test",
    },
    {
      id: 2,
      title: "test2",
      description: "test test2",
    },
    {
      id: 3,
      title: "test3",
      description: "test test",
    },
    {
      id: 4,
      title: "test4",
      description: "test test2",
    },
  ],
  handleSelectedPlaceChange: (id: number) => {
    console.log("story item clicked");
  },
};
