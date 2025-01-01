import React from 'react';
import Nav from './Nav';

function HeaderNavs({ item, onNavClick }) {
    return (
        <ul className="header-nav">
            {item.map((category, index) => (
                <Nav
                    key={index}
                    item={category}
                    onClick={() => onNavClick(category.name.toLowerCase().replace(" ", ""))}
                />
            ))}
        </ul>
    );
}

export default HeaderNavs;
