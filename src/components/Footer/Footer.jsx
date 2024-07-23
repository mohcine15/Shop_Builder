import React from 'react';
import './Footer.css';
import logoFooter from '../../Assets/logo_footer.png';
import logo from '../../Assets/logo.png';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer>
            <div className="footer-content">
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
            <div className="footer-bottom">
                <img src={logo} alt="ShopBuilder Logo" />
                <p>Ce site web facilite la création de sites e-commerce pour ceux qui trouvent WordPress difficile. Via une interface simple, les utilisateurs peuvent fournir des informations de base, ajouter des produits et créer des promotions, le tout sans compétences en programmation.</p>
                <p>E-mail: Infos@Shopbuilder.com</p>
                <p>Fix: +212 603757443</p>
                <p>Copyright © {getCurrentYear()} Powered by <a href="https://pulse.digital/"> PULSE.digital</a></p>
            </div>
        </footer>
    );
}

export default Footer;
