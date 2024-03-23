// TargetAudience.js

import React from 'react';
 import './css/TargetAudience.css';
 import group5 from './Image/Group 5.png'
 import group6 from './Image/Group 6.png'
 import group7 from './Image/Group 7.png'
  import group8 from './Image/Group 8.png'
const TargetAudience = () => {
    return (
        <section id="sec3">
            <h3 className="th3">Target Audience</h3>
            <br />
            <h4 className="para2">Who SwingPro is Designed For</h4>
            <div className="targetImg">
                <img src={group5 } alt="" />
                <img src={group6} alt="" />
                <img src= { group7}alt="" />
                <img src= {group8}alt="" />
            </div>
            <p className="p">
                SwingPro caters to golfers of all levels. Whether you're an amateur looking to break
                100, a professional fine-tuning your game, or a coach helping others succeed, our
                software adapts to your unique needs and aspirations.
            </p>
        </section>
    );
}

export default TargetAudience;
