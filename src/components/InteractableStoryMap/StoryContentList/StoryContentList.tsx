import { FunctionComponent } from "react";
import styled from "styled-components";
import StoryContentItem from "./StoryContentItem/StoryContentItem";

export interface IStoryContentItem {
  id: number;
  title: string;
  description: string;
}
export interface IStoryContentListProps {
  storyContentItems: IStoryContentItem[];
  handleSelectedPlaceChange: (id: number) => void;
}

const StyledStoryContentList = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 30vw;
  overflow-y: auto;
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
