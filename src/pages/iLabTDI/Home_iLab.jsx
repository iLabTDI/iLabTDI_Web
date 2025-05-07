import React from "react";
import NavBar_iLab from "./components_iLab/NavBar/NavBar_iLab";
import Banner_iLab from "./components_iLab/Banner/Banner_iLab";
import About_iLab from "./components_iLab/About/About_iLab";

function Home_iLab() {
  return (
    <div>
      <NavBar_iLab />
      <Banner_iLab />
      <About_iLab />
    </div>
  );
}

export default Home_iLab;
