import * as React from "react";
import './item.css'
import {useHistory} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect} from "react-redux";
import {ApplicationState} from "../../app/store";
import {useLayoutEffect} from "react";
import {fetchPost} from "../../app/store/post/action";
import Comments from "../comment/comment";
import {fetchComment} from "../../app/store/comments/action";

const Item: React.FC<any> = (props) => {
	useLayoutEffect(() => {
		props.fetchPost(props.postId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	let history = useHistory();

	function handleClick() {
		history.push(`/${props.postId}`);
	}

	let data = props.postData;
	const home = ['by', 'time', 'score','title'];
	const item = [...home,'url','text','kids','descendants'];
	if (history.location.pathname === '/' && data) {
		data = Object.keys(data)
			.filter(key => home.includes(key))
			.reduce((obj, key) => {
				(obj as any)[key] = (data as any)[key];
				return obj;
			}, {});

	}  else if (history.location.pathname !== '/' && data) {
		data = Object.keys(data)
			.filter(key => item.includes(key))
			.reduce((obj, key) => {
				(obj as any)[key] = (data as any)[key];
				return obj;
			}, {});

	}
	const listData = [];
let listCom: JSX.Element[] = [];
	for (const prop in data) {

		switch(prop){
			case 'by':
				listData.push(<span>@{(data as any)[prop]?.toString()}</span>)
				break;
			case 'url':
				listData.push(<a className={'link'} href={(data as any)[prop]?.toString()}>{(data as any)[prop]?.toString()}</a>)
				break;
			case ('kids'):
				listCom = data[prop].map((id:number) => <Comments commentData={props.comments[props.comments.length-1]} commentId={id} key={id+1}/>)
				break;
			case ('descendants'):
				listData.push(<span className={'comments-title'}>comments {(data as any)[prop]?.toString()}</span>)
				break;
			case 'time':
					listData.push(<span>{(new Date(data[prop] * 1000)).toLocaleString()}</span>)
				break;
			case 'text':
					listData.push(<span>{(data as any)[prop]?.toString()}</span>)
				break;
			default:
				if (prop !== "title" && prop !== 'descendants') {
					listData.push(<span>{prop}: {(data as any)[prop]?.toString()}</span>)
				}

		}

	}
	return (
		<div className={'item item-back'} onClick={handleClick}>
			<span className={'title'}>{(data as any)?.title?.toString()}</span>
			<div className={'item-data'}>{listData}</div>
			{listCom}
		</div>

	);

}
const mapStateToProps = ({posts,comments}: ApplicationState) => {
	return ({
		posts: posts.posts,
		comments: comments.comments
	})
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchPost: (item: string) => dispatch(fetchPost(item)),
		fetchComment: (item: string) => dispatch(fetchComment(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);