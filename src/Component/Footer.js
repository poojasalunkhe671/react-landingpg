

import React from 'react'
import './css/Footer.css';
import img1 from './Image/image 1.png'

const Footer = () => {
    return (
        <footer id="sec8">
            <div className="lastDiv">
                <img src={img1} alt="SwingPro Logo" className="lastImg" />
                <p className="lastPara">SwingPro is a unique yet versatile golf training aid that offers effective methods for correcting body alignment and swing posture. It's a specially designed training device that enhances the way you play golf by helping you develop muscle memory through instilling the right "feel" when holding your club and position.</p>
                <p className="lastText">Contact Information:<br /><br />
                    Email: info@swingpro.com<br /><br />
                    Phone: +1 (123) 456-7890<br />
                </p>
                <ul id="lastUl">
                    <li>Links:</li><br />
                    <li>Home</li><br />
                    <li>Features</li><br />
                    <li>Pricing</li><br />
                    <li>Testimonials</li>
                </ul>
                <p className="parabola">&copy; 2025 SwingPro All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
