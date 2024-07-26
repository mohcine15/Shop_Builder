import './Footer.css';
import logoFooter from '../assets/logo_footer.png';
import logo from '../assets/logo.png';
import React, { useEffect, useState } from 'react';


const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <footer>
            <div className={`footer-content ${isMobile ? 'mobile' : ''}`}>
                <div className="footer-subscribe">
                    <p>S'abonner</p>
                    <span>dernières actualités</span>
                    <div>
                        <input type="email" placeholder="Votre e-mail" />
                        <button>S'abonner</button>
                    </div>
                </div>
                <div className="footer-logo">
                    <img src={logoFooter} alt="ShopBuilder Footer Logo" />
                </div>
            </div>
            <div className={`footer-bottom ${isMobile ? 'mobile' : ''}`}>
                <img src={logo} alt="ShopBuilder Logo" />
                <p>Ce site web facilite la création de sites e-commerce pour ceux qui trouvent WordPress difficile. Via une interface simple, les utilisateurs peuvent fournir des informations de base, ajouter des produits et créer des promotions, le tout sans compétences en programmation.</p>
                <p>E-mail: Infos@Shopbuilder.com</p>
                <p>Fix: +212 603757443</p>
                <p>Copyright © 2024 Powered by PULSE.digital</p>
            </div>
        </footer>
    );
}

export default Footer;