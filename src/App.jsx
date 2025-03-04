import React from "react";
import Cards from "./components/cards/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/prototipado/PagesPrototipado/Home";
import HomeIoT from "./pages/LaboratorioIoT/HomeIoT";
import QuienesSomos from "./pages/LaboratorioIoT/QuienesSomos";
import Proyectos from "./pages/LaboratorioIoT/proyectosIoT";
import Patentes from "./pages/LaboratorioIoT/Patentes";
import Titulados from "./pages/LaboratorioIoT/Titulados";
import Home_iLab from "./pages/iLabTDI/Home_iLab";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/prototypinlab" element={<Home />} />
        <Route path="/laboratorio-iot" element={<HomeIoT />} />
        <Route path="/quienesSomos-iot" element={<QuienesSomos />} />
        <Route path="/proyectos-iot" element={<Proyectos />} />
        <Route path="/patentes-iot" element={<Patentes />} />
        <Route path="/Titulados-iot" element={<Titulados />} />
        <Route path="/home=iLabTDI" element={<Home_iLab />} />
      </Routes>
    </Router>
  );
}
