import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const Accessories = (props) => {
  return (
    <section className={s.allProducts}>
      {props.accessories.map(item => {
        return createGoodsList(item, props.addShoppingCartGood, props.showCurrentProduct)
      })}
    </section>
  )
}

export default Accessories;