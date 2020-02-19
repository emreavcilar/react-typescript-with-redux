import { IPerson } from "./types";
import { IPostListItem } from "../home/types";

// Create Action Constants
export enum AboutActionTypes {
    GET_PERSON_DETAIL_DATA = "GET_PERSON_DETAIL_DATA", 
    GET_POSTS_DATA_BY_USER_ID = "GET_POSTS_DATA_BY_USER_ID" 
}

// Interface for Get People Detail Action Type
export interface IGetPeopleDetailAction {
    type: typeof AboutActionTypes.GET_PERSON_DETAIL_DATA,
    payload: IPerson
}

// Interface for Get Posts of user Action Type
export interface IGetPostsByUserIdAction {
    type: typeof AboutActionTypes.GET_POSTS_DATA_BY_USER_ID,
    payload: IPostListItem[]
}

/* 
Combine the action types with a union (we assume there are more)
example: export type HomeActions = IGetPeopleListAction | IGetOneAction ... 
*/
export type AboutActions = IGetPeopleDetailAction | IGetPostsByUserIdAction
