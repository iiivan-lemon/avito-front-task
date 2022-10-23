import React, {useEffect} from 'react';
import './Main.css';
import Item from "./components/item";
import Header from "./components/header";
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {ApplicationState} from "./app/store";
import {fetchRequest} from "./app/store/post/action";

interface PropsFromState {
	loading: boolean;
	data: [];
	errors?: string;
}

interface propsFromDispatch {
	fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const Main: React.FC<AllProps> = ({
	                                  loading,
	                                  errors,
	                                  data,
	                                  fetchRequest
                                  }) => {

	useEffect(() => {
		fetchRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	let listData = data.map(postId => <Item postId={postId}/>)

	return (
		<div>
			<Header/>
			{listData}
		</div>
	);
}

const mapStateToProps = ({post}: ApplicationState) => ({
	loading: post.loading,
	errors: post.errors,
	data: post.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchRequest: () => {
			dispatch(fetchRequest());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);