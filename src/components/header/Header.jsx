import React, { useState } from 'react';
import { Link } from "react-router-dom";

import s from './Header.module.css';
import logo from '../../images/logo.png';

const Header = () => {

    const [showInfo, setShowInfo] = useState(true);
    function showInfoHandler() {
        setShowInfo(!showInfo)
    }

    return (
        <header>
            <div className={s.logo}>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className={s.showInfo} onClick={showInfoHandler}>
                <i className="fas fa-question"></i>
            </div>
            <div className={s.headerInfo} style={showInfo && document.documentElement.clientWidth<=700 ? { display: 'none' } : { display: 'flex' }}>
                <div>Наша почта: <Link to="/">sale@pcmarket.uz</Link></div>
                <div>Позвоните нам:<Link to="/">+99899 301-31-00</Link></div>
                <div>Рабочее время: <Link to="/">Пн-Сб 9.00 - 18.00</Link></div>
                <div className={s.socialIcons}>
                    <a href="https://www.instagram.com/" target="_blank nofollow noopener"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/" target="_blank nofollow noopener"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://web.telegram.org/#/login" target="_blank nofollow noopener"><i className="fab fa-telegram-plane"></i></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
