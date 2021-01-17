import React, { FunctionComponent } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export interface IStoryContentItemProps {
  id: number;
  title: string;
  description: string;
  handleSelectedPlaceChange: (id: number) => void;
}

const StyledStoryContentItem = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid #cc5565;
  background-color: whitesmoke;
  color: black;
  cursor: pointer;
  text-decoration: none;
  &:active {
    color: black;
  }
  &:hover {
    color: black;
  }
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
  id,
  title,
  description,
  handleSelectedPlaceChange,
}) => {
  const handleStoryItemClick = (event: any) => {
    handleSelectedPlaceChange(id);
  };
  return (
    <StyledStoryContentItem
      smooth
      to={"#place" + id.toString()}
      onClick={handleStoryItemClick}
    >
      <StyledTitle id={"place" + id.toString()}>
        <p>{title}</p>
      </StyledTitle>
      <StyledDesc>{description}</StyledDesc>
    </StyledStoryContentItem>
  );
};

export default StoryContentItem;
