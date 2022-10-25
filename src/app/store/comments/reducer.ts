import {Reducer} from "redux";
import {CommentsState, PostActionTypes} from "./types";

export const initialState: CommentsState = {
	comments: [{id:0,idParent:0,post:null},],
	errors: undefined,
	loading: false
};


// @ts-ignore
const reducer: Reducer<CommentsState> = (state = initialState, action) => {
	switch (action.type) {
		case PostActionTypes.FETCH_REQUEST: {
			return {...state, loading: true};
		}
		case PostActionTypes.FETCH_SUCCESS: {
			return {...state, loading: false, posts: action.payload};
		}
		case PostActionTypes.FETCH_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}
		case PostActionTypes.FETCH_COMMENT: {
			debugger;
			if (state.comments[0]?.id === 0) {
				return { ...state, loading: false, comments: [action.payload]};
			}
			return {...state, loading: false, comments: [state.comments,action.payload]};
		}
		case PostActionTypes.FETCH_POST_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}

		default: {
			return state;
		}
	}
};


export {reducer as CommentsReducer};