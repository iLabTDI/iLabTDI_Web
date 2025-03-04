import React from "react";
import "./css/Documentos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const documentos = [
  {
    nombre: "Solicitud de maquinaria del laboratorio de prototipado",
    url: "/Documentos/formato_servicio_prototipado.pdf",
    tamano: "44.45 KB",
  },
  {
    nombre: "Reglamento del laboratorio de prototipado",
    url: "/Documentos/reglamento_del_laboratorio_de_prototipado.pdf",
    tamano: "372.14 KB",
  },
  {
    nombre: "Procedimiento de fabricación lab de prototipado",
    url: "/Documentos/procedimiento_de_fabricacion_lab_de_prototipado.pdf",
    tamano: "668.89 KB",
  },
  {
    nombre: "Manual Gerber Proteus",
    url: "/Documentos/manual_gerber_proteus.pdf",
    tamano: "205.16 KB",
  },
  {
    nombre: "Altium Gerber",
    url: "/Documentos/altium_gerber.pdf",
    tamano: "601.7 KB",
  },
  {
    nombre: "Kicad Gerber",
    url: "/Documentos/kicad_gerber.pdf",
    tamano: "1.1 MB",
  },
  {
    nombre: "Orcad Gerber",
    url: "/Documentos/orcad_gerber.pdf",
    tamano: "932.07 KB",
  },
  {
    nombre: "Generar Archivos Gerber con Eagle",
    url: "/Documentos/generar_archivos_gerber_con_eagle.pdf",
    tamano: "362.04 KB",
  },
];

function Documentos() {
  return (
    <div>
      <div className="documentos-container">
        <div className="documentos">
          <div className="documentos-content">
            <h1>Documentos</h1>
            <p>
              A continuación se presentan varios documentos relacionados con el
              laboratorio de prototipado, entre ellos manuales para la
              generación de archivos gerber en distintos software.
            </p>

            {/* Tabla de documentos */}
            <table className="documentos-tabla">
              <thead>
                <tr>
                  <th>Adjunto</th>
                  <th>Tamaño</th>
                </tr>
              </thead>
              <tbody>
                {documentos.map((doc, index) => (
                  <tr key={index}>
                    <td>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="pdf-icon"
                        />{" "}
                        {doc.nombre}
                      </a>
                    </td>
                    <td>{doc.tamano}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentos;
