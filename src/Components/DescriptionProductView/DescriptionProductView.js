import React, { useState } from "react";
import './DescriptionProductView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadProduct from '../HeadProduct/HeadProduct';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';
import DowloadProduct from '../DowloadProduct/DowloadProduct';
import { useParams } from "react-router";

const DescriptionProductView = ({ nombreEs, nombreWichi, img, cantidad, descripcion }) => {
    const [product, setProduct] = useState({});

   
    return (
        <React.Fragment>
            <HeadProduct imagen={product.media} cantidad={product.cantidad} />
            <section className="container-product">
                <DescriptionProduct name={nombreWichi} descripcion={descripcion} imagen={img} especificaciones={product.especificaciones} date={product.fechaDeEntrega} />
                <DowloadProduct />
            </section>
            <button type="button" className="btn-back">
                <FontAwesomeIcon icon={faSearch} />
                Volver a Productos
            </button>
        </React.Fragment>
    )
};

export default DescriptionProductView;