import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Banner.css";
import logo from "../../../../assets/prototipado/L3.png";

function Banner() {
  const navigate = useNavigate();

  const handleSolicitarClick = () => {
    navigate("/solicitar");
  };

  return (
    <section id="inicio">
      <div className="container">
        <div className="titulo">
          <img src={logo} alt="Logo" />
          <div>
            <h1>LABORATORIO DE PROTOTIPADO</h1>
            <p>Donde las ideas se materializan y los prototipos cobran vida</p>
          </div>
          <button
            onClick={handleSolicitarClick} // Usa onClick para navegar
            className="btn btn-custom btn-lg"
          >
            Solicitar prototipo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
