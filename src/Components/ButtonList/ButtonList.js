import React/* , { Component }  */ from "react";
import Button from "../Button/Button";



const ButtonList = ({ data }) => {
	return (
		<ul className="movies__list">
			{data.map((u) => (
				<li><Button coms={u} /></li>

			))}

		</ul>
	);
}


export default ButtonList;
