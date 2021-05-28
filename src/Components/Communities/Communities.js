import React from "react";
import ButtonList from "../ButtonList/ButtonList";
import Search from "../Search/Search";
import data from "./data";


const Communities = () => {
	return (
		<section className="main">
			<Search />
			{/* si no uso el buscador */}
			<ButtonList
				data={data}
			/>
			{/* //si uso el buscador
			<SearchResults />
			//y searchview lo saco */}
		</section>
	);
};

export default Communities;
