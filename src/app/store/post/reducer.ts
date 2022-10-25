import {Reducer} from "redux";
import {Post, PostActionTypes, PostsState} from "./types";

export const initialState: PostsState = {
	posts: [{0: null}],
	errors: undefined,
	loading: false
};


const reducer: Reducer<PostsState> = (state = initialState, action) => {
	switch (action.type) {

		case PostActionTypes.FETCH_REQUEST: {
			return {...state, loading: true};
		}
		case PostActionTypes.FETCH_SUCCESS: {
			let data:Array<number> = action.payload;
			let map: {[p: number]: null}[] = data.map((id) => ({[id]:null}))
			return {...state, loading: false, posts: map};
		}
		case PostActionTypes.FETCH_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}
		case PostActionTypes.FETCH_POST: {
			debugger;
			const newPosts = state.posts.map((post) => {
				const id:string = Object.keys(post)[0];
				return(
				id === action.payload.id.toString()
					? { [id]:action.payload}
					: post
			)});
			return {...state, loading: false, posts: newPosts};
		}
		case PostActionTypes.FETCH_POST_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}

		default: {
			return state;
		}
	}
};


export {reducer as PostsReducer};