// src/pages/Titulados.jsx
import React from "react";
import Header from "./componentsIoT/Header";
import Footer from "./componentsIoT/FooterIoT";
import Elipse1 from "../../assets/LabIoT/elipse-1.png";
import Elipse2 from "../../assets/LabIoT/elipse-2.png";
import Titulado1 from "../../assets/LabIoT/foto-titulado-1.png";
import Titulado2 from "../../assets/LabIoT/foto-titulado-2.png";
import Titulado3 from "../../assets/LabIoT/foto-titulado-3.png";
import Titulado4 from "../../assets/LabIoT/foto-titulado-7.png";
import "./styles.css";

function Titulados() {
  return (
    <div>
      <Header />
      <div id="mainBody3">
        <div id="mainText3">
          <div id="mainTextGlobe3">
            <div id="tituloMainTextGlobe3">
              <h1>Titulados</h1>
            </div>
            <p className="Descripcion">
              En nuestro laboratorio, nos sentimos orgullosos de cada uno de los
              estudiantes que ha culminado su formación académica con nosotros.
              Cada titulado representa un esfuerzo conjunto de innovación,
              investigación y compromiso, aplicando los conocimientos adquiridos
              en proyectos reales de impacto. Valoramos el esfuerzo y la
              dedicación que cada persona ha invertido para alcanzar su meta, y
              sus logros reflejan el nivel de excelencia que promovemos en el
              laboratorio. A través de sus diversos modos de titulación,
              nuestros egresados han contribuido al desarrollo de soluciones
              tecnológicas que dejan huella, y nos complace presentar su trabajo
              y logros con reconocimiento y admiración.
            </p>
          </div>
        </div>
      </div>
      <div className="parent5">
        {/* Titulado 1 */}
        <div className="div1">
          <center>
            <div className="titulation-photo">
              <img className="image1" src={Elipse1} alt="elipse1" />
              <img className="image2" src={Titulado1} alt="foto-titulado-1" />
              <img className="image3" src={Elipse2} alt="elipse2" />
            </div>
          </center>
          <h1>Marco Antonio Hernandez Preciado</h1>
          <div className="subdiv">
            <h2>Ingeniería en comunicaciones y electrónica</h2>
            <p>Modo de titulación: Producción de Materiales Educativos</p>
          </div>
        </div>

        {/* Titulado 2 */}
        <div className="div2">
          <center>
            <div className="titulation-photo">
              <img className="image1" src={Elipse1} alt="elipse1" />
              <img className="image2" src={Titulado2} alt="foto-titulado-2" />
              <img className="image3" src={Elipse2} alt="elipse2" />
            </div>
          </center>
          <h1>José Luis Tláloc Sauceda Álvarez</h1>
          <div className="subdiv">
            <h2>Ingeniería en comunicaciones y electrónica</h2>
            <p>Modo de titulación: Producción de Materiales Educativos</p>
          </div>
        </div>

        {/* Titulado 3 */}
        <div className="div3">
          <center>
            <div className="titulation-photo">
              <img className="image1" src={Elipse1} alt="elipse1" />
              <img className="image2" src={Titulado3} alt="foto-titulado-3" />
              <img className="image3" src={Elipse2} alt="elipse2" />
            </div>
          </center>
          <h1>Paola Alejandra Duque Salgado</h1>
          <div className="subdiv">
            <h2>Ingeniería en comunicaciones y electrónica</h2>
            <p>Modo de titulación: Producción de Materiales Educativos</p>
          </div>
        </div>

        {/* Titulado 4 */}
        <div className="div5">
          <center>
            <div className="titulation-photo">
              <img className="image1" src={Elipse1} alt="elipse1" />
              <img className="image2" src={Titulado4} alt="foto-titulado-7" />
              <img className="image3" src={Elipse2} alt="elipse2" />
            </div>
          </center>
          <h1>Cristopher Jesús Gonzalez Estrada</h1>
          <div className="subdiv">
            <h2>Ingeniería en comunicaciones y electrónica</h2>
            <p>Modo de titulación: Investigación y estudio de posgrados</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Titulados;
