import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import s from './ShoppingCart.module.css'


const SwitchComponents = (props) => {
  return (
    <Fragment>
      <div className={s.shoppingCartInfo}>
        {!props.currentUser.name ? <h1>Need To  <NavLink to='/logIn' className={s.user}>LogIn</NavLink></h1> : <h1> Balance: <span>{props.currentUser.money}</span> руб.</h1>}
        <h1>Full Price: <span>{props.shoppingCart.fullPrice}</span> руб.</h1>
      </div>
      <section className={s.shoppingCart}>
        {props.shoppingCart.shoppingCartGoods.map(item => {
          return (
            <div className={s.oneProduct} key={item.id}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <h2>{item.price} руб.</h2>
              <div className={s.delete} onClick={() => { props.removeShoppingCartGood(item) }}>Удалить</div>
            </div>
          )
        })}
      </section>
    </Fragment>
  )
}

export default SwitchComponents;