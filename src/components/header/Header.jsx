import React, { useState } from 'react';

import s from './Header.module.css';
import logo from '../../images/logo.png';

const Header = () => {
    const [showInfo, setShowInfo] = useState(true);

    function showInfoHandler() {
        setShowInfo(!showInfo)
    }

    // let style = {
    //     display:'green',
    // }
    return (
        <header>
            <div className={s.logo}>
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className={s.showInfo} onClick={showInfoHandler}>
                <i class="fas fa-question"></i>
            </div>
            <div className={s.headerInfo} style={showInfo && document.documentElement.clientWidth<=700 ? { display: 'none' } : { display: 'flex' }}>
                <div>Наша почта: <a href="/">sale@pcmarket.uz</a></div>
                <div>Позвоните нам:<a href="/">+99899 301-31-00</a></div>
                <div>Рабочее время: <a href="/">Пн-Сб 9.00 - 18.00</a></div>
                <div className={s.socialIcons}>
                    <a href="/"><i class="fab fa-instagram"></i></a>
                    <a href="/"><i class="fab fa-facebook-f"></i></a>
                    <a href="/"><i class="fab fa-telegram-plane"></i></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
