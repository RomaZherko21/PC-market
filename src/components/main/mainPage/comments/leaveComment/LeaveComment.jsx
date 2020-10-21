import React, { } from 'react'


import s from './LeaveComment.module.css';




const LeaveComment = (props) => {

  return (
    <div>
      <h1 className='mainTitle'>Оставьте комментарий</h1>
      <div className={s.commentForm}>
        <label htmlFor={s.formName}>Введите имя</label>
        <input className={s.formName} type="text" value={props.currentComment.name} onChange={(e)=>props.onNameTyping(e.target.value)} />
        <label htmlFor={s.formComment}>Введите комментарий</label>
        <textarea className={s.formComment} type="text" value={props.currentComment.text} onChange={(e)=>props.onTextTyping(e.target.value)} />
        <button onClick={props.handleClick}>Отправить</button>
      </div>
    </div>
  )


}

export default LeaveComment;