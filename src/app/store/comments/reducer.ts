import {Reducer} from "redux";
import {CommentsState, CommentActionTypes} from "./types";

export const initialState: CommentsState = {
	comments: [{id:0,idParent:0,post:null},],
	errors: undefined,
	loading: false
};


// @ts-ignore
const reducer: Reducer<CommentsState> = (state = initialState, action) => {
	switch (action.type) {
		case CommentActionTypes.FETCH_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}
		case CommentActionTypes.FETCH_COMMENT: {
			if (state.comments[0]?.id === 0) {
				return { ...state, loading: false, comments: [action.payload]};
			}
			return {...state, loading: false, comments: [...state.comments,action.payload]};
		}
		case CommentActionTypes.FETCH_POST_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}

		default: {
			return state;
		}
	}
};


export {reducer as CommentsReducer};