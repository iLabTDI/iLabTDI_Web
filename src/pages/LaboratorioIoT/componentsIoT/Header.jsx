// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/LabIoT/Logo.png"; // Asegúrate de que la ruta sea correcta

function Header() {
  return (
    <div id="logoNnav">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ display: "inline", margin: "10px" }}
        />
      </Link>
      <div id="navText">
        <ul>
          <li>
            <Link to="/quienesSomos-iot">¿Quiénes somos?</Link>
          </li>
          <li>
            <Link to="/proyectos-iot">Proyectos</Link>
          </li>
          <li>
            <Link to="/patentes-iot">Patentes</Link>
          </li>
          <li>
            <Link to="/Titulados-iot">Titulados</Link>
          </li>
          <li>
            <Link to="/contacto" id="contactoBoton">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
