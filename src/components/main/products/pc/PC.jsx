import React from 'react'

import s from '../Products.module.css';
import createGoodsList from '../createGoodsList'

const PC = (props) => {
  return (
    <section className={s.allProducts}>
      {props.computers.map(item => {
        return createGoodsList(item)
      })}
    </section>
  )
}

export default PC;