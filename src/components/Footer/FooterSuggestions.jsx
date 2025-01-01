import React from 'react';

function FooterSuggestions({ randomFoods }) {
    return (
        <div className="footer-suggestions">
            <h5>Sıccacık Menüler</h5>
            <ul>
                {randomFoods.map((food, index) => (
                    <li key={index}>{food.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default FooterSuggestions;
