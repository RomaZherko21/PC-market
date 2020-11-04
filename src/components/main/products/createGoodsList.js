import React from "react";
import s from "./Products.module.css";
import { NavLink } from "react-router-dom";

export default function createGoodsList(item, addShoppingCartGood, showCurrentProduct) {
  return (
    <div className={s.oneProduct} key={item.id}>
      <NavLink to="/currentProduct">
        <div className={s.productDesription} onClick={()=>{showCurrentProduct && showCurrentProduct(item)}}>
          <img src={item.img} alt="" />
          <p>{item.mainDescription}</p>
        </div>
      </NavLink>
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <h2>{item.price} руб.</h2>
      <div className={s.store} onClick={() => addShoppingCartGood(item)}>
        В корзину
      </div>
    </div>
  );
}
