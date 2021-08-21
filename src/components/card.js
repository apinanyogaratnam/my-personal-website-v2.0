import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property }) => {
    const {index, title, subtitle, description, picture, city} = property;

    return (
        <div id={`card-${index}`} className="card">
            <img className="card-image" src={require(picture).default} alt="image goes here" />
            <div className="details">
                <h4>{title}</h4>
                <h6>{subtitle}</h6>
                <p className="card-description">{description}</p>
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}
                </p>
            </div>
        </div>
    );
}

export default Card
