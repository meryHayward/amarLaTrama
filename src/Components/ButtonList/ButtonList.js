import React/* , { Component }  */ from "react";
import Button from "../Button/Button";


const ButtonList = () => {
	const data = [
		{
			id: "101",
			nombre: "Andrea Lourdes Lopez",
			img: "./images/equipo/1ALourdesLopez.png",
			cargo: "Junta directiva - Directora ejecutiva - Equipo de formación"
		},
		{
			id: "102",
			nombre: "Andrea Lourdes Lopez",
			img: "./images/equipo/1ALourdesLopez.png",
			cargo: "Junta directiva - Directora ejecutiva - Equipo de formación"
		},
		{
			id: "103",
			nombre: "Andrea Lourdes Lopez",
			img: "./images/equipo/1ALourdesLopez.png",
			cargo: "Junta directiva - Directora ejecutiva - Equipo de formación"
		},
		{
			id: "104",
			nombre: "Andrea Lourdes Lopez",
			img: "./images/equipo/1ALourdesLopez.png",
			cargo: "Junta directiva - Directora ejecutiva - Equipo de formación"
		},
		{
			id: "105",
			nombre: "Andrea Lourdes Lopez",
			img: "./images/equipo/1ALourdesLopez.png",
			cargo: "Junta directiva - Directora ejecutiva - Equipo de formación"
		},
	]
	return (
		<ul className="movies__list">
			{data.map((u) => (
				<li><Button coms={u} /></li>

			))}

		</ul>
	);
}


export default ButtonList;
