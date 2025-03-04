// src/components/MapSection.jsx
import React from "react";

function MapSection() {
  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3733.310956415755!2d-103.32612619999999!3d20.6569244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDM5JzI0LjkiTiAxMDPCsDE5JzM0LjEiVw!5e0!3m2!1ses!2smx!4v1726597840834!5m2!1ses!2smx"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapSection;
