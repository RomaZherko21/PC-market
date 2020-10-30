import React, { Fragment } from 'react'
import s from './ShoppingCart.module.css'


const SwitchComponents = (props) => {
  return (
    <Fragment>
      <div className={s.shoppingCartInfo}>
        <h1>FullPrice: <span>{props.shoppingCart.fullPrice}</span> руб.</h1>
        <h1>Balance: <span>{props.currentUser.money}</span> руб.</h1>
      </div>
      <section className={s.shoppingCart}>
        {props.shoppingCart.shoppingCartGoods.map(item => {
          return (
            <div className={s.oneProduct} key={item.img}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <h2>{item.price} руб.</h2>
            </div>
          )
        })}
      </section>
    </Fragment>
  )
}

export default SwitchComponents;