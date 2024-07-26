import React from 'react';
import './NavBar.css';
import logo from '../../../Assets/logo.png'; // Adjust the path if necessary

const NavBar = ({ showLogin, showRegister }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="ShopBuilder Logo" />
            </div>
            <ul className="nav-links">
                <li><button className='Nav-button'>Page D'accueil</button></li>
                <li><button className='Nav-button' onClick={showRegister}>S'inscrire</button></li>
                <li><button className='Nav-button' onClick={showLogin}>Se Connecter</button></li>
                <li><button className='Nav-button'>Contact</button></li>
            </ul>
        </nav>
    );
}

export default NavBar;
