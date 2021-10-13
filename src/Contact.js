import React from "react";
import ReactDOM from "react-dom";
import "./styles/Contact/Contact.css";

export const ContactMain = () => {
 return (
  <div id="contact-container">
   <div className="text-container">
    <p className="fresh-green">What's Next?</p>
    <h2 className="contact-title">Get In Touch</h2>
    <p className="contact-text">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros nec
     nibh tempor lobortis sit amet id turpis. Praesent ut mollis lacus. Duis
     quis est vitae felis convallis suscipit.
    </p>
    <div className="button-container">
     <button className="main-button">Say Hello</button>
    </div>
   </div>
  </div>
 );
};

export const ContactInfo = () => {
 return (
  <div className="credit-container">
   <p className="design-credit"> Designed & Built by Andoni Romano</p>
  </div>
 );
};
