import { combineReducers } from "redux";
import {connectRouter, RouterState} from "connected-react-router";

import { History } from "history";

// import inventorySaga from "./inventory/sagas";
import { PostReducer } from "./store/post/reducer";
import { PostState } from "./store/post/types";

// import cartSaga from "./cart/sagas";
// import { cartReducer } from "./cart/reducer";
// import { cartState } from "./cart/types";
// import { RouterState } from "connected-react-router";

export interface ApplicationState {
	post: PostState;
	router: RouterState;
}

export const createRootReducer = (history: History) =>
	combineReducers({
		post: PostReducer,
		router: connectRouter(history)
	});
