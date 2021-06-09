import React from "react";
import './Button.scss';
import {
    Link
} from 'react-router-dom';

const Button = ({comunidad, id, pueblo, ciudad}) => {
    
    return (
        <React.Fragment>

            <Link to={`/comunidad/${id}`}>
                <div className="btn-container" >
                    <button className="btn">
                        <h4 className="btn-title"> {id}</h4>
                        <p className="btn-text">{pueblo} - {ciudad}</p>
                    </button>
                </div>
            </Link>

        </React.Fragment>
    )
};

export default Button;
