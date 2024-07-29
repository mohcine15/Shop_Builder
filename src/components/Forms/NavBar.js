import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png'; // Adjust the path if necessary


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setMenuActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="ShopBuilder Logo" />
            </div>
            <ul className={`nav-links ${isMobile && menuActive ? 'active' : ''}`} style={{ display: isMobile && !menuActive ? 'none' : 'flex' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#websites">Liste de votre websites</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="user-info" style={{ display: isMobile && !menuActive ? 'none' : 'flex' }}>
                <span>Ahmed Terraf</span>
                <button className="user-button"></button>
            </div>
            {isMobile && (
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            )}
        </nav>
    );
}

export default NavBar;
