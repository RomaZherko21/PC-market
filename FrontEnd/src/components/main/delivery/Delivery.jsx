import React from 'react'
import s from './Delivery.module.css'

const Delivery = () => {
  return (
    <section className={s.delivery}>
      <div className={s.info}>
        <p>Выбрав необходимые товары и оформив заказ в Интернет магазине Pc Market, вы можете оплатить и получить товары не выходя из дома или офиса.</p>
        <p>Доставка по Ташкенту бесплатная.</p>
        <p>Стоимость доставки в города Узбекистана осуществляется по тарифному плану, в соответсвии с деталями заказа, уточнять у оператора.</p>
      </div>
      <div className={s.sum}>
        <h1>0 <br /> руб</h1>
        <h2>ДОСТАВИМ БЕСПЛАТНО ПО ТАШКЕНТУ</h2>
      </div>
    </section>
  )
}

export default Delivery;