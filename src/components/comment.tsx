import React, {useEffect, useLayoutEffect} from 'react';
import { createBrowserHistory } from 'history';
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect} from "react-redux";
import {fetchPost} from "../app/store/post/action";
import {ApplicationState} from "../app/store";
import {fetchComment} from "../app/store/comments/action";
import './item.css'
const history = createBrowserHistory();

const Comments: React.FC<any> = (props)=> {
	console.log("initCom",props)
	useEffect(() => {
		debugger;
			props.fetchComment(props.postId)
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},[])


	const listCom =[];
	debugger;
	props.comments.forEach((com: any) =>{

		for (const prop in com) {
		if(prop === "kids"){
			com[prop].forEach((id:number)=>{
				listCom.push(<Comments postId={id} fetchComment={props.fetchComment} comments={com[prop]}/>)
			})
		} else
			listCom.push(<span>{prop}: {com[prop]?.toString()}</span>)


	}})

	return (
		<div className={'item-data'}>
			{listCom}
		</div>
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
