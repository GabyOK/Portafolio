import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Proyectos</span>
        <span>Realizados</span>
      </div>
    </div>
  );
};

export default Services;
