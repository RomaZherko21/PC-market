import React from 'react'
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css';

const NavBar = () => {

  return (
    <nav className={s.navBar}>
      <div className={s.navText}>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/delivery'>Доставка</NavLink>
        <NavLink to='/blog'>Блог</NavLink>
        <NavLink to='/comments'>Отзывы</NavLink>
        <NavLink to='/contacts'>Контакты</NavLink>
      </div>

      <div className={s.navIcons}>
        <NavLink to='/shoppingCart'><i className="fas fa-shopping-cart"></i></NavLink>
        <NavLink to='/search'><i className="fas fa-search"></i></NavLink>
      </div>
    </nav>
  )
}

export default NavBar;