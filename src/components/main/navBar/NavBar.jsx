import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css';

import Sidebar from "./sidebar/Sidebar";

const NavBar = () => {

let [open, setOpen] = useState(false);
function onShowGoods(){
  setOpen(!open)
}

  return (
    <nav className={s.navBar}>
      <Sidebar open={open} onShowGoods={onShowGoods}/>
      <div className={s.navText}>
        <span className={s.goods} onClick={onShowGoods}><i className="fas fa-store"></i></span>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/delivery'>Доставка</NavLink>
        <NavLink to='/blog'>Блог</NavLink>
        <NavLink to='/comments'>Отзывы</NavLink>
        <NavLink to='/contacts'>Контакты</NavLink>
      </div>

      <div className={s.navIcons}>
        <NavLink to='/userCabinet' className='user'><i className="far fa-user-circle"></i></NavLink>
        <NavLink to='/shoppingCart'><i className="fas fa-shopping-cart"></i></NavLink>
        <NavLink to='/search'><i className="fas fa-search"></i></NavLink>
      </div>
    </nav>
  )
}

export default NavBar;