import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Main";
import ItemPage from "./itemPage";
import Main from "./Main";
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
				path="/cart"
				render={() => (
					<ItemPage/>
				)}
			/>
		</Switch>
	</div>
);

export default Routes;
