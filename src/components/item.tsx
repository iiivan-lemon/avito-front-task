import * as React from "react";
import './item.scss'
import {useHistory} from "react-router";


const mockDataItem: Object ={
	title: "Title",
	username: "ADMIN",
	date:'1/10/2022',
	rating: "10",
	link: 'google.com',
	countComments: "3",
	//comments: [{text:"wow"},{text:'great!'}]
}


export default function Item(){
	let history = useHistory();
	function handleClick() {
		history.push("/page");
	}

	const listData = [];

let  data = mockDataItem;



	const allowed = ['username', 'date','rating'];


		if(history.location.pathname === '/'){
			 data = Object.keys(data)
				.filter(key => allowed.includes(key))
				.reduce((obj, key) => {
					(obj as any)[key] = (data as any)[key];
					return obj;
				}, {});

		}
	for(const prop in data){
		if(prop !== "title"){
			listData.push(<span>{prop}: {(mockDataItem as any)[prop].toString()}</span>)
		}
	}


		return (
			<div className={'item'} onClick={handleClick}>
				<span className={'title'}>{(mockDataItem as any)['title']}</span>
				<div className={'item-data'}>{listData}</div>
			</div>
		);

}