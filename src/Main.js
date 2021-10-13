import React from "react";
import "./styles/Main/Main.css";
import Fade from "react-reveal/Fade";

export const Main = () => {
 const name = "Andoni Romano";

 return (
  <div id="mainContainer">
   <Fade bottom>
    <div className="textContainer">
     <p className="rText">Hi, my name is</p>
     <h2 className="name">{name}</h2>

     <h2 className="name-text">I build things for the web.</h2>
     <p className="intro-text">
      I'm a front end developer with a love for learning. <br />
      Currently i'm trying to master React JS.
     </p>
     <br />
    </div>
   </Fade>
  </div>
 );
};
