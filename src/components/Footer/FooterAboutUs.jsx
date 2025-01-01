import React from 'react';

function FooterAboutUs() {
    return (
        <div className="footer-about-us">
            <img src={"../../images/iteration-2-images/footer/logo-footer.svg"} alt="logo-footer" />
            <div className="footer-adress">
                <img src="../../images/iteration-2-images/footer/icons/icon-1.png" alt="Adres" />
                <p>341 Londonderry Road</p>
                <p>Istanbul, Turkey</p>
            </div>
            <div className="eposta">
                <img src="../../images/iteration-2-images/footer/icons/icon-2.png" alt="Eposta" />
                <p>atabeywade@gmail.com</p>
            </div>
            <div className='phone'>
                <img src="../../images/iteration-2-images/footer/icons/icon-3.png" alt="Phone" />
                <p>+90 555 555 55 55</p>
            </div>
        </div>
    );
}

export default FooterAboutUs;
