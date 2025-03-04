import React from "react";
import Banner from "../componentsPrototipado/Banner/Banner";
import Servicios from "../componentsPrototipado/Servicios/Servicios";
import Maquinas from "../componentsPrototipado/Maquinaria/Maquinas";
import Galeria from "../componentsPrototipado/Galeria/Galeria";
import Location from "../componentsPrototipado/Location/Location";
import Footer from "../componentsPrototipado/Footer/Footer";
import NavBar from "../componentsPrototipado/NavBar/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Servicios />
      <Maquinas />
      <Galeria />
      <Location />
      <Footer />
    </div>
  );
}

export default Home;
