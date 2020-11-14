import React, { Fragment } from 'react'


const HowWeWork = () => {



  return (
    <Fragment>
      <h1 className='mainTitle'>Как мы работаем</h1>
      <section className='infoSection'>
        <div className="infoBlock">
          <i className="far fa-hand-point-up"></i>
          <h2>Определяемся с товаром</h2>
          <p>Определяем, что Вам больше  подойдет, а главное что выгоднее</p>
        </div>
        <div className="infoBlock">
          <i className="fas fa-hand-holding-usd"></i>
          <h2>Оплата</h2>
          <p>Оплата по приезду курьера</p>
        </div>
        <div className="infoBlock">
          <i className="fas fa-truck"></i>
          <h2>Бесплатная доставка</h2>
          <p>Доставим в любую точку Ташкента за 1 час БЕСПЛАТНО</p>
        </div>
      </section>
    </Fragment>
  )


}

export default HowWeWork;