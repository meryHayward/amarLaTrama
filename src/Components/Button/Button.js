import React from "react";
import './Button.scss';
import {
    Link
} from 'react-router-dom';


const Button = (coms) => {
    return (
        <React.Fragment>

            <Link to={`/comunidad/${coms.numeroDeComunidad}`}>
                <div className="btn-container" >
                    <button className="btn">
                        <h4 className="btn-title">Comunidad {coms.id}</h4>
                        <p className="btn-text">{coms.localidad} - {coms.provincia}</p>
                    </button>
                </div>
            </Link>

        </React.Fragment>
    )
};

export default Button;
