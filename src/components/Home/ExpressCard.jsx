import React from 'react';

function ExpressCard({ item, onClick }) {
    const { name, price, rating, reviewCount, image } = item;

    return (
        <div className="express-card" onClick={onClick}>
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
