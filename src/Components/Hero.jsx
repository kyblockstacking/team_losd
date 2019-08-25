import React from "react";
import "../Stylesheets/Hero.scss";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-header'>
        <h1 className='hero-header-name'>Team LOSD</h1>
        {/* <h2 className='hero-header-slogan'>Squad Up!</h2> */}
        <h3 className='hero-header-info'>
          The original North American Squadron Tower Defence clan
        </h3>
      </div>
    </div>
  );
};

export default Hero;
