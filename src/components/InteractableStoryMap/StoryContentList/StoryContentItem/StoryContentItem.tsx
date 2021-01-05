import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IStoryContentItemProps {
  id: number;
  title: string;
  description: string;
}

const StyledStoryContentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid #cc5565;
  background-color: whitesmoke;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const StyledDesc = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 400;
  padding: 0px 10px 10px;
`;

const StoryContentItem: FunctionComponent<IStoryContentItemProps> = ({
  title,
  description,
}) => {
  return (
    <StyledStoryContentItem>
      <StyledTitle>
        <p>{title}</p>
      </StyledTitle>
      <StyledDesc>{description}</StyledDesc>
    </StyledStoryContentItem>
  );
};

export default StoryContentItem;
