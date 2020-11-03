import React, { Fragment } from 'react'

import s from './Comments.module.css'


function ShowUsers(props) {
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
      <div className={s.allUsersButtons}>
        <button onClick={props.onPrevCommentPage}>Previous</button>
        <button onClick={props.onNextCommentPage}>Next</button>
      </div>
    </Fragment>
  );
}

export default ShowUsers;