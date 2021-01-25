import { FunctionComponent } from "react";
import styled from "styled-components";
import { IStoryContentItem, IStoryContentListProps } from "../../../types";
import StoryContentItem from "./StoryContentItem/StoryContentItem";

const StyledStoryContentList = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 30vw;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 100vw;
    overflow-x: auto;
    height: 30%;
  }
`;

const StoryContentList: FunctionComponent<IStoryContentListProps> = ({
  storyContentItems,
  handleSelectedPlaceChange,
}) => {
  return (
    <StyledStoryContentList>
      {storyContentItems.map((storyContentItem: IStoryContentItem) => (
        <StoryContentItem
          key={storyContentItem.id}
          id={storyContentItem.id}
          title={storyContentItem.title}
          description={storyContentItem.description}
          handleSelectedPlaceChange={handleSelectedPlaceChange}
        />
      ))}
    </StyledStoryContentList>
  );
};

export default StoryContentList;
