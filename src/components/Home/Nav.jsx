import React from 'react';

function Nav({ item, onClick }) {
    const { name, image } = item;

    return (
        <li className="nav-item" onClick={onClick}>
            <img src={image} alt={name} />
            <p>{name}</p>
        </li>
    );
}

export default Nav;
