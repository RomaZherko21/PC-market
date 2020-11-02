import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css';

import Sidebar from "./sidebar/Sidebar";

import SearchGoodsContainer from './searchGoods/SearchGoodsContainer'

const NavBar = (props) => {

  let [open, setOpen] = useState(false);
  function onShowGoods() {
    setOpen(!open)
  }

  let [showNav, setShowNav] = useState(false);
  function onShowNav() {
    setShowNav(!showNav);
  }

  let [showSearch, setShowSearch] = useState(false);
  function onShowSearch() {
    setShowSearch(!showSearch);
  }

  return (
    <Fragment>

      <nav className={s.navBar}>
        <i className={`fas fa-list-ul ${s.showList}`} onClick={onShowNav}></i>
        <Sidebar open={open} onShowGoods={onShowGoods} />
        <div className={s.navText} style={showNav ? { left: '0%' } : { left: '-100%' }}>
          <span className={s.goods} onClick={onShowGoods}><i className="fas fa-store"></i></span>
          <NavLink to='/'>Главная</NavLink>
          <NavLink to='/delivery'>Доставка</NavLink>
          <NavLink to='/showUsers'>Пользователи</NavLink>
          <NavLink to='/comments'>Отзывы</NavLink>
          <NavLink to='/contacts'>Контакты</NavLink>
        </div>

        <div className={s.navIcons} style={showNav ? { left: '0%' } : { left: '-100%' }}>
          <NavLink to='/logIn' className={s.user}><i className="fas fa-door-open"></i></NavLink>
          <NavLink to='/userCabinet' className={s.user}><i className="far fa-user-circle"></i></NavLink>
          <NavLink to='/shoppingCart' className={s.danger}><i className="fas fa-shopping-cart"></i><span>{props.shoppingCartLength}</span></NavLink>
          <i className={`fas fa-search ${s.search}`} onClick={onShowSearch}></i>
        </div>   
      {showSearch ? <SearchGoodsContainer onShowSearch={onShowSearch}/>: '' }
      </nav>
    </Fragment>
  )
}

export default NavBar;