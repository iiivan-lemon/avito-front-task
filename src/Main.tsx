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
	errors?: string;
	posts: {[key:number]:Post|null}[];
}


interface propsFromDispatch {
	fetchRequestAuto: () => any;
	fetchRequestHand: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const Main: React.FC<AllProps> = ({
	                                  loading,
	                                  errors,
	                                  posts,
	                                  fetchRequestAuto,
	                                  fetchRequestHand

                                  }) => {

	useEffect(() => {
		fetchRequestAuto();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	let listData = posts.map((post) => <Item postData={Object.values(post)} postId={Object.keys(post)[0]} key={Object.keys(post)[0]}/>)
	return (
		<div>
			<Header refresh={fetchRequestHand} />
			{listData}
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
		fetchRequestAuto: function foo() {
			dispatch(fetchRequest());
			setInterval(foo, 60000)
		},
		fetchRequestHand: () => dispatch(fetchRequest())

	}

};


export default connect(mapStateToProps, mapDispatchToProps)(Main);