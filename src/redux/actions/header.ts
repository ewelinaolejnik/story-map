import { ActionUpdateHeader, HeaderActions } from "../../types";

export const updateTitle = (title: string): ActionUpdateHeader => ({
  type: HeaderActions.UPDATE_TITLE,
  title,
});
