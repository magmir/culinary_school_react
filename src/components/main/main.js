import React from 'react';
import image from '../../../img/main.jpg';
import facebook from '../../../img/facebook.png';
import linkedin from '../../../img/linkedin.png';
import tweeter from '../../../img/tweeter.png';
import './main.css';


export default () => {
  return (
    <div className="main-container">
      <div>
        <img className="main-img" src={image} alt="img"/>
      </div>
      <div className="icons">
        <img className="icon" src={facebook} alt="facebook-icon" />
        <img className="icon" src={linkedin} alt="linkedin-icon" />
        <img className="icon" src={tweeter} alt="tweeter-logo" />
      </div>
    </div>
  )
}
