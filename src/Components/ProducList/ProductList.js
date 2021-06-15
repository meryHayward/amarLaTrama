import React from "react";
import './ProductList.scss';
import Product from '../Product/Product';
import { useParams } from "react-router";
import {
    Link
} from 'react-router-dom';


const ProductList = (data) => {
    const { data } = useParams();


    return (
        <React.Fragment>
            <section className="ProductList-Container">
                {
                    data.productos.map(p => {
                        return (
                            <div>
                                <Link to={`/DescripcionProducto/${p.id}`}>
                                    <Product key={p.id} nombreEs={p.nombreEspañol} foto={p.img} cantidad={p.descripcion} />
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default ProductList;
