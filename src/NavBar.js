import React from "react";
import "./styles/NavBar/NavBar.css";

export const NavBar = () => {
 return (
  <div className="navContainer">
   <div className="nameContainer">
    <ul>
     <li className="name">AR.</li>
    </ul>
   </div>

   <ul className="navList">
    <li className="listNum">
     01.
     <a href="#about-container"> About</a>
    </li>
    <li className="listNum">
     02.
     <a href="#projects-container"> Projects</a>
    </li>
    <li className="listNum">
     03.
     <a href="#contact-container"> Contact</a>
    </li>
    <li className="listNum">
     04.
     <a href="/"> Blog</a>
    </li>
   </ul>
  </div>
 );
};
