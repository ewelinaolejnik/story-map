import { FunctionComponent } from "react";
import styled from "styled-components";
import HeaderContainer from "../Header/HeaderContainer";
import InteractableStoryMap from "../InteractableStoryMap/InteractableStoryMap";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Layout: FunctionComponent<any> = (props) => {
  return (
    <StyledLayout>
      <HeaderContainer></HeaderContainer>
      <InteractableStoryMap></InteractableStoryMap>
    </StyledLayout>
  );
};

export default Layout;
