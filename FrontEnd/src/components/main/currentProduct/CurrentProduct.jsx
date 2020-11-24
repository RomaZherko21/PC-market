import React from 'react'

import s from './CurrentProduct.module.css'


function ShowUsers(props) {

  function makeDescription(description) {
    let ul = [];
    for (let key in description) {
      ul.push(<li key={key}><span>{key}:</span> {description[key]}</li>);
    }
    return ul;
  }

  return (
    <section className={s.currentProduct} >
      <img src={props.currentProduct.img} alt="" />
      <div className={s.productDescription}>
        <h1>{props.currentProduct.name}</h1>
        <h2>{props.currentProduct.mainDescription}</h2>
        <h1>Цена <span>{props.currentProduct.price}руб.</span></h1>
        <ul>
          {makeDescription(props.currentProduct.description)}
        </ul>
        <h3>Гарантия: <span>{props.currentProduct.warranty}</span></h3>
        <div className={s.store} onClick={() => props.addShoppingCartGood(props.currentProduct)}>
          В корзину
        </div>
      </div>
    </section>
  );
}

export default ShowUsers;