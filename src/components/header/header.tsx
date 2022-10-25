import * as React from "react";
import './header.css'
import Refresh from "../refresh/refresh";
import {useHistory} from "react-router";
import {useEffect, useState} from "react";



export default function Header(props:any) {
	let history = useHistory();
	function handleClick() {
		history.push("/");
	}

	const [header, setHeader] = useState("header")

	const listenScrollEvent = (event:Event) => {
		if (window.scrollY < 73) {
			return setHeader("header")
		} else if (window.scrollY > 70) {
			return setHeader("header2")
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);

		return () =>
			window.removeEventListener('scroll', listenScrollEvent);
	}, []);

		return (
			<div className={header}>
				<svg className={"home"} onClick={handleClick} fill="black" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="2rem" height="2rem"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>
				<Refresh refresh={props.refresh}/>
			</div>
		);
	
}