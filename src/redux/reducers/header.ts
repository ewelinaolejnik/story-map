import {
  Action,
  ActionGetHeaderSuccess,
  HeaderActions,
  HeaderState,
} from "../../types";

const initialState: HeaderState = {
  title: "",
};

const headerReducer = (state: HeaderState = initialState, action: Action) => {
  switch (action.type) {
    case HeaderActions.FETCH_TITLE_SUCCESS:
      return { ...state, title: (action as ActionGetHeaderSuccess).title };
    case HeaderActions.GET_HEADER:
      return { ...state };
    default:
      return state;
  }
};

export default headerReducer;
