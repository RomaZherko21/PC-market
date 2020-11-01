import React from 'react';
import { Link } from "react-router-dom";

import s from './Footer.module.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.logo}>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className={s.footerInfo}>
                <div className={s.footerTitle}>Каталог</div>
                <div><Link to="/pc">Компьютеры</Link></div>
                <div><Link to="/laptop">Ноутбуки</Link></div>
                <div><Link to="/printer">Принтеры и МФУ</Link></div>
                <div><Link to="/monitor">Мониторы</Link></div>
                <div><Link to="/periphery">Переферия для ПК</Link></div>
                <div><Link to="/modules">Комплектующие</Link></div>
                <div><Link to="/accessories">Аксессуары</Link></div>
            </div>
            <div className={s.footerInfo}>
                <div className={s.footerTitle}>Контакты</div>
                <div>Наша почта: <Link to="/">sale@pcmarket.uz</Link></div>
                <div>Позвоните нам:<Link to="/">+99899 301-31-00</Link></div>
                <div>Рабочее время: <Link to="/">Пн-Сб 9.00 - 18.00</Link></div>
            </div>
        </footer>
    )
}

export default Footer;
