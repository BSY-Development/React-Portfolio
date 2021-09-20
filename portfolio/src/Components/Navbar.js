import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="main-nav">
      <a href="/">Bruno Yamamoto</a>
      <div>
        <a className="nav-option" href="#products">Projects</a>
        <a className="nav-option" href="#about">About</a>
        <a className="nav-option" href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
