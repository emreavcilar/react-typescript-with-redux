import { Reducer } from "redux";
import { HomeActions, HomeActionTypes } from "./actionTypes";
import { IPostListItem } from "./types";

export interface IHomeState {
  readonly postListData: IPostListItem[]; //post item array
}
// Define the initial state
const initialHomeState: IHomeState = {
  postListData: []
};

export const homeReducer: Reducer<IHomeState, HomeActions> = (
  state = initialHomeState,
  action
) => {
  switch (action.type) {
    case HomeActionTypes.GET_POST_LIST_DATA: {
      return {
        ...state,
        postListData: action.payload
      };
    }
    default:
      return state;
  }
};
