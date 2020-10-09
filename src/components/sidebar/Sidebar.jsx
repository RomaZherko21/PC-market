import React, { useState } from 'react';

import s from './Sidebar.module.css';

import printer from '../../images/sidebar/printer.svg'
import pc from '../../images/sidebar/pc.svg'
import monitors from '../../images/sidebar/monitors.svg'
import modules from '../../images/sidebar/modules.svg'
import laptop from '../../images/sidebar/laptop.svg'
import keyboard from '../../images/sidebar/keyboard.svg'
import accessories from '../../images/sidebar/accessories.svg'



const Sidebar = () => {


    console.log(accessories)
    // const [showInfo, setShowInfo] = useState(true);

    // function showInfoHandler() {
    //     setShowInfo(!showInfo)
    // }

    let style = {
        borderLeft: '2px solid red', color: 'white'
    }
    return (
        <div className={s.sidebar}>
            <ul className={s.assortmentList}>
                <li className={s.pcHover}>
                    <img src={pc} alt="" />
                    <a href="/">Компьютеры</a>
                </li>
                <li className={s.laptopHover}>
                    <img src={laptop} alt="" />
                    <a href="/">Ноутбуки</a>
                </li>
                <li className={s.printerHover}>
                    <img src={printer} alt="" />
                    <a href="/"> Принтеры и МФУ</a>
                </li>
                <li className={s.monitorsHover}>
                    <img src={monitors} alt="" />
                    <a href="/">Мониторы</a>
                </li>
                <li className={s.keyboardHover}>
                    <img src={keyboard} alt="" />
                    <a href="/">Переферия для ПК</a>
                </li>
                <li className={s.modulesHover}>
                    <img src={modules} alt="" />
                    <a href="/">Комплектующие</a>
                </li>
                <li className={s.accessoriesHover}>
                    <img src={accessories} alt="" />

                    <a href="/">Аксессуары</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
