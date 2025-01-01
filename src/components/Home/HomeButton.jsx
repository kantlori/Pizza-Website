import React from "react";

function HomeButton({ onClick }) {
    return (
        <button className="homebutton" onClick={onClick} data-cy="home-acik">
            ACIKTIM
        </button>
    );
}

export default HomeButton;
