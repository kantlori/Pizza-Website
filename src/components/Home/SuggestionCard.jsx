import React from 'react';
import OrderButton from './OrderButton';

function SuggestionCard({ item }) {
    const { name, image } = item;

    return (
        <div className='suggestion-card' style={{ backgroundImage: `url(${image})` }}>
            <h4>{name}</h4>
            <OrderButton />
        </div>
    );
}

export default SuggestionCard;
