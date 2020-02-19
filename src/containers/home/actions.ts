// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Home Typing
import { IHomeState } from './reducer';
import { HomeActionTypes, IGetPostListAction } from './actionTypes';

  /* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

export const getPostListData: ActionCreator<
ThunkAction<Promise<any>, IHomeState, {}, IGetPostListAction>
> = () => {
return async (dispatch: Dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        console.log('res ', res)

        if(res.status === 200 && res.data){
            dispatch({
              payload: res.data,
              type: HomeActionTypes.GET_POST_LIST_DATA,
            });
        }    
      })
      .catch((err)=>{
        console.log('getPostListData err >> ' , err)
      })
}};