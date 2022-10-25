import * as React from "react";
import './item.css'
import {useHistory} from "react-router-dom";
import {Post} from "../app/store/post/types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

import {connect} from "react-redux";
import {ApplicationState} from "../app/store";
import {FC, useEffect, useLayoutEffect} from "react";
import {useAppDispatch} from "../app/hooks";
import {fetchPost} from "../app/store/post/action";
// import {useHistory} from "react-router";
// import {useAppDispatch, useAppSelector} from "../app/hooks";
// import {initState} from "../app/store/modules/posts/reducer/postsReducer";
// import {fetchPost} from "../app/store/modules/posts/actions/postsAction";
// import {useEffect} from "react";
//
//
// const mockDataItem: Object ={
// 	by: "midspectrum",
// 	descendants: 4,
// 	id: 33271540,
// 	kids: [33278567, 33271694],
// 	score: 2,
// 	text: "What&#x27;s the best strategy to focus on in early days for developer tools &amp; Cloud Saas to build a sustainable business",
// 	time: 1666247954,
// 	title: "Product-led or Content-led or Community-led growth. Which is best for Dev-Tool?",
// 	type: "story",
// 	//comments: [{text:"wow"},{text:'great!'}]
// }
//
//
interface propsFromComponent {
	postId: number;
}

interface PropsFromState {
	post: Post
}


interface propsFromDispatch {
	fetchPost: (item: number) => Post;
}

// type Props = propsFromComponent & PropsFromState;
const Item: React.FC<any> = (props) => {
	// const getPostData = () => {
	// 	return fetchPost(postId);
	// };

	// const dispatch = useAppDispatch();
	// 	console.log(dispatch(fetchPost(postId)))
	useLayoutEffect(() => {
		props.fetchPost(props.postId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	let history = useHistory();

	function handleClick() {
		history.push(`/${props.postId}`);
		// запрос на инфу новости
	}

	//
	// const listData = [];
	//
	//
	//
	// const dispatch = useAppDispatch();
	// const singlePost = (id:string) => dispatch(fetchPost(id));
	// const postSelector: any  = useAppSelector((state) => state);
	//
	// const postData = postSelector.PostsState.post;
	// console.log(postData);
	//
	//
	// useEffect(() => {
	// 	singlePost(post.post);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])
	//
	let data = props.postData;
	//
	// console.log(data)
	const allowed = ['by', 'time', 'score','title'];
	if (history.location.pathname === '/' && data) {
		data = Object.keys(data)
			.filter(key => allowed.includes(key))
			.reduce((obj, key) => {
				(obj as any)[key] = (data as any)[key];
				return obj;
			}, {});

	}
	const listData = [];

	for (const prop in data) {

		if (prop !== "title" && prop !== "url") {
			listData.push(<span>{prop}: {(data as any)[prop]?.toString()}</span>)
		} else if (prop === "url"){
			listData.push(<a href={(data as any)[prop]?.toString()}>{(data as any)[prop]?.toString()}</a>)
		}


	}

//
	debugger;
	return (
		<div className={'item'} onClick={handleClick}>
			{/*<div className={'item'}>*/}
			{/*  <span className={'title'}>{props.postData[0]?.title}</span>*/}
			<span className={'title'}>{(data as any)?.title?.toString()}</span>
			<div className={'item-data'}>{listData}</div>
		</div>
	);

}
const mapStateToProps = ({posts}: ApplicationState) => {
	//console.log(111,post);
	return ({
		posts: posts.posts
	})
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchPost: (item: string) => dispatch(fetchPost(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);