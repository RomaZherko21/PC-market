import React from 'react'
import {product} from '../../../types/productTypes'
import s from './CurrentProduct.module.css'

type PropsType = {
  currentProduct: product;
  addShoppingCartGood: (currentProduct:product)=>void;
};

const CurrentProduct: React.FC<PropsType> = ({currentProduct, addShoppingCartGood}) => {

  function makeDescription(description:any) {
    let ul = [];
    for (let key in description) {
      ul.push(<li key={key}><span>{key}:</span> {description[key]}</li>);
    }
    return ul;
  }

  return (
    <section className={s.currentProduct} >
      <img src={currentProduct.img} alt="" />
      <div className={s.productDescription}>
        <h1>{currentProduct.name}</h1>
        <h2>{currentProduct.mainDescription}</h2>
        <h1>Цена <span>{currentProduct.price}руб.</span></h1>
        <ul>
          {makeDescription(currentProduct.description)}
        </ul>
        <h3>Гарантия: <span>{currentProduct.warranty}</span></h3>
        <div className={s.store} onClick={() => addShoppingCartGood(currentProduct)}>
          В корзину
        </div>
      </div>
    </section>
  );
}

export default CurrentProduct;