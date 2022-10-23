import {Post, PostActionTypes} from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios'
import { ApplicationState } from "../../store";
import posts from "../../../mockData";
import API_ROUTE from "../../../apiRoute";

export type AppThunk = ActionCreator<
	ThunkAction<void, ApplicationState, null, Action<string>>
	>;

export const fetchRequest: AppThunk = () => {
	return async (dispatch: Dispatch) => {
		try {

			// 100 последних из всех
			const resAsk  = await axios.get(`${API_ROUTE}/askstories.json?print=pretty`) // 91
			const resShow  = await axios.get(`${API_ROUTE}/showstories.json?print=pretty`) //52
			const resJob  = await axios.get(`${API_ROUTE}/jobstories.json?print=pretty`) //60

			return dispatch({
				type: PostActionTypes.FETCH_SUCCESS,
				payload: resAsk.data
			});
		} catch (e) {
			return dispatch({
				type: PostActionTypes.FETCH_ERROR
			});
		}
	};
};

export const fetchPost: ActionCreator<ThunkAction<
	void,
	ApplicationState,
	Post,
	Action<string>
	>> = item => {
	return (dispatch: Dispatch): Action => {
		try {
			console.log('action ITem',item)
			return dispatch({
				type: PostActionTypes.FETCH_POST,
				payload: 1
			});
		} catch (e) {
			return dispatch({
				type: PostActionTypes.FETCH_POST_ERROR,
				payload: null
			});
		}
	};
};
