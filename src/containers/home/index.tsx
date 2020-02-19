import React from 'react';
import { connect } from 'react-redux';
import { IAppState, IConnectedReduxProps } from '../../store';
import { getPostListData } from './actions'
import { IPostListItem } from './types';
import { Link } from 'react-router-dom';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { HomeActions } from './actionTypes';
import { IHomeState } from './reducer';

interface IProps {
    postListData: IPostListItem[],
}

interface IState {
    title?:string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface IPropsFromDispatch {
    fetchRequest: typeof getPostListData,
    // fetchRequest: () => void
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = IProps & IPropsFromDispatch & IConnectedReduxProps;

// class Home extends React.Component<IProps, IState> {
class Home extends React.Component<AllProps,IState> {
    // constructor(props: IProps) {
    constructor(props: AllProps) {
        super(props);
        console.log('Home page ');
        console.log('props ', props);

        this.state = {
            title :'HOME PAGE'
        }

        props.fetchRequest()
    }
 
    render(): JSX.Element | null {
        const { postListData } = this.props;
        return (
            <section>
                <h1>{this.state.title}</h1>

                {postListData && 
                <>
                {postListData.map((postItem:IPostListItem,i:number)=>(
                    <div key={i}>
                        <div>
                            <div>post ID : {postItem.id}</div>
                            <div>user ID  : {postItem.userId}</div>
                            <div>post title : {postItem.title}</div>
                            <div>post body : {postItem.body}</div>
                            <Link to={"/about/" + postItem.userId}>Author Detail</Link>
                        </div>
                        <p>--------------------------------------</p>
                    </div>
                ))}
                </>
                }
            </section>
        );
    }
}

// // Grab the post list data from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
    return {
      postListData: store.homeState.postListData,
    };
  };

const mapDispatchToProps = (
    dispatch: ActionCreator<
    ThunkAction<Promise<any>, IHomeState, {}, HomeActions>
    >
  ) => {
    return {
      fetchRequest: (arg: string) => 
        dispatch(getPostListData(arg))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Home);   