// src/pages/Proyectos.jsx
import React from "react";
import Header from "./componentsIoT/Header";
import Footer from "./componentsIoT/FooterIoT";
import Image from "../../assets/LabIoT/proyecto1.png";
import "./styles.css"; // Importa los estilos CSS

function Proyectos() {
  return (
    <div>
      <Header />
      <div id="mainBody3">
        <div id="mainText3">
          <div id="mainTextGlobe3">
            <div id="tituloMainTextGlobe3">
              <h1>Proyectos</h1>
            </div>
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
      <div className="parent3">
        <div className="div1">
          <h1>
            Sistema de detección y predicción de anomalías en la calidad del
            aire en espacios cerrados.
          </h1>
          <div className="subdiv">
            <p>
              La calidad del aire en espacios cerrados es fundamental para la
              salud y el bienestar, ya que una mala ventilación puede causar
              problemas respiratorios y cardiovasculares, además de afectar el
              rendimiento cognitivo y la toma de decisiones. Para abordar este
              problema, el laboratorio está trabajando en la instalación de una
              red de sensores IoT que monitorea en tiempo real diversos
              parámetros de calidad del aire. Estos datos se analizarán
              utilizando técnicas de aprendizaje automático para identificar
              patrones de contaminación, predecir cambios y ofrecer
              recomendaciones que mejoren el ambiente interior, promoviendo así
              la salud y el rendimiento de las personas.
            </p>
          </div>
        </div>
        <div className="div2">
          <img src={Image} alt="proyecto1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Proyectos;
