import { Reducer } from "redux";
import { PostActionTypes, PostState } from "./types";

export const initialState: PostState = {
	data: [],
	errors: undefined,
	loading: false
};

const reducer: Reducer<PostState> = (state = initialState, action) => {
	switch (action.type) {
		case PostActionTypes.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case PostActionTypes.FETCH_SUCCESS: {
			console.log("action payload", action.payload);
			return { ...state, loading: false, data: action.payload };
		}
		case PostActionTypes.FETCH_ERROR: {
			return { ...state, loading: false, errors: action.payload };
		}
		default: {
			return state;
		}
	}
};

export { reducer as PostReducer };
