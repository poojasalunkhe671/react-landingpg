
import React from 'react';
import './css/UserBenefits.css';
import location from './Image/location_1974201 1.png'
import trophy from './Image/trophy_1974231 1.png'
import distance from './Image/distance_1974249 1.png'
const UserBenefits = () => {
    return (
        <section className="sec6">
            <div className="div3">
                <h2 className="text10">User Benefits</h2>
                <h4 className="text13">Why SwingPro is your Ultimate Golf Companion</h4>
                <div className="benefit">
                    <div className="benefitImage">
                        <img src={location} alt="" />
                    </div>
                    <div className="benefitDescription">
                        <h4 className="text13">Precision and Accuracy</h4>
                        <ul className="benefitList">
                            <li>Achieve pinpoint accuracy with every swing.</li>
                            <li>Make data-driven decisions to perfect your technique.</li>
                            <li>Unleash your full potential on the fairway.</li>
                        </ul>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefitImage">
                        <img src={trophy} alt="" />
                    </div>
                    <div className="benefitDescription">
                        <h4 className="text13">Consistency in Every Swing</h4>
                        <ul className="benefitList">
                            <li>Master the art of a consistent swing.</li>
                            <li>Chart your journey towards excellence.</li>
                            <li>Bid farewell to inconsistency, usher in excellence.</li>
                        </ul>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefitImage">
                        <img src={distance} alt="" />
                    </div>
                    <div className="benefitDescription">
                        <h4 className="text13">Personalized Insights</h4>
                        <ul className="benefitList">
                            <li>Identify areas for improvements customized for you.</li>
                            <li>Receive actionable recommendations for growth.</li>
                            <li>Transform your weaknesses into your strengths.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserBenefits;
