import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const Modules = (props) => {
  return (
    <section className={s.allProducts}>
      {props.modules.map(item => {
        return createGoodsList(item, props.addShoppingCartGood)
      })}
    </section>
  )
}

export default Modules;