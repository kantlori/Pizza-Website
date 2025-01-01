import React from "react";
import "../../images/iteration-1-images/logo.svg";
import "./SuccessPage.css"

function SuccessPage({ onBack }) {
    return (
        <div className="success-page" data-cy="success-page">
            <div className="logo">
                <img src="../../images/iteration-1-images/logo.svg" alt="logo" data-cy="success-logo" />
            </div>
            <div className="success-message" data-cy="success-message">
                <p data-cy="success-congratulations">TEBRİKLER!</p>
                <p data-cy="success-order-received">SİPARİŞİNİZ ALINDI!</p>
            </div>
            <div className="success-button">
                <button onClick={onBack} data-cy="back-to-home">Anasayfaya Dön</button>
            </div>
        </div>
    );
}

export default SuccessPage;
