import React, { } from 'react'


import s from './LeaveComment.module.css';




const LeaveComment = (props) => {

  let newInputElem = React.createRef();
  let newTextAreaElem = React.createRef();

  return (
    <div>
      <h1 className='mainTitle'>Оставьте комментарий</h1>
      <div className={s.commentForm}>
        <label htmlFor={s.formName}>Введите имя</label>
        <input className={s.formName} type="text" ref={newInputElem} />
        <label htmlFor={s.formComment}>Введите комментарий</label>
        <textarea className={s.formComment} type="text" ref={newTextAreaElem} />
        <button onClick={()=>{props.handleClick(newInputElem.current.value, newTextAreaElem.current.value)}}>Отправить</button>
      </div>
    </div>
  )


}

export default LeaveComment;