import React from "react";
import styled from "styled-components";
import { HeaderState } from "../../types";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-image: linear-gradient(#ce4154, #cc5565);
  height: 7vh;
  padding: 0px 20px;
`;

const StyledTitle = styled.p`
  line-height: 28px;
  color: whitesmoke;
  font-weight: 500;
  font-size: 28px;
`;

const Header: React.FunctionComponent<HeaderState> = (props) => {
  const titleElem = props.title ? <span>of {props.title}</span> : null;
  return (
    <StyledHeader>
      <StyledTitle>Story Map {titleElem}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
