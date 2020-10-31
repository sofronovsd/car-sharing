import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header_logo">Need for drive</h2>
      <div className="header_location">
        <img src="./assets/map.svg" alt="map" />
        <span>Ульяновск</span>
      </div>
    </header>
  );
};

export default Header;
