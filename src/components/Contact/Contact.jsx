import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Github2 from "../../img/github2.png";
import Linke from "../../img/linke.png";
import Gmail from "../../img/gmail.png";
import Whatsapp from "../../img/whatsapp.png";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uazq61e",
        "template_rdkcepi",
        form.current,
        "jlKlLhVhjcXE8qeyC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Contactame</span>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationServer01">Nombre y Apellido</label>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Nombre"
                required
              />
              <div class="valid-feedback">Ok!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationServer02">E-mail</label>
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="E-mail"
                required
              />
              <div class="valid-feedback">Ok!</div>
            </div>
            <label for="validationServer02">Mensaje</label>
            <br />
            <textarea
              name="message"
              className="user"
              placeholder="Quisiera contactarte..."
            />
            <br />

            <input type="submit" value="Enviar" className="button" />
            <br />
            <span className="contac">
              {done && "Gracias por contactarme!!"}
            </span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </div>

          <div className="i-icons">
            <a href="https://www.linkedin.com/in/yesica-gabriela-santos/">
              <img src={Linke} alt="" />
            </a>
            <a href="mailto:yesicasantos162@gmail.com?Subject=Quiero%20contactarte%20para...">
              <img src={Gmail} alt="" />
            </a>
            <a href="https://wa.link/hfzgoo">
              <img src={Whatsapp} alt="" />
            </a>
          </div>
          <h6 className="copy">© Yesica Santos 2022</h6>
        </form>
      </div>
    </div>
  );
};

export default Contact;
