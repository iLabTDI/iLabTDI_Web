import React from "react";
import "./NavBar_iLab.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar_iLab() {
  return (
    <header className="header-Navbar">
      <Link to="/" className="logo-NavBar">
        <img
          src="./Images_iLabTDI/Logo_iLabTDI.jpg"
          alt="Logo"
          className="icono-NavBar"
        />
      </Link>

      {/* Barra de navegación */}
      <div className="NavBar">
        <button className="btn-NavBar">Sobre nosotros</button>
        <button className="btn-NavBar">Servicios</button>
        <button className="btn-NavBar">Encuéntranos</button>
      </div>
    </header>
  );
}

export default NavBar_iLab;
