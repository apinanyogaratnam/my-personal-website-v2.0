import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property }) => {
    const {index, picture, city} = property;

    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt="image goes here" />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}
                </p>
            </div>
        </div>
    )
}

export default Card
