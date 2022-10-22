import * as React from "react";
import './item.scss'
import {useHistory} from "react-router";
export default function Item(){
	let history = useHistory();
	function handleClick() {
		history.push("/page");
	}
		return (
			<div className={'item'}>
				<h3 onClick={handleClick}>Title</h3>
				<p>Rating</p>
				<p>username</p>
				<p>data</p>
			</div>
		);

}