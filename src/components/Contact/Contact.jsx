import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
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
          <div>
            <h5>yesicasantos162@gmail.com</h5>
          </div>
          <div className="i-icons">
            <a href="https://github.com/GabyOK">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/yesica-gabriela-santos/">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </form>

        <section id="contact" class="contact">
          <div class="container">
            <div class="section-title aos-init aos-animate" data-aos="fade-up">
              <h2>Contact</h2>
              <p>Contact me</p>
            </div>

            <div class="row">
              <div
                class="col-lg-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Argentina, Buenos Aires</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>andrescantlon@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Whats app:</h4>
                    <p>+54 3489 235591</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
