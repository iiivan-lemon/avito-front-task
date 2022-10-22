import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './Main.css';
import {useHistory} from "react-router-dom";
import Item from "./components/item";
import Refresh from "./components/refresh";
import Header from "./components/header";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


function Main() {

	return (
		<div>
			<Header></Header>
			{[...Array(10)].map((x, i) =>
				<Item key={i}/>
			)}
		</div>
	);
}

export default Main;
