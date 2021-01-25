import React, { FunctionComponent } from "react";
import Header from "./Header";
import { Dispatch } from "redux";
import { Action, AppState, HeaderContainerProps } from "../../types";
import { updateTitle } from "../../redux/actions/header";
import { connect } from "react-redux";

const HeaderContainer: FunctionComponent<HeaderContainerProps> = (props) => {
  return <Header {...props.headerProps}></Header>;
};

export const mapStateToProps = (state: AppState) => ({
  headerProps: state.headerState,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onUpdateTitle: (title: string) => dispatch(updateTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
