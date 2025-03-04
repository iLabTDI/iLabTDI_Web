import React from "react";
import "./Servicios.css";
import foto from "../../../../assets/prototipado/FotoLab.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Servicios() {
  return (
    <section id="Servicios">
      <div className="servicios">
        <img src={foto} alt="Lsboratorio" className="lab_image" />
        <div className="servicios-text">
          <div>
            {" "}
            <h2>Servicios</h2>
          </div>
          <p>
            Nuevo laboratorio de protoripado parte de iLabTDI.
            <br></br> ¡Descubre y conoce todos los servicios que tenemos para
            ti!
          </p>
          <h3>¿Que servicios puedo encontrar en el laboratorio?</h3>
          <div className="listas">
            <div className="lista_1">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "blue" }} />{" "}
                  Producción de prototipos PCB
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "blue" }} />{" "}
                  Sistema semi-automático de ensamblado SMT
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "blue" }} />{" "}
                  Fresadora para maquinar piezas de aluminio.
                </li>
              </ul>
            </div>
            <div className="lista_2">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "blue" }} />{" "}
                  Impresión 3D
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "blue" }} />{" "}
                  Horno de soldadura por refusión para posicionar y soldar
                  componentes de montaje superficial
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
