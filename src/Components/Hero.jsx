import React from "react";

import "../Stylesheets/Hero.scss";

const carbot_squad_img = require("../Media/Backgrounds/carbot_squad.jpg");

const Hero = () => {
  return (
    <div className='hero'>
      <img
        className='carbot-squad-image'
        src={carbot_squad_img}
        alt='carbot squad'
      />
      <div className='hero-squad-up'>Squad Up!</div>
    </div>
  );
};

export default Hero;
