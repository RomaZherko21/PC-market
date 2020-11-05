import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const SearchedProducts = (props) => {
  return (
    <section className={s.allProducts}>
      {props.searchedProducts.map(item => {
        return createGoodsList(item, props.addShoppingCartGood, props.showCurrentProduct)
      })}
    </section>
  )
}

export default SearchedProducts;