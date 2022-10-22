import * as React from "react";
import './header.scss'
import Refresh from "./refresh";
import {useHistory} from "react-router";

export default function Header() {
	let history = useHistory();
	function handleClick() {
		history.push("/");
	}
		return (
			<div className={"header"}>
				<span  onClick={handleClick}>MAIN PAGE</span>
				<Refresh></Refresh>
			</div>
		);
	
}