// src/components/HeroSection.jsx
import React from "react";
import mainImage from "../../../assets/LabIoT/main-image.png"; // Asegúrate de que la ruta sea correcta

function HeroSection() {
  return (
    <div id="mainBody">
      <img src={mainImage} alt="dispositivos-red" id="main-image" />
      <div id="mainText">
        <div id="mainTextGlobe" className="fade-in">
          <h1 id="ConectandoText">
            Conectando el futuro, un dispositivo a la vez
          </h1>
          <p className="Descripcion">
            Nuevo laboratorio de internet de las cosas manejado por iLabTDI.
          </p>
          <p className="Descripcion">
            Descubre y conoce todos los servicios que manejamos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
