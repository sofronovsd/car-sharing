import React from "react";
import "./map-widget.scss";

const MapWidget = () => {
  return (
    <div className="order_map-container">
      <span>Выбрать на карте:</span>
      <img src="./assets/map.png" alt="map" />
    </div>
  );
};

export default MapWidget;
