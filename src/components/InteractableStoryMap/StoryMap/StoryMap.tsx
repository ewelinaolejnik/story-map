import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledStoryMap = styled.main`
  display: flex;
  justify-content: stretch;
  align-content: stretch;
  width: 70vw;
`;

const StoryMap: FunctionComponent<any> = (props) => {
  return <StyledStoryMap></StyledStoryMap>;
};

export default StoryMap;
