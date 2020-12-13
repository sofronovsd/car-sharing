import React from "react";
import "./main-block.scss";
import { Link } from "react-router-dom";

const MainBlock = () => {
  return (
    <main className="main-info">
      <div className="main-info_container">
        <div className="main-info_container-text">
          <h1 className="main-info_title">Каршеринг</h1>
          <h2 className="main-info_title main-info_title__accent">
            Need for drive
          </h2>
          <span className="main-info_description">
            Поминутная аренда авто твоего города
          </span>
        </div>
        <Link to="/car-sharing/order">
          <button className="button button__wide">Забронировать</button>
        </Link>
      </div>
    </main>
  );
};

export default MainBlock;
