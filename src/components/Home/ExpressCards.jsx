import React from 'react';
import ExpressCard from './ExpressCard';

function ExpressCards({ items, onProductClick }) {
    if (!Array.isArray(items)) {
        return <p>Veri bulunamadı veya geçerli değil.</p>;
    }

    return (
        <div className="express-menu-cards">
            {items.map((product, index) => (
                <ExpressCard key={index} item={product} onClick={() => onProductClick(product)} />
            ))}
        </div>
    );
}

export default ExpressCards;
