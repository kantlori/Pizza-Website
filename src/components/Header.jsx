import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';

function Header({ onBack }) {

    const [isShrink, setIsShrink] = useState(false);

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.scrollY > 1) {
                setIsShrink(true);
            } else {
                setIsShrink(false);
            }
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${isShrink ? 'shrink' : ''}`}>
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
