import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const Printer = (props) => {
  return (
    <section className={s.allProducts}>
      {props.printers.map(item => {
        return createGoodsList(item, props.addShoppingCartGood, props.showCurrentProduct)
      })}
    </section>
  )
}

export default Printer;