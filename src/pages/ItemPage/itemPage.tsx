import React, {useLayoutEffect} from 'react';
import '../MainPage/Main.css';
import {useParams} from "react-router-dom";
import Item from "../../components/item/item";
import Header from "../../components/header/header";
import {ApplicationState} from "../../app/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchPost} from "../../app/store/post/action";
import {connect} from "react-redux";


const ItemPage: React.FC<any> = (props)=> {
	const params = useParams();
	useLayoutEffect(() => {
		props.fetchPost(Number(params.id))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
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
