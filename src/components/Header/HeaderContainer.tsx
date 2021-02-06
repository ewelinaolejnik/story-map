import React, { FunctionComponent, useEffect } from "react";
import Header from "./Header";
import { Dispatch } from "redux";
import { Action, AppState, HeaderContainerProps } from "../../types";
import { getHeader } from "../../redux/actions/header";
import { connect } from "react-redux";

const HeaderContainer: FunctionComponent<HeaderContainerProps> = (props) => {
  useEffect(() => {
    props.onGetHeader();
  }, []);

  return <Header {...props.headerProps}></Header>;
};

export const mapStateToProps = (state: AppState) => ({
  headerProps: state.headerState,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onGetHeader: () => dispatch(getHeader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
