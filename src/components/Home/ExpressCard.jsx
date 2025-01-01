import React from 'react';

function ExpressCard({ item }) {
    const { name, price, rating, reviewCount, image } = item;

    return (
        <div className="express-card">
            <div className="express-card-title">
                <h6>{name}</h6>
            </div>
            <div className="express-card-details">
                <p>{price}₺</p>
                <p>{rating}</p>
                <p>{reviewCount}</p>
                {image && <img src={image} alt={name} />}
            </div>
        </div>
    );
}

export default ExpressCard;
