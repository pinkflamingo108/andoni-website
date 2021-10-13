import React from "react";
import "./styles/Projects/Projects.css";
import ImageCookie from "./pics/cookie-queens.PNG";
import ImageOhno from "./pics/ohno-pi.PNG";
import ImageRodrigo from "./pics/rodrigo-mendoza.PNG";
import ImageDino from "./pics/dino.PNG";
import Fade from "react-reveal/Fade";

export const ProjectsContainer = (project) => {
 return (
  <div id="projects-container">
   <div className="projects-text">
    <div className="title-wrapper">
     <h2>
      <span className="project-number">02.</span>
      <span className="project-title"> Some things I've built</span>
     </h2>
     <p className="featured">Featured Projects</p>
    </div>
    <Fade left cascade>
     <div>{Dino}</div>
    </Fade>
    <Fade left cascade>
     <div>{Cookie}</div>
    </Fade>
    <Fade left cascade>
     <div>{Rodrigo}</div>
    </Fade>
    <Fade left cascade>
     <div>{Ohno}</div>
    </Fade>
   </div>
  </div>
 );
};

// List of possible descriptions that for each website or project

const dCookies = `Cookies ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis libero vitae sagittis tempor.
  Integer posuere lectus nulla, quis bibendum odio iaculis in.Etiam mollis laoreet turpis, a varius arcu.`;

const dOhno = `Ohno ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis libero vitae sagittis tempor.
  Integer posuere lectus nulla, quis bibendum odio iaculis in.Etiam mollis laoreet turpis, a varius arcu.`;

const dRodrigo = `Rodrigo ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis libero vitae sagittis tempor.
  Integer posuere lectus nulla, quis bibendum odio iaculis in.Etiam mollis laoreet turpis, a varius arcu.`;

const dDino = `Dino ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis libero vitae sagittis tempor.
Integer posuere lectus nulla, quis bibendum odio iaculis in.Etiam mollis laoreet turpis, a varius arcu.`;

const ProjectMain = (project, description, imgName, altText) => {
 return (
  <div id="project">
   <div id="wrapper01">
    <h2 className="project-name">{project}</h2>
    <div id="wrapper02">
     <div className="img-container">
      <img className="main-img" src={imgName} alt={altText} />
     </div>
     <div className="description-container">
      <span className="description-color">{description}</span>
     </div>
    </div>
   </div>
  </div>
 );
};

export const Cookie = ProjectMain(
 "Cookie Queens",
 dCookies,
 ImageCookie,
 "Cookie Queens Website"
);

export const Ohno = ProjectMain("Ohno-Pi", dOhno, ImageOhno, "Ohno-Pi website");

export const Rodrigo = ProjectMain(
 "Rodrigo Mendoza",
 dRodrigo,
 ImageRodrigo,
 "Rodrigo Website"
);

export const Dino = ProjectMain("Dino", dDino, ImageDino, "Dino Udacity");
