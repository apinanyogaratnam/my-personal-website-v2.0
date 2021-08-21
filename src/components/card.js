import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ property }) => {
    const {index, title, subtitle, description, picture, source} = property;
    const [style, setStyle] = useState({display: 'none'});

    return (
        <>
            <div id={`card-${index}`} className="card"
                onMouseEnter={e => setStyle({
                    position: 'absolute',
                    top: '50%',
                    marginLeft: '-100px',
                    width: '200px',
                    color: 'black',
                    filter: 'brightness(150%)'
                })}
                onMouseLeave={e => setStyle({display: 'none'})}
            >
                <img className="card-image" src={require("../images/bot_image.png").default} alt="image goes here" />
                <div className="details">
                    <button style={style} onClick={() => window.open(source, "_blank")}>View</button>
                    <h4>{title}</h4>
                    <hr/>
                    <h6>{subtitle}</h6>
                    <p className="card-description">{description}</p>
                    <span className="index">{index+1}</span>
                </div>
            </div>
        </>
    );
}

export default Card
