// Introduction.js

import React from 'react';
import './css/Introduction.css';
import Frame from './Image/Frame.png'
const Introduction = () => {
    return (
        <section id="intro">
            <div id="introImgDiv">
                <img src={Frame} alt="" />
            </div>
            <div id="introContentDiv">
                <h1>Introduction</h1>
                <br /><br />
                <h4>Welcome to SwingPro - Your Golf Swing Enhancement Partner</h4>
                <p className="para">
                    Whether you're a seasonal golfer or just getting started on the greens, SwingPro is here
                    to help you master your swing technique and elevate your golf game to new heights. Our
                    state-of-the-art golf swing tracker software offers personalized insights, real-time analysis,
                    and seamless integration with wearable devices.
                </p>
            </div>
        </section>
    );
}

export default Introduction;
