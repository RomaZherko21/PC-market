import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const Laptop = (props) => {
  return (
    <section className={s.allProducts}>
      {props.laptops.map(item => {
        return createGoodsList(item, props.addShoppingCartGood)
      })}
    </section>
  )
}

export default Laptop;