import React from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main  from "./Main";
import {Switch} from "react-router";
import ItemPage from "./itemPage";


export default function Routes() {
	return (
		<Router>
			<main>
				<Switch>
					<Route exact path='/page' component={ ItemPage } />
					<Route path="/" exact component={Main} />
				</Switch>
			</main>
		</Router>
	);
}