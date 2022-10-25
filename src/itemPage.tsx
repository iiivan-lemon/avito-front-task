import React, {useLayoutEffect} from 'react';
import logo from './logo.svg';
//import {Counter} from './features/counter/Counter';
import './Main.css';
import {useHistory, useParams} from "react-router-dom";
import Item from "./components/item";
import Refresh from "./components/refresh";
import Header from "./components/header";
import { createBrowserHistory } from 'history';
import {ApplicationState} from "./app/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchPost, fetchRequest} from "./app/store/post/action";
import {connect} from "react-redux";
import {Post} from "./app/store/post/types";
const history = createBrowserHistory();


const ItemPage: React.FC<any> = (props)=> {
	const params = useParams();
	useLayoutEffect(() => {
		props.fetchPost(Number(params.id))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	console.log('item',props)
const post = props.posts.find((el: { id: number; }) => el.id.toString() === params.id)

	return (
		<div>
			<Header/>
			<Item postData={post?.post} postId={post?.id} key={post?.id}/>
		</div>
	);
}
const mapStateToProps = ({posts}: ApplicationState) => {
	return ({
		loading: posts.loading,
		errors: posts.errors,
		posts: posts.posts
	})};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchPost: (item: string) => dispatch(fetchPost(item))
	};

};
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
