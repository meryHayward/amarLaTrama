import React from "react";
import './MainContent.scss';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Header from "../Header/Header";
import SearchView from "../SearchView/SearchView";
import DescriptionProductView from '../DescriptionProductView/DescriptionProductView';
import ProductView from '../ProductView/ProductView';
import Communities from "../Communities/Communities";



const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <BrowserRouter>
                <section className="Main-container">
                    <Switch>
                        <Route exact path="/">
                            <Communities /> Aca en comunities estan todas
                        </Route>
                        <Route exact path="/searchresults/:value"> aca estan filtrada el pedido
                            <SearchView />
                        </Route>
                        <Route exact path="/Comunidad/:value"> tocaste el btn y ves el pedido
                            <ProductView />
                        </Route>
                        <Route exact path="/DescripcionProducto/:value">
                            <DescriptionProductView />
                        </Route>
                    </Switch>
                </section>
            </BrowserRouter>
        </React.Fragment >
    )
};

export default MainContent;
