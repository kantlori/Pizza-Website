import React from 'react';
import ExpressCard from './ExpressCard';

function ExpressCards({ item }) {
    if (!Array.isArray(item)) {
        return <p>Veri bulunamadı veya geçerli değil.</p>;
    }

    return (
        <div className="express-menu-cards">
            {item.map((product, index) => (
                <ExpressCard key={index} item={product} />
            ))}
        </div>
    );
}

export default ExpressCards;
