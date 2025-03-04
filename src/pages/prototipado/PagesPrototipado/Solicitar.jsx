import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de PDF
import "./css/Solicitar.css";

function Solicitar() {
  return (
    <div className="solicitar-container">
      <div className="solicitar">
        <div className="solicitar-content">
          <h1>¿Necesitas de nuestros servicios?</h1>
          <p>
            Para poder solicitar un servicio del laboratorio se debe completar
            el siguiente proceso:
          </p>

          <div className="proceso">
            <div className="proceso-solicitud">
              <div className="paso">
                <h2>1. Llena el formato del formulario</h2>
                <p>
                  Descarga el formulario en PDF e imprimelo para que puedas
                  llenarlo.
                </p>
              </div>

              <div className="paso">
                <h2>2. Revisión y aprobación del jefe de laboratorio</h2>
                <p>
                  Lleva tu formulario impreso a iLabTDI donde el jefe de
                  laboratorio revisará tu solicitud y determinará si puede ser
                  aprobada.
                </p>
              </div>

              <div className="paso">
                <h2>3. Obtén tu solicitud aprobada en formato PDF</h2>
                <p>
                  Una vez aprobada, recibirás un documento en formato PDF con
                  los detalles de tu solicitud.
                </p>
              </div>

              <div className="paso">
                <h2>4. Entrega tu formato impreso en el laboratorio</h2>
                <p>
                  Imprime el formato PDF y entrégalo en el laboratorio para
                  proceder con tu solicitud.
                </p>
              </div>
            </div>
            <button
              onClick={() => console.log("Hola")} // Usa onClick para navegar
              className="btn btn-custom btn-lg"
            >
              <FontAwesomeIcon icon={faFilePdf} size="2x" />{" "}
              {/* Ícono de PDF */}
              <span>Descargar Formato</span> {/* Texto del botón */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solicitar;
