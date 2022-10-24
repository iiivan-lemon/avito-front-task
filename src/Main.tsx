import React, {useEffect} from 'react';
import './Main.css';
import Item from "./components/item";
import Header from "./components/header";
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {ApplicationState} from "./app/store";
import {fetchRequest} from "./app/store/post/action";
import {Post} from "./app/store/post/types";

interface PropsFromState {
	loading: boolean;
	data: [];
	errors?: string;
	post: Post
}


interface propsFromDispatch {
	fetchRequestAuto: () => any;
	fetchRequestHand: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const Main: React.FC<AllProps> = ({
	                                  loading,
	                                  errors,
	                                  data,
	                                  post,
	                                  fetchRequestAuto,
	                                  fetchRequestHand

                                  }) => {

	useEffect(() => {
		fetchRequestAuto();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	let listData = data.map(postId => <Item postId={postId}/>)
	return (
		<div>
			<Header refresh={fetchRequestHand} />
			{listData}
		</div>
	);
}

const mapStateToProps = ({post}: ApplicationState) => ({
	loading: post.loading,
	errors: post.errors,
	data: post.data,
	post: post.post
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchRequestAuto: function foo() {
			dispatch(fetchRequest());
			setInterval(foo, 60000)
		},
		fetchRequestHand: () => dispatch(fetchRequest())

	}

};


export default connect(mapStateToProps, mapDispatchToProps)(Main);