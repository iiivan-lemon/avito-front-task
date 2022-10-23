export interface Post {
	"by": string,
	"descendants": number,
	"id": number,
	"kids": Array<number>,
	"score": number,
	"time": number,
	"title": string,
	"type": string,
	"url": string
}


export enum PostActionTypes {
	FETCH_REQUEST = "@@post/FETCH_REQUEST",
	FETCH_SUCCESS = "@@post/FETCH_SUCCESS",
	FETCH_ERROR = "@@post/FETCH_ERROR",
	FETCH_POST = "@@cart/FETCH_POST",
	FETCH_POST_ERROR = "@@cart/FETCH_POST_ERROR",
}

export interface PostsIdState {
	readonly loading: boolean;
	readonly data: [];
	readonly errors?: string;
}

export interface PostState {
	readonly loading: boolean;
	readonly data: Post;
	readonly errors?: string;
}
