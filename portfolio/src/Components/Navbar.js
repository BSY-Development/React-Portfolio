import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  const check = document.querySelector('#check');
  const remove = document.querySelectorAll('.remove-nav-window');

  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', () => {
      check.checked = false;
    });
  }

  return (
    <nav className="main-nav">
      <a href="/">Bruno Yamamoto</a>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
      </label>
      <ul className="ul-config">
          <li><a className="remove-nav-window" href="#products">Projects</a></li>
          <li><a className="remove-nav-window" href="#about">About</a></li>
          <li><a className="remove-nav-window" href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
