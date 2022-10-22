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
function ItemPage() {

	return (
		<div>
			<Header/>
			<Item/>
		</div>
	);
}

export default ItemPage;
