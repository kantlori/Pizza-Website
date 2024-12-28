import React from "react";
import "../../images/iteration-1-images/logo.svg";
import "../css/SuccessPage.css"

function SuccessPage({ onBack }) {
    return (
        <div className="success-page">
            <div className="logo">
                <img src="../../images/iteration-1-images/logo.svg" alt="logo" />
            </div><div className="success-message">
                <p>TEBRİKLER!</p>
                <p>SİPARİŞİNİZ ALINDI!</p></div><div className="success-button">
                <button onClick={onBack}>Anasayfaya Dön</button>
            </div>
        </div>
    );
}

export default SuccessPage;
