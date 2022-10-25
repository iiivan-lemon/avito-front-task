import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemPage from "./pages/ItemPage/itemPage";
import Main from "./pages/MainPage/Main";
const Routes: React.FC = () => (
	<div>
		<Switch>
			<Route
				exact
				path="/"
				render={() => (
						<Main/>
				)}
			/>
			<Route
				path="/:id"
				render={() => (
					<ItemPage/>
				)}
			/>
		</Switch>
	</div>
);

export default Routes;
