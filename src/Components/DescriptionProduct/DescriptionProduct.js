import React from "react";
import './DescriptionProduct.scss';
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasArrowLeft} from '@fortawesome/free-solid-svg-icons'*/}


const DescriptionProduct = ({ nombreEs, nombreWichi, img, cantidad, descripcion }) => {
    return (
        <React.Fragment>
            <section>
                <div className="product-name">
                    <h1>{nombreEs}</h1>
                </div>
                <div className="product-descrption">
                    <h3 className="product-descrption-title">¿QUÉ ES? ¿PARA QUÉ SE USA?</h3>
                    <p>{descripcion}</p>
                </div>
                <div className="product-photo-descrption">
                    <h3 className="product-descrption-title">GUÍA DE MEDIDAS Y FORMAS</h3>
                    <div className="product-size">
                        <img src={img} />
                        <div className="detail-size">
                            <p><b>MEDIDAS</b></p>
                            <p>{nombreWichi}</p>
                        </div>
                    </div>
                    <date>En lo posible entregar antes de: <b>{cantidad}</b></date>
                    {/*hacer una fórmula para restar días*/}
                </div>
            </section>
        </React.Fragment>
    )
};

export default DescriptionProduct;


/*{productName, producSpanishtName, prodcutDescription, urlDescription, longSize, widthSize, highSize, days}*/
