import * as React from "react";
import './item.css'
import {useHistory} from "react-router-dom";
import {Post} from "../app/store/post/types";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchPost, fetchRequest} from "../app/store/post/action";
import {connect} from "react-redux";
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
	item: PostID;
}

interface PostID {
	postId:number;
}

interface propsFromDispatch {
	fetchPost: (item: any) => any;
}

type Props = propsFromComponent & propsFromDispatch;
const Item : React.FC<Props> = ({ item, fetchPost }) => {
	// console.log(props.postId)
	const getPostData = (item: any) => {
		return fetchPost(item.postId);
	};
	console.log('getPostData',getPostData(item));
	let history = useHistory();
	function handleClick() {
		history.push(`/pages`);
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
	// let  data = postData;
	//
	// const allowed = ['by', 'time','score'];
	//
	//
	// 	if(history.location.pathname === '/'){
	// 		 data = Object.keys(data)
	// 			.filter(key => allowed.includes(key))
	// 			.reduce((obj, key) => {
	// 				(obj as any)[key] = (data as any)[key];
	// 				return obj;
	// 			}, {});
	//
	// 	}
	// for(const prop in data){
	// 	if(prop !== "title"){
	// 		listData.push(<span>{prop}: {(data as any)[prop].toString()}</span>)
	// 	}
	// }


		return (
			 <div className={'item'} onClick={handleClick}>
        {/*<div className={'item'}>*/}
	        <span className={'title'}>{item.postId}</span>
				{/*<span className={'title'}>{(data as any)['title']}</span>*/}
				<div className={'item-data'}>listData</div>
			</div>
		);

}
const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchPost: (item: number) => dispatch(fetchPost(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);