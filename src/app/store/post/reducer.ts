import {Reducer} from "redux";
import {Post, PostActionTypes, PostsState} from "./types";

export const initialState: PostsState = {
	posts: [{id: 0, post: null}],
	errors: undefined,
	loading: false
};


// @ts-ignore
const reducer: Reducer<PostsState> = (state = initialState, action) => {
	switch (action.type) {
		case PostActionTypes.FETCH_REQUEST: {
			return {...state, loading: true};
		}
		case PostActionTypes.FETCH_SUCCESS: {
			let data: Array<number> = action.payload;
			let map = data.map((id) => {
				const el = state.posts.find(el => el.id === id);
				return (!el) ? ({id: id, post: null}) : ({id: id, post: el.post})
			})
			return {...state, loading: false, posts: map};
		}
		case PostActionTypes.FETCH_ERROR: {
			return {...state, loading: false, errors: action.payload};
		}
		case PostActionTypes.FETCH_POST: {
			debugger;
			const newPosts = state.posts.map((post) => {
				const id: number = post.id;
				if (id === 0) {
					return {id: action.payload.id, post: action.payload}
				}
				return (
					id === action.payload.id
						? {id: action.payload.id, post: action.payload}
						: post
				)
			});
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