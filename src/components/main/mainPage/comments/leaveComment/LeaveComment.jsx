import React, { } from 'react'

import {addCommentActionCreator} from '../../../../../redux/redux-store'

import s from './LeaveComment.module.css';




const LeaveComment = (props) => {

  let newInputElem = React.createRef();
  let newTextAreaElem = React.createRef();

  function handleClick() {
    if (newInputElem.current.value !== '' && newTextAreaElem.current.value !== '') {
      props.dispatch(addCommentActionCreator(newInputElem.current.value, newTextAreaElem.current.value ));
    }
    newTextAreaElem.current.value = '';
    newInputElem.current.value = '';
  }


  return (
    <div>
      <h1 className='mainTitle'>Оставьте комментарий</h1>
      <div className={s.commentForm}>
        <label htmlFor={s.formName}>Введите имя</label>
        <input className={s.formName} type="text" ref={newInputElem} />
        <label htmlFor={s.formComment}>Введите комментарий</label>
        <textarea className={s.formComment} type="text" ref={newTextAreaElem} />
        <button onClick={handleClick}>Отправить</button>
      </div>
    </div>
  )


}

export default LeaveComment;