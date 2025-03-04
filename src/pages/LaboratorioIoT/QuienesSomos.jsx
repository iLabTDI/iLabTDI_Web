// src/pages/QuienesSomos.jsx
import React, { useEffect } from "react";
import Header from "./componentsIoT/Header";
import Footer from "./componentsIoT/FooterIoT";
import MainImg from "../../assets/LabIoT/main-image.png";
import "./styles.css"; // Importa los estilos CSS

function QuienesSomos() {
  return (
    <div>
      <Header />
      <div id="mainBody2">
        <div id="mainText2">
          <div id="mainTextGlobe2">
            <h1 id="ConectandoText">¿Quiénes somos?</h1>
            <p className="Descripcion">
              Nos enfocamos en fomentar la innovación en el Internet de las
              Cosas (IoT) mediante un equipo interdisciplinario. Ofrecemos
              talleres y consultorías en desarrollo de dispositivos conectados,
              prototipado, seguridad IoT y estrategias de negocio para proyectos
              IoT.
            </p>
          </div>
        </div>
        <img src={MainImg} alt="dispositivos-red" id="main-image" />
      </div>
      <div className="middleBodyText">
        <h1>Objetivo general</h1>
        <p>
          El objetivo general del laboratorio de ciencia de datos enfocado en la
          recolección de datos mediante el Internet de las Cosas (IoT) es
          desarrollar y fortalecer capacidades para comprender, analizar,
          gestionar, utilizar y salvaguardar datos generados por dispositivos
          IoT, con el fin de impulsar la innovación y la excelencia en el campo
          de la ciencia de datos, contribuyendo así al avance de la sociedad y
          la resolución de problemas complejos en diferentes áreas.
        </p>
        <h1>Objetivos específicos</h1>
      </div>
      <div className="parent2">
        <div className="div1">
          <h2>Implementación de infraestructura IoT</h2>
          <p>Detalles</p>
        </div>
        <div className="div2">
          <h2>Desarrollo de capacidades analíticas</h2>
          <p>Detalles</p>
        </div>
        <div className="div3">
          <h2>Seguridad y Privacidad de Datos</h2>
          <p>Detalles</p>
        </div>
        <div className="div4">
          <h2>Desarrollo de Aplicaciones y Soluciones Innovadoras</h2>
          <p>Detalles</p>
        </div>
        <div className="div5">
          <h2>Desarrollo de Aplicaciones y Soluciones Innovadoras</h2>
          <p>Detalles</p>
        </div>
        <div className="div6">
          <h2>Desarrollo de Aplicaciones y Soluciones Innovadoras</h2>
          <p>Detalles</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuienesSomos;
