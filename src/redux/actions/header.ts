import { Action, ActionGetHeaderSuccess, HeaderActions } from "../../types";

export const getTitleSuccess = (title: string): ActionGetHeaderSuccess => ({
  type: HeaderActions.FETCH_TITLE_SUCCESS,
  title,
});

export const getHeader = (): Action => ({
  type: HeaderActions.GET_HEADER,
});
