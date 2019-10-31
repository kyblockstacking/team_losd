import React from "react";
import "../Stylesheets/AboutUs.scss";
import AboutUsImg from "../Assets/About_Us/about_us_img.jpg";

const AboutUs = () => {
  return (
    <>
      <div className='about-us-container'>
        <img className='about-us-image' src={AboutUsImg} alt='about us' />
        <div className='about-us-text'>HELLO</div>
      </div>
    </>
  );
};

export default AboutUs;
