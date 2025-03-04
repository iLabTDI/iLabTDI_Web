import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import "./Cards.css";

function Cards() {
  return (
    <div>
      <div className="container-cards">
        {/* Card 1 */}
        <Link to="/" className="logo">
          <img src="logo_ilab.png" className="logo-madre" alt="Logo iLabTDI" />
        </Link>

        {/* Card 2 */}
        <Link to="/prototypinlab" className="logo">
          <img
            src="./ImagesPrototipado/L2.png"
            className="logo-madre"
            alt="Logo iLabTDI"
          />
        </Link>

        {/* Card 3 */}
        <Link to="/laboratorio-iot" className="logo">
          <img
            src="./ImagesIoT/datahub_logo.png"
            className="logo-madre"
            alt="Logo iLabTDI"
          />
        </Link>
      </div>
    </div>
  );
}

export default Cards;
