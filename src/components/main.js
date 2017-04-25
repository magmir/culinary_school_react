import React from 'react';
import image from '../../img/main.jpg';
import './main.css';


export default () => {
  return (
    <div className="main-container">
      <img className="main-img" src={image} alt="img"/>
    </div>
  )
}
