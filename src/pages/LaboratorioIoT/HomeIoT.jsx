import React from "react";
import "./styles.css";
import Header from "./componentsIoT/Header";
import HeroSection from "./componentsIoT/HeroSection";
import TechIcons from "./componentsIoT/TechIcons";
import ServicesSection from "./componentsIoT/ServicesSection";
import MapSection from "./componentsIoT/MapSection";
import Footer from "./componentsIoT/FooterIoT";

function HomeIoT() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TechIcons />
      <ServicesSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default HomeIoT;
