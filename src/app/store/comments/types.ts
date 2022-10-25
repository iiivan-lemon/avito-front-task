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
	FETCH_COMMENT = "@@cart/FETCH_COMMENT",
	FETCH_POST_ERROR = "@@cart/FETCH_POST_ERROR",
}

export interface CommentsState {
	readonly loading: boolean;
	readonly comments: {id:number,idParent:number,post:Post|null}[];
	readonly errors?: string;
}
