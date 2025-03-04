import React from "react";
import "./Maquinas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faBurn,
  faCube,
  faVectorSquare,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

function Maquinas() {
  return (
    <section id="Maquinas">
      <div className="maquinas">
        <div className="section-title">
          <h2>Maquinaria</h2>
          <p>
            Esta es la maquinaria que se utiliza en nuestro laboratorio para
            poder ofrecerte nuestros servicios
          </p>
        </div>
        <div className="row">
          <div className="objeto">
            <FontAwesomeIcon icon={faCube} className="custom-icon" />
            <div className="maquina-desc">
              <h3>Makerbot 2 Replicator</h3>
              <p>Impresora 3D</p>
            </div>
          </div>
          <div className="objeto">
            <FontAwesomeIcon icon={faBurn} className="custom-icon" />
            <div className="maquina-desc">
              <h3>Torch T200C+</h3>
              <p>Horno de soldadura</p>
            </div>
          </div>
          <div className="objeto">
            <FontAwesomeIcon icon={faVectorSquare} className="custom-icon" />
            <div className="maquina-desc">
              <h3>Sense 3D Scanner</h3>
              <p>Scanner de objetos para disenos 3D</p>
            </div>
          </div>
          <div className="objeto">
            <FontAwesomeIcon icon={faTools} className="custom-icon" />
            <div className="maquina-desc">
              <h3>Fresadora</h3>
              <p>Máquina de corte de alta precisión</p>
            </div>
          </div>
          <div className="objeto">
            <FontAwesomeIcon icon={faCube} className="custom-icon" />
            <div className="maquina-desc">
              <h3>ProtoPlace S</h3>
              <p>
                Máquina avanzada para la producción rápida y precisa de
                prototipos
              </p>
            </div>
          </div>
          <div className="objeto">
            <FontAwesomeIcon icon={faMicrochip} className="custom-icon" />
            <div className="maquina-desc">
              <h3>LPKF ProtoMat S103</h3>
              <p>Máquina de prototipado de circuitos impresos (PCB)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maquinas;
