import React, { useContext } from "react";
import "./Portfolio.css";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Sobre Mi</span>

      <p>
        Soy una persona proactiva, excelente compañera de equipo, organizada y
        responsable. Disfruto mucho aprender cosas nuevas, por lo que mi
        objetivo es un puesto desafiante y dinámico donde poder compartir mi
        experiencia y a su vez sumar nuevos conocimientos. Con pensamiento
        creativo, resolución de problemas, trabajo en equipo, comunicación y
        autonomía.
      </p>
    </div>
  );
};

export default Portfolio;
