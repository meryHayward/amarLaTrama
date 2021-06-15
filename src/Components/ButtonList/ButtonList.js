import React/* , { Component }  */ from "react";
import Button from "../Button/Button";


const ButtonList = () => {
	const data = [
		{
			id: "101",
			comunidad: "Itziar",
			pueblo: "Lorem Ipsum",
			ciudad: "Clorinda",
			productos:  [ 
				{   
					nombreEspañol: "Canastas",
					nombreWichi: "Taosj",
					cantidad: "12",
					descripcion: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
					img: "./images/productos/almohadones.jpg",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "maceta",
					nombreWichi: "Texcoas",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/productos/azucarera.jpg",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{  
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
			  ],
		},
		{
			id: "102",
			comunidad: "Gornim",
			pueblo: "Julio Verne",
			ciudad: "Formosa",
			productos:  [ 
				{   
					nombreEspañol: "Canastas",
					nombreWichi: "Taosj",
					cantidad: "12",
					descripcion: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
					img: "./images/productos/almohadones.jpg",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "maceta",
					nombreWichi: "Texcoas",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "92",
					mediasAncho: "43", 
					medidasLargo: "23",
				},
				{  
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
			  ],
		},
		{
			id: "103",
			comunidad: "Ispur",
			pueblo: "Ada Lovelace",
			ciudad: "Gato Colorado",
			productos:  [ 
				{   
					nombreEspañol: "Canastas",
					nombreWichi: "Taosj",
					cantidad: "12",
					descripcion: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
					img: "./images/productos/almohadones.jpg",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "maceta",
					nombreWichi: "Texcoas",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{  
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
			  ],
		},
		{
			id: "104",
			comunidad: "Itziar II",
			pueblo: "Ipsum Lorem",
			ciudad: "Lucio V. Mansilla",
			productos:  [ 
				{   
					nombreEspañol: "Canastas",
					nombreWichi: "Taosj",
					cantidad: "12",
					descripcion: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
					img: "./images/productos/almohadones.jpg",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "maceta",
					nombreWichi: "Texcoas",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{  
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
			  ],
		},
		{
			id: "105",
			comunidad: "Siwan",
			pueblo: "Ipsum Lorem",
			ciudad: "Lucio V. Mansilla",
			productos:  [ 
				{   
					nombreEspañol: "Canastas",
					nombreWichi: "Taosj",
					cantidad: "12",
					descripcion: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
					img: "./images/productos/almohadones.jpg",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "maceta",
					nombreWichi: "Texcoas",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{   
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
				{  
					nombreEspañol: "canastas",
					nombreWichi: "taosj",
					cantidad: "12",
					descripcion: "dfdfisdijfsdfijsidjid", 
					img: "./images/equipo/1ALourdesLopez.png",
					medidasAlto: "12",
					mediasAncho: "40", 
					medidasLargo: "23",
				},
			  ],
		},
	]
	return (
		<ul className="movies__list">
			{data.map((u) => (
				<li><Button 
				comunidad={u.comunidad} 
				id ={u.id}
				ciudad={u.ciudad} 
				pueblo={u.pueblo} 

				/>
				</li>
			))}
		</ul>

		);
}

export default ButtonList;
