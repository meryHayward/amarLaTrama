import React, { useState } from "react";
import Button from "../Button/Button";
import data from "../Communities/data";

const ButtonListSearch = () => {

	return (
		<ul className="movies__list">
			{data.map((u) => (
				<Button coms={u} />
				// pasarle la info aca a las peliculas y quye estas se las pasen el modal?
			))}

		</ul>
	);
}


export default ButtonListSearch;
