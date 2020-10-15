import React, { Fragment } from 'react'


import s from './LeaveComment.module.css';




const LeaveComment = (props) => {


  return (
    <div>
      <h1 className='mainTitle'>Оставьте комментарий</h1>
      <div className={s.commentForm}>
        <label htmlFor={s.formName}>Введите имя</label>
        <input className={s.formName} type="text" />
        <label htmlFor={s.formComment}>Введите комментарий</label>
        <textarea className={s.formComment} type="text" />
        <button>Отправить</button>
      </div>
    </div>
  )


}

export default LeaveComment;