import React, {  } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Sidebar.module.css';

import printer from '../../../../images/sidebar/printer.svg'
import pc from '../../../../images/sidebar/pc.svg'
import monitors from '../../../../images/sidebar/monitors.svg'
import modules from '../../../../images/sidebar/modules.svg'
import laptop from '../../../../images/sidebar/laptop.svg'
import keyboard from '../../../../images/sidebar/keyboard.svg'
import accessories from '../../../../images/sidebar/accessories.svg'



const Sidebar = (props) => {

    function showLi(text, hoverClass, img, toLink) {
        return (
            <li className={s[hoverClass]}>
                <NavLink to={toLink} activeClassName={s.active}><img src={img} alt="" />{text}</NavLink>
            </li>
        )
    }
    return (
        <div className={`${s.sidebar} ${props.open ? s.sidebarShow : s.sidebarBlock}`}>
         
            <i className="fas fa-times" onClick={props.onShowGoods}></i>
            <ul className={s.assortmentList}>
                {showLi('Компьютеры', 'pcHover', pc, '/pc')}
                {showLi('Ноутбуки', 'laptopHover', laptop, '/laptop')}
                {showLi('Принтеры и МФУ', 'printerHover', printer, '/printer')}
                {showLi('Мониторы', 'monitorsHover', monitors, '/monitor')}
                {showLi('Переферия для ПК', 'keyboardHover', keyboard, '/periphery')}
                {showLi('Комплектующие', 'modulesHover', modules, '/modules')}
                {showLi('Аксессуары', 'accessoriesHover', accessories, '/accessories')}
            </ul>
        </div>
    )
}

export default Sidebar;
