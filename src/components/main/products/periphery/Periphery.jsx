import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const Periphery = (props) => {
  return (
    <section className={s.allProducts}>
      {props.periphery.map(item => {
        return createGoodsList(item)
      })}
    </section>
  )
}

export default Periphery;