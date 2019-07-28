import React from "react";

import "../Stylesheets/NavBar.scss";

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-bar-list'>
        <li className='nav-bar-items'>NEWSROOM</li>
        <li className='nav-bar-items'>MEDIA</li>
        <li className='nav-bar-items'>EVENTS</li>
        <span className='nav-bar-items nav-bar-logo'>
          <span>team</span>
          <span>LoSD</span>
        </span>
        <li className='nav-bar-items'>SHOP</li>
        <li className='nav-bar-items'>TEAM</li>
        <li className='nav-bar-items'>ABOUT US</li>
      </ul>
    </nav>
  );
};

export default NavBar;
