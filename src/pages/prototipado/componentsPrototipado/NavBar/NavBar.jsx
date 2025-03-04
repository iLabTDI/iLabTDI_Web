import React, { useState } from "react";
import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/prototipado/L.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    setIsMenuOpen(false);

    if (location.pathname === "/prototypinlab") {
      // Si ya estamos en la página de inicio, hacer scroll directamente
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la raíz y luego hacer scroll
      navigate("/prototypinlab");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Espera a que cargue la página antes de hacer scroll
    }
  };

  return (
    <header className="header-Navbar">
      <Link to="/" className="logo-NavBar">
        <img src={logo} alt="Logo" className="icono-NavBar" />
        <img
          src="/ImagesPrototipado/L3.png"
          alt="Logo"
          className="nombre-NavBar"
        />
      </Link>

      {/* Menú de hamburguesa para móviles */}
      <div
        className="menu-icon-NavBar"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Barra de navegación */}
      <nav className={`NavBar ${isMenuOpen ? "active" : ""}`}>
        <button
          className="btn-NavBar"
          onClick={() => handleScrollToSection("Servicios")}
        >
          Servicios
        </button>
        <button
          className="btn-NavBar"
          onClick={() => handleScrollToSection("Maquinas")}
        >
          Máquinas
        </button>
        <button
          className="btn-NavBar"
          onClick={() => handleScrollToSection("Location")}
        >
          Encuéntranos
        </button>
        <Link to="/documentos" onClick={() => setIsMenuOpen(false)}>
          Documentos
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
