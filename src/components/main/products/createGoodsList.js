import React from 'react'
import s from './Products.module.css';

export default function createGoodsList(item, addShoppingCartGood) {
    return (
      <div className={s.oneProduct} key={item.id}>
        <div className={s.productDesription}>
          <img src={item.img} alt="" />
          <p>{item.mainDescription}</p>
        </div>
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <h2>{item.price} руб.</h2>
        <div className={s.store} onClick={()=>addShoppingCartGood(item)}>В корзину</div>
      </div>
    )
  }