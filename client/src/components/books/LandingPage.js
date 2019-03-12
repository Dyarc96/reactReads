import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landingPage-container">
            <header className="header">
                <h2 className="heading-primary">Welcome to ReactReads</h2>
                <p className="paragraph">Your place on web to store your<br></br> precious book finds</p>
                <p className="paragraph__signature">Made by Jan Dyja in 2019</p>
            </header>
            <div className="img-container">
                <img src={ require('../../img/05.png') } alt="image_1" className="img"></img>
            </div>
            <div className="img2-container">
                <img src={ require('../../img/10.png') } alt="image_2" className="img2"></img>
            </div>
        </div>
    );
}

export default LandingPage;