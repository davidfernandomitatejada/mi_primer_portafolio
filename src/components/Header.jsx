import React from "react";
import './styles/Header.css';

 // Assuming you have a CSS file for styling
const Header = () => {
  return (
    <header>
      <div className="logo">
      </div>
      <span>Mi portafolio</span>
      <nav>
        <ul>
          <li><a href="#about" className="hover:underline">About me</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;