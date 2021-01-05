import { FunctionComponent } from "react";
import styled from "styled-components";
import StoryContentItem, {
  IStoryContentItemProps,
} from "./StoryContentItem/StoryContentItem";

export interface IStoryContentListProps {
  storyContentItems: IStoryContentItemProps[];
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
}) => {
  return (
    <StyledStoryContentList>
      {storyContentItems.map((storyContentItem: IStoryContentItemProps) => (
        <StoryContentItem key={storyContentItem.id} {...storyContentItem} />
      ))}
    </StyledStoryContentList>
  );
};

export default StoryContentList;
