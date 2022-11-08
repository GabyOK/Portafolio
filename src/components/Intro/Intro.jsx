import React, { useContext } from "react";
import "./Intro.css";
import Female from "../../img/female.jpg";
import Development from "../../img/development.png";
import Code from "../../img/code.png";
import App from "../../img/app.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import CV from "../Intro/CV.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Full Stack Developer
          </span>
        </div>

        <div>
          <a href={CV}>
            <button class="linea" className="button n-button">
              Visualizar CV
            </button>
          </a>
          <a href={CV} download>
            <button class="linea" className="button n-button">
              Descargar CV
            </button>
          </a>
        </div>

        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/GabyOK">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/yesica-gabriela-santos/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Female} alt="image" width="900px" height="840px" />
        {/* animation */}
        <motion.img
          initial={{ left: "-10%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Development}
          alt=""
        />

        <motion.img
          width="60px"
          height="60px"
          initial={{ top: "-2%", left: "74%" }}
          whileInView={{ left: "110%" }}
          transition={transition}
          src={Code}
          alt=""
        />

        {/* animation */}
        <motion.img
          width="160px"
          height="160px"
          initial={{ left: "9rem", top: "25rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          src={App}
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
