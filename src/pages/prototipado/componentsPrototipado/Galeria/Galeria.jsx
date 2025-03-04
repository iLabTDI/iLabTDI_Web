import React from "react";
import "./Galeria.css";

function Galeria() {
  return (
    <section id="Galeria">
      <div className="galeria">
        <h2>Galería</h2>
        <div className="row">
          <div className="galeria-imagen">
            <img src="./ImagesPrototipado/Makerbot.jpg" alt="Makerbot" />
            <div className="hover-text">
              <h4>Makerbot 2 Replicator</h4>
              <p>
                <br></br> Es una impresora 3D que crea objetos sólidos
                tridimensionales utilizando filamento PLA. Los diseños 3D, en
                formatos .stl, .obj o .thing, se traducen en instrucciones y se
                envían vía USB o tarjeta SD. Para imprimir, el diseño no debe
                exceder 28.5 cm (L) x 15.3 cm (W) x 15.5 cm (H) y debe incluirse
                en una USB junto con filamento PLA de 1.75 mm. Ideal para
                materializar tus proyectos en 3D con facilidad y precisión.
              </p>
            </div>
          </div>
          <div className="galeria-imagen">
            <img src="./ImagesPrototipado/ProtoMat.jpg" alt="ProtoMat" />
            <div className="hover-text">
              <h4>LPKF ProtoMat S103</h4>
              <p>
                <br></br>Es un trazador de placas de circuito de alta precisión,
                ideal para prototipos PCB y pequeños lotes. Con una resolución
                de 0.5μm (0.02 mil), motor de 100,000 RPM y velocidad de
                desplazamiento de 150 mm/s, garantiza precisión en perforación y
                desbaste de estructuras finas, especialmente para aplicaciones
                de RF y microondas.
              </p>
            </div>
          </div>
          <div className="galeria-imagen">
            <img src="./ImagesPrototipado/Fresadora.jpg" alt="Fresadora" />
            <div className="hover-text">
              <h4>Fresadora VF3KM400</h4>
              <p>
                <br />
                Es un verdadero Caballo de Batalla. Ideal para evolucionar tu
                taller de fresadoras convencionales a tecnología CNC. Con la
                VF3K M400 podrás maquinar piezas de hasta 760 mm de largo, 355
                mm de ancho y 400 mm de alto, además de los 120 mm adicionales
                con los que cuenta el cañón del husillo.
              </p>
            </div>
          </div>
          <div className="galeria-imagen">
            <img src="./ImagesPrototipado/Torch.jpg" alt="Torch" />
            <div className="hover-text">
              <h4>Torch T200C+</h4>
              <p>
                <br />
                Es un horno de soldadura por refusión libre de plomo con curvas
                de temperatura configurables, ideal para circuitos con
                componentes de montaje superficial. Con un tamaño efectivo de
                trabajo de 360x230mm, se pueden trabajar con varios lotes a la
                vez, requiriendo un tiempo mínimo de soldado de 3 minutos.
              </p>
            </div>
          </div>
          <div className="galeria-imagen">
            <img src="./ImagesPrototipado/ProtoPlace.jpg" alt="ProtoPlace" />
            <div className="hover-text">
              <h4>ProtoPlace S</h4>
              <p>
                <br />
                Es una máquina semi-automática para la colocación precisa de
                componentes SMD en prototipos de circuitos impresos. Capaz de
                manejar empaquetados QFP de hasta 0.4 mm con 300 pines y
                componentes tipo 0201, es ideal para ensamblajes profesionales.
                Acepta tarjetas de circuitos de hasta 297x420 mm. Para usarla,
                lleva tus componentes SMD, PCB y pasta al laboratorio en los
                horarios disponibles. Perfecta para prototipos de alta
                precisión.
              </p>
            </div>
          </div>
          <div className="galeria-imagen">
            <img src="./ImagesPrototipado/Sense.jpg" alt="Sense" />
            <div className="hover-text">
              <h4>Sense 3D Scanner</h4>
              <p>
                <br />
                El escáner 3D Sense ofrece una manera fácil, sencilla, portable
                y práctica de escanear objetos, productos, artefactos y personas
                a color, con una profundidad de 640x480px y una resolución de
                1mm. Puede escanear objetos de 0.2x0.2x0.2m hasta 2x2x2m.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
