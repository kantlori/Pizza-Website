import React from 'react';

const PizzaInfo = ({ pizza }) => {
    return (
        <div className="pizza-info">
            <h4>{pizza.name}</h4>
            <p>{pizza.description}</p>
            <p>{pizza.price} TL</p>
        </div>
    );
}

export default PizzaInfo;
