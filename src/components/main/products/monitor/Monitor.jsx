import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const Monitor = (props) => {
  return (
    <section className={s.allProducts}>
      {props.monitors.map(item => {
        return createGoodsList(item, props.addShoppingCartGood)
      })}
    </section>
  )
}

export default Monitor;