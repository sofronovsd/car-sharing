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
                    <h2 className="header__logo">Need for drive</h2>
                    <div className="header__location">
                        <img src="./assets/map.svg" alt="map" />
                        <span>Ульяновск</span>
                    </div>
                </header>
                <main className="main__info">
                    <h1>Каршеринг</h1>
                    <h2>Need for drive</h2>
                    <p>Поминутная аренда авто твоего города</p>
                    <button className="button">Забронировать</button>
                </main>
                <footer className="footer">
                    <p>© 2016-2019 «Need for drive»</p>
                    <p>8 (495) 234-22-44</p>
                </footer>
            </div>
            <div className="slider">слайдер</div>
        </div>
    )
}

export default StartPage;
