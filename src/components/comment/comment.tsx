import React, {useLayoutEffect} from 'react';
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect} from "react-redux";
import {ApplicationState} from "../../app/store";
import {fetchComment} from "../../app/store/comments/action";
import '../item/item.css'

const Comments: React.FC<any> = (props)=> {

	useLayoutEffect(() => {
		props.fetchComment(props.commentId)
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},[])
	const listCom =[];

			for (const prop in props.commentData) {
				switch (prop) {
					case 'by':
						listCom.push(<span>@{props.commentData[prop]?.toString()}</span>)
						break;
					case 'text':
						listCom.push(<span> {props.commentData[prop]?.toString()}</span>);
						break;
					case 'time':
						listCom.push(<span>{(new Date(props.commentData[prop] * 1000)).toLocaleString()}</span>)
						break;
				}

			}
	return (
		<>
		<div className={'comment-data'}>
			{listCom}
		</div>
		</>
	);
}
const mapStateToProps = ({comments}: ApplicationState) => {
	return ({
		comments: comments.comments
	})};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {

	return {
		fetchComment: (item: string) => dispatch(fetchComment(item))
	};

};
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
