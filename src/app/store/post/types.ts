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
	FETCH_ERROR = "@@post/FETCH_ERROR"
}

export interface PostState {
	readonly loading: boolean;
	readonly data: [];
	readonly errors?: string;
}
