import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { About } from "./About";
import { Cookie, ProjectsContainer } from "./Projects";
import { ContactMain, ContactInfo } from "./Contact";

ReactDOM.render(
 <>
  <NavBar />
  <Main />
  <About />
  <ProjectsContainer />
  <ContactMain />
  <ContactInfo />
 </>,
 document.getElementById("root")
);
