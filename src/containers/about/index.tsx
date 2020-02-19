import React from 'react';
import { connect } from 'react-redux';
import { IAppState, IConnectedReduxProps } from '../../store';
import { getAllPostsByUserId,getUserDetailData } from './actions';
import { match } from 'react-router-dom';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AboutActions } from './actionTypes';
import { IAboutState } from './reducer';
import { IPostListItem } from '../home/types';
import { IPerson } from './types';

interface IDetailParams{
    userId:string
}

interface IProps {
    postsOfUserData:IPostListItem[],
    personDetailData: IPerson,
    match: match<IDetailParams>,
}

interface IState {
    title?:string,
    matchParamsUserId:string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface IPropsFromDispatch {
    fetchPostsByUser: typeof getAllPostsByUserId,
    fetchUserDetailData : typeof getUserDetailData
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = IProps & IPropsFromDispatch & IConnectedReduxProps;

class About extends React.Component<AllProps, IState> {
    constructor(props: AllProps) {
        super(props);
        console.log('About page props ', props);

        this.state = {
            title : "ABOUT PAGE",
            matchParamsUserId:props.match.params.userId
        }

        // props.fetchPostsByUser(this.state.matchParamsUserId);
        props.fetchUserDetailData(this.state.matchParamsUserId);
    }

    render(): JSX.Element | null {
        const { postsOfUserData, personDetailData, fetchPostsByUser } = this.props;
        return (
            <section>
                <h1>{this.state.title}</h1>

                {personDetailData && 
                <div>
                    <p>id >> {personDetailData.id}</p>
                    <p>name >> {personDetailData.name}</p>
                    <p>username >> {personDetailData.username}</p>
                    <p>email >> {personDetailData.email}</p>
                    <p>address >> 
                        {personDetailData.address?.street} 
                        {personDetailData.address?.suite}
                        {personDetailData.address?.city}
                        {personDetailData.address?.zipcode}
                    </p>
                    <p> lat lng
                        {personDetailData.address?.geo?.lat}
                        {personDetailData.address?.geo?.lng}
                    </p>
                    <p>phone >> {personDetailData.phone}</p>
                    <p>website >> {personDetailData.website}</p>
                    <p>company >> 
                        {personDetailData.company?.name}<br />
                        {personDetailData.company?.catchPhrase}<br />
                        {personDetailData.company?.bs}<br />
                    
                    </p>

                    <button 
                        onClick={()=>{fetchPostsByUser(this.state.matchParamsUserId)}}
                        type="button"
                    >
                        GET POSTS OF THIS USER  >> 
                    </button>
                </div>
                }

                {postsOfUserData && 
                <>
                    {postsOfUserData.map((postItem:IPostListItem,i:number)=>(
                    <div key={i}>
                        <div>
                            <div>post ID : {postItem.id}</div>
                            <div>user ID  : {postItem.userId}</div>
                            <div>post title : {postItem.title}</div>
                            <div>post body : {postItem.body}</div>
                            
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

const mapStateToProps = (store : IAppState) => {
    return {
        postsOfUserData: store.aboutState.postsOfUserData,
        personDetailData: store.aboutState.personDetailData
    }
}

const mapDispatchToProps = (
    dispatch: ActionCreator<
    ThunkAction<Promise<any>, IAboutState, {}, AboutActions>
    >
  ) => {
    return {
        fetchPostsByUser: (arg: string) => dispatch(getAllPostsByUserId(arg)),
        fetchUserDetailData : (arg:string) => dispatch(getUserDetailData(arg))
    };
  };


export default connect(mapStateToProps,mapDispatchToProps)(About);