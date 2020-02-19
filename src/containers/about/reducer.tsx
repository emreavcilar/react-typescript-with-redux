import { Reducer } from "redux";
import { AboutActions, AboutActionTypes } from "./actionTypes";
import { IPerson } from "./types";
import { IPostListItem } from "../home/types";

export interface IAboutState {
  readonly postsOfUserData: IPostListItem[],   //PostListItem array
  readonly personDetailData: IPerson    //persondetail data item 
}
// Define the initial state
const initialAboutState: IAboutState = {
  postsOfUserData: [],
  personDetailData: {}
};

export const aboutReducer: Reducer<IAboutState, AboutActions> = (
  state = initialAboutState,
  action
) => {
  switch (action.type) {
    case AboutActionTypes.GET_PERSON_DETAIL_DATA: {
      return {
        ...state,
        personDetailData: action.payload
      }
    }
    case AboutActionTypes.GET_POSTS_DATA_BY_USER_ID: {
      return {
        ...state,
        postsOfUserData: action.payload
      }
    }
    default:
      return state;
  }
};
