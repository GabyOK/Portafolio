import React, { useContext } from "react";
import "./Works.css";
import Logoreact from "../../img/logoreact.png";
import Javascrits from "../../img/js.png";
import Postgres from "../../img/postgre.png";
import Css from "../../img/css.png";
import Redux from "../../img/redux.png";
import Html from "../../img/html.png";
import Boostrap from "../../img/bootstrap.png";
import Sequelize from "../../img/sequelize.png";
import Node from "../../img/node.png";
import Express from "../../img/expres.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Tech</span>
          <span>Skills</span>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Logoreact} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Javascrits} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Postgres} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
        </motion.div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Sequelize} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Redux} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Boostrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
