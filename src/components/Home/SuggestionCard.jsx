import React from 'react';

function SuggestionCard({ item }) {
    const { name, image } = item;

    return (
        <div className='suggestion-card' style={{ backgroundImage: `url(${image})` }}>
            <h4>{name}</h4>
        </div>
    );
}

export default SuggestionCard;
