import React from 'react';
import './index.css';
import LoveImgSrc from '../../assests/images/love.jpg';
const DashBoardImage=props=>(
  <div>
    <img class= "img-style" src={LoveImgSrc} alt = "Love is not about property, diamonds, and gifts. It is about sharing your very self with the world around you."
    style={{width:80}} />
  </div>
);
export default DashBoardImage;
