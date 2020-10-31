import React from "react";
import './start-page.scss'

const StartPage = () => {
    return (
        <div className="container">
            <div className="side-bar">
                <button className="menu-btn">
                    <div/>
                    <div/>
                    <div/>
                </button>
                <button className="language-btn">Eng</button>
            </div>
            <div className="main-page">
                <header className="header">
                    <h2 className="header_logo">Need for drive</h2>
                    <div className="header_location">
                        <img src="./assets/map.svg" alt="map" />
                        <span>Ульяновск</span>
                    </div>
                </header>
                <main className="main-info">
                    <h1 className="main-info_title">Каршеринг</h1>
                    <h2 className="main-info_title main-info_title__accent">Need for drive</h2>
                    <span className="main-info_description">Поминутная аренда авто твоего города</span>
                    <button className="button button__wide">Забронировать</button>
                </main>
                <footer className="footer">
                    <span className="footer_copyright">© 2016-2019 «Need for drive»</span>
                    <span className="footer_phone">8 (495) 234-22-44</span>
                </footer>
            </div>
            <div className="slider">слайдер</div>
        </div>
    )
}

export default StartPage;
