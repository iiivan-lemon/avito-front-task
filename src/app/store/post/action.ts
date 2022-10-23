import { PostActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../../store";
import posts from "../../../mockData";

export type AppThunk = ActionCreator<
	ThunkAction<void, ApplicationState, null, Action<string>>
	>;

export const fetchRequest: AppThunk = () => {
	return (dispatch: Dispatch): Action => {
		try {
			return dispatch({
				type: PostActionTypes.FETCH_SUCCESS,
				payload: posts
			});
		} catch (e) {
			return dispatch({
				type: PostActionTypes.FETCH_ERROR
			});
		}
	};
};
