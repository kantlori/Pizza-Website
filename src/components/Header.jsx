import React from 'react';

function Header({ onBack }) {
    return (
        <header>
            <img src="../../images/iteration-1-images/logo.svg" alt="" data-cy="header-logo" />
            <div className="order-header-buttons">
                <button onClick={onBack} data-cy="returnhome-button">Anasayfa</button>
                <p>-</p>
                <button>Seçenekler</button>
                <p>-</p>
                <button>Sipariş Oluştur</button>
            </div>
        </header>
    );
}

export default Header;
