import React, { useContext } from "react";
import "./Services.css";
import Carousel from "react-bootstrap/Carousel";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Proyectos</span>
        <span>Realizados</span>
      </div>
      <Carousel>
        <Carousel.Item>
          <iframe
            width="750px"
            height="450px"
            src="https://www.youtube.com/embed/XUWfz0tg2hg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="750px"
            height="450px"
            src="https://www.youtube.com/embed/Au0ZIZMy1Uw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Services;
