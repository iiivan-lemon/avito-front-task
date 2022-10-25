import {PostActionTypes} from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios'
import { ApplicationState } from "../../store";
import API_ROUTE from "../../../apiRoute";

export type AppThunk = ActionCreator<
	ThunkAction<void, ApplicationState, null, Action<string>>
	>;

export const fetchRequest: AppThunk = () => {
	return async (dispatch: Dispatch) => {
		try {

			const resAsk  = await axios.get(`${API_ROUTE}/newstories.json?print=pretty`);
			const data = resAsk.data.splice(0,100);
			return dispatch({
				type: PostActionTypes.FETCH_SUCCESS,
				payload: data
			});
		} catch (e) {
			return dispatch({
				type: PostActionTypes.FETCH_ERROR
			});
		}
	};
};

export const fetchPost: AppThunk =  item => {
	return async (dispatch: Dispatch) => {
		try {
			const res  = await axios.get(`${API_ROUTE}/item/${item}.json?print=pretty`);
			return dispatch({
				type: PostActionTypes.FETCH_POST,
				payload: res.data
			});
		} catch (e) {
			return dispatch({
				type: PostActionTypes.FETCH_POST_ERROR,
				payload: null
			});
		}
	};
};
