import { IPostListItem } from "./types";

// Create Action Constants
export enum HomeActionTypes {
    GET_POST_LIST_DATA = "GET_POST_LIST_DATA",  
}

// Interface for Get People List Action Type
export interface IGetPostListAction {
    type: typeof HomeActionTypes.GET_POST_LIST_DATA,
    payload: IPostListItem []
}

/* 
Combine the action types with a union (we assume there are more)
example: export type HomeActions = IGetPeopleListAction | IGetOneAction ... 
*/
export type HomeActions = IGetPostListAction
