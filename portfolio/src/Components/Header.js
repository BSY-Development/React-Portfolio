import React from 'react';
import Logo from '../images/Logo.jpg';
import '../Styles/Header.css';

function Header() {
  return (
    <div className="header-main">
      <div>
        <h1>Hey</h1>
        <h2>I'm Bruno, a software developer from Brazil</h2>
        <button className="btn-main" type="button">Get in Touch</button>
      </div>
      <div>
        <img src={ Logo } alt="Logo" width="390px" />
      </div>
    </div>
  )
}

export default Header;
