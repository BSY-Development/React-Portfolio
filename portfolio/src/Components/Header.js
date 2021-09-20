import React from 'react';
import Logo from '../images/main.svg';
import '../Styles/Header.css';

function Header() {
  return (
    <div className="header-main">
      <div className="header-text">
        <h1 className="hey-text">Hey!</h1>
        <h2 className="header-description">I'm Bruno, a software developer from Brazil</h2>
        <a className="btn-main" href="#contact">Get in Touch</a>
      </div>
      <div className="header-img-div">
        <img className="header-img" src={ Logo } alt="Logo" />
      </div>
    </div>
  )
}

export default Header;
