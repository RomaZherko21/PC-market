import React, { Fragment } from 'react'

import s from './Comments.module.css'


function ShowUsers(props) {
  console.log(props.comments)
  return (
    <Fragment>
      <h1 className='mainTitle'>Отзывы</h1>
      <section className={s.comments}>
        {props.comments.map(item => {
          return (
            <div className={s.oneComment} key={item.photo}>
              <img src={item.photo} alt="" />
              <h3>{item.author}</h3>
              <p>{item.text}</p>
            </div>
          )
        })}
      </section>
    </Fragment>
  );
}

export default ShowUsers;