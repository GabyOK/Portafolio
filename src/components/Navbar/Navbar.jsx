import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                PROYECTOS
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                TECH SKILLS
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                SOBRE MI
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
