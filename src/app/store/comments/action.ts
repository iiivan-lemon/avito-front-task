import { CommentActionTypes} from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios'
import { ApplicationState } from "../../store";
import API_ROUTE from "../../../apiRoute";

export type AppThunk = ActionCreator<
	ThunkAction<void, ApplicationState, null, Action<string>>
	>;

export const fetchComment: AppThunk =  item => {
	return async (dispatch: Dispatch) => {
		try {
			const res  = await axios.get(`${API_ROUTE}/item/${item}.json?print=pretty`);;
			return dispatch({
				type: CommentActionTypes.FETCH_COMMENT,
				payload: res.data
			});
		} catch (e) {
			return dispatch({
				type: CommentActionTypes.FETCH_POST_ERROR,
				payload: null
			});
		}
	};
};
