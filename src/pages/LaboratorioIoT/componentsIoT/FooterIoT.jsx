// src/components/Footer.jsx
import React from "react";
import icon from "../../../assets/LabIoT/icon.png";
import cuceiLogo from "../../../assets/LabIoT/cucei.png";
import divticLogo from "../../../assets/LabIoT/DIVTIC.png";

function Footer() {
  return (
    <footer className="endpage">
      <div id="IconNText">
        <div id="footerIcon">
          <img src={icon} alt="icon" style={{ scale: "80%" }} />
        </div>
        <div id="footerText">
          <p>Centro Universitario de Ciencias Exactas e Ingenierías</p>
          <p>
            Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430
            Guadalajara, Jal.
          </p>
          <p>hector.galvez5325@academicos.udg.mx</p>
          <p>+52 33 1328 6565</p>
        </div>
        <div id="footerImages">
          {/* Puedes agregar más imágenes aquí si es necesario */}
        </div>
      </div>
      <hr className="solid" />
      <div id="bottomImages">
        <div className="bottomImage">
          <img src={cuceiLogo} alt="cucei" />
        </div>
        <div className="bottomImage">
          <img src={divticLogo} alt="divtic" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
