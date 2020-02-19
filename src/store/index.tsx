/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */

import { 
  applyMiddleware, 
  combineReducers, 
  createStore, 
  Store,
  Dispatch,
  Action,
  AnyAction 
} from 'redux';

/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';

import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import  { homeReducer, IHomeState } from '../containers/home/reducer';
import { aboutReducer, IAboutState } from '../containers/about/reducer';

// Create an interface for the application state
export interface IAppState {
  homeState: IHomeState,
  aboutState:IAboutState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  homeState: homeReducer,
  aboutState:aboutReducer
});

const middleware = [thunk];

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {

  // type DispatchFunctionType = ThunkDispatch<StateType, undefined, AnyAction>
  
  const store = createStore(
    rootReducer, 
    undefined, 
    composeWithDevTools(applyMiddleware(...middleware,logger))
  );

  // const store = createStore(
  //   rootReducer, 
  //   undefined, 
  //   applyMiddleware(thunk as ThunkMiddleware<IAppState, AnyAction>)
  // );

  return store;
}

// // Additional props for connected React components. This prop is passed by default with `connect()`
// export interface ConnectedReduxProps<S> {
//   // Correct types for the `dispatch` prop passed by `react-redux`.
//   // Additional type information is given through generics.
//   dispatch: Dispatch<S>;
// }

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface IConnectedReduxProps<A extends Action = AnyAction> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<A>
}
