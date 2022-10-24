import { Reducer } from "redux";
import {PostActionTypes, PostsIdState, PostState} from "./types";

export const initialState: PostsIdState = {
	data: [],
	post: null,
	errors: undefined,
	loading: false
};



const reducer: Reducer<PostsIdState> = (state = initialState, action) => {
	switch (action.type) {

		case PostActionTypes.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case PostActionTypes.FETCH_SUCCESS: {
			return { ...state, loading: false, data: action.payload };
		}
		case PostActionTypes.FETCH_ERROR: {
			return { ...state, loading: false, errors: action.payload };
		}
		case PostActionTypes.FETCH_POST:{
			return { ...state, loading: false, post: action.payload };
		}
		case PostActionTypes.FETCH_POST_ERROR:{
			return { ...state, loading: false, errors: action.payload };
		}

		default: {
			return state;
		}
	}
};


export { reducer as PostsIdReducer };