import React, { Fragment } from 'react'
import s from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <Fragment>
      <h1 className='mainTitle'>Наша команда</h1>
      <section className={s.aboutUs}>
        <div className={s.ourTeam}>
          <div>
            <img src="https://pcmarket.uz/wp-content/uploads/2020/05/user-1.jpg" alt="" />
            <p>Константин</p>
            <p>Основатель и генеральный директор</p>
          </div>
          <div>
            <img src="https://pcmarket.uz/wp-content/uploads/2020/05/user-2.jpg" alt="" />
            <p>Настя</p>
            <p>Глава рекламного отдела</p>
          </div>
          <div>
            <img src="https://pcmarket.uz/wp-content/uploads/2020/05/user-3.jpg" alt="" />
            <p>Владимир</p>
            <p>Глава отдела продаж</p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default AboutUs;