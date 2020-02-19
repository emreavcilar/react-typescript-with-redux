// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Home Typing
import { IAboutState } from './reducer';   
import { AboutActionTypes, IGetPeopleDetailAction, IGetPostsByUserIdAction } from './actionTypes';

  /* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllPostsByUserId: ActionCreator<
ThunkAction<Promise<any>, IAboutState, {}, IGetPostsByUserIdAction>
> = (userId) => {
return async (dispatch: Dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
      .then((res)=>{
        console.log('res ', res)

        if(res.status === 200 && res.data){
            dispatch({
              payload: res.data,
              type: AboutActionTypes.GET_POSTS_DATA_BY_USER_ID,
            });
        }    
      })
      .catch((err)=>{
        console.log('getAllPostsByUserId err >> ' , err)
      })
}};

export const getUserDetailData: ActionCreator<
ThunkAction<Promise<any>, IAboutState, {}, IGetPeopleDetailAction>
> = (userId) => {
return async (dispatch: Dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
      .then((res)=>{
        console.log('res ', res)

        if(res.status === 200 && res.data){
            dispatch({
              payload: res.data,
              type: AboutActionTypes.GET_PERSON_DETAIL_DATA,
            });
        }    
      })
      .catch((err)=>{
        console.log('getUserDetailData err >> ' , err)
      })
}};