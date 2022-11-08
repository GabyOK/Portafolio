import React, { useContext } from "react";
import "./Portfolio.css";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="portfolio">
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Sobre</span>
        <span>Mi</span>
        <br />

        <div className="parrafo">
          <b>
            Me desempeño como Desarrolladora Web Full Stack Junior,con
            inclinacion en el desarrollo front-end.Me gusta viajar y en mis
            tiempos libres aprender nuevas tecnologias. Mi objetivo es mejorar
            dia a dia y proporcionar experiencias positivas que mantengan al
            usuario fiel al producto o a la marca. La experiencia de usuario es
            un factor clave de éxito en el entorno digital, donde no hay
            personas, no hay olores, no hay contacto humano que pueda mejorar o
            empeorar la experiencia del cliente cuando llega a nuestro sitio. La
            experiencia de usuario va a depender única y exclusivamente de las
            sensaciones que genere el interfaz de acceso a nuestros servicios.
            Considero que tengo muy buen manejo de relaciones interpersonales y
            que cuento con las habilidades necesarias para realizar un buen
            trabajo en equipo.
          </b>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
