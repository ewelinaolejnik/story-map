import {
  Action,
  ActionUpdateHeader,
  HeaderActions,
  HeaderState,
} from "../../types";

const initialState: HeaderState = {
  title: "",
};

const headerReducer = (state: HeaderState = initialState, action: Action) => {
  switch (action.type) {
    case HeaderActions.UPDATE_TITLE:
      return { ...state, title: (action as ActionUpdateHeader).title };
    default:
      return state;
  }
};

export default headerReducer;
