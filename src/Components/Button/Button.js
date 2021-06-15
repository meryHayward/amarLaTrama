import React from "react";
import './Button.scss';
import {
    Link
} from 'react-router-dom';

const Button = ({comunidad, pueblo, ciudad}) => {
    
    return (
        <React.Fragment>

            <Link to={`/comunidad/${comunidad}`} style={{textDecoration: 'none'}}>
                <div className="btn-container" >
                    <button className="btn">
                        <h4 className="btn-title"> {comunidad}</h4>
                        <p className="btn-text">{pueblo} - {ciudad}</p>
                    </button>
                </div>
            </Link>

        </React.Fragment>
    )
};

export default Button;
