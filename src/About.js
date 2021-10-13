import React from "react";
import "./styles/About/About.css";

import { ImageTest } from "./ImageTest";

export const About = () => {
 return (
  <div id="about-container">
   <div className="about-text">
    <h2>
     <span className="number-color">01.</span>
     <span className="about-title"> About Me</span>
    </h2>
    <p className="about-paragraph">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis orci ligula,
     gravida sit amet gravida ut, blandit in purus. Nunc id rhoncus magna. Nam
     tincidunt sodales leo in suscipit. Donec sit amet fermentum massa, at
     ultricies urna. Pellentesque eu feugiat risus, ac faucibus lectus. Integer
     magna felis, efficitur eget sodales vel, laoreet nec lacus. Sed ultricies
     mollis mauris, accumsan sodales.
    </p>
   </div>

   <div className="andoni-img-container">
    <ImageTest />
   </div>
  </div>
 );
};
