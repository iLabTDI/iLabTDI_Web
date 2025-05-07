import React from "react";
import { Link } from "react-router-dom";
import videoFondo from "../../assets/Fondo_video.mp4";
import "./Cards.css";

function Cards() {
  return (
    <div>
      <div className="container-cards">
        {/* Video de fondo */}
        <video autoPlay muted loop id="video-fondo">
          <source src={videoFondo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Card 1 */}
        <Link to="/home=iLabTDI" className="logo">
          <img
            src="/ImagesHome/Logo_blanco_con_letras.PNG"
            className="logo-madre"
            alt="Logo iLabTDI"
          />
        </Link>

        {/* Card 2 */}
        <Link to="/prototypinlab" className="logo">
          <img
            src="./ImagesHome/Prototyping_lab_blanco.PNG"
            className="logo-madre"
            alt="Logo iLabTDI"
          />
        </Link>

        {/* Card 3 */}
        <Link to="/laboratorio-iot" className="logo">
          <img
            src="./ImagesHome/IoT_Blanco_con_letras.PNG"
            className="logo-madre"
            alt="Logo iLabTDI"
          />
        </Link>
      </div>
    </div>
  );
}

export default Cards;
