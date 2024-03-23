// Header.js

import React from 'react';
import './css/Header.css';
import logo from './Image/image 1.png'

const Header = () => {
    return (
        <header className="header">
            <div id="logoDiv">
                <a href="#"><img src={logo} className="logoImage" alt="Logo" /></a>
            </div>
            <div id="navDiv">
                <ul id="nav">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="service.html">Pricing</a></li>
                    <li><a href="Testimonials.html">Testimonials</a></li>
                    <li><button id="signUpBtn">Sign-up</button></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
