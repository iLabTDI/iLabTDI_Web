// src/pages/Patentes.jsx
import React from "react";
import Header from "./componentsIoT/Header";
import Footer from "./componentsIoT/FooterIoT";
import Video from "../../assets/LabIoT/Video.png";

import "./styles.css"; // Importa los estilos CSS

function Patentes() {
  return (
    <div>
      <Header />
      <div id="mainBody4">
        <div id="mainText4">
          <div id="mainTextGlobe4">
            <h1 id="ConectandoText">Patentes y Propiedades intelectuales</h1>
            <p className="Descripcion">
              En nuestro laboratorio, desarrollamos soluciones innovadoras que
              integran dispositivos conectados para diversas aplicaciones.
              Trabajamos en proyectos que involucran el diseño de redes de
              sensores inteligentes, la automatización de procesos mediante el
              control remoto de dispositivos y el análisis en tiempo real de
              datos recolectados por sistemas IoT. Desde la creación de
              prototipos hasta la implementación de plataformas completas,
              nuestro enfoque está en la mejora de la eficiencia, la
              sostenibilidad y la conectividad en entornos industriales, urbanos
              y domésticos.
            </p>
          </div>
        </div>
      </div>
      <div className="parent4">
        <div className="div1">
          <h1>Safe - Track Timer</h1>
          <h2>No. de Registro: 03-2024-062809240800-01</h2>
          <div className="subdiv">
            <p>Descripción</p>
          </div>
        </div>
        <div className="div2">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hUMNHK2uy6Y"
            title="Funcionamiento de la app SafeTrack-Timer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="div3">
          <video width="100%" controls>
            <source src={Video} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className="div4">
          <h1>BITLABTDI</h1>
          <h2>No. de Registro: 03-2024-022811165900-01</h2>
          <div className="subdiv">
            <p>Descripción</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Patentes;
