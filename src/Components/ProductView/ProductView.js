import React from "react";
import './ProductView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft} from '@fortawesome/free-solid-svg-icons'


const ProductView = () => {
    return (
        <React.Fragment>
            <div className="product-title">
                <h1>Tu comunidad tiene:</h1>
                <h1>PRODUTOS SOLICITADOS:</h1>
            </div>
            {/* <ProductList /> */}
            <button type="button" className="btn-back"> 
                <FontAwesomeIcon icon={fasArrowLeft} />
                Volver a Comunidades
            </button>

        </React.Fragment>
    )
};

export default ProductView;
