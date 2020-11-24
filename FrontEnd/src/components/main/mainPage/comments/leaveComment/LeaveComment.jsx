import React, { } from 'react'
import {NavLink} from 'react-router-dom'
import s from './LeaveComment.module.css';

const LeaveComment = (props) => {
  return (
    <div>
      <h1 className='mainTitle'>Оставьте комментарий</h1>
      <div className={s.commentForm}>
       {props.currentUser.name ? (
          <div className={s.currentUser}>
            <img src={props.currentUser.photo} alt=''/>
            <span>{props.currentUser.name}</span>
          </div>)
          : <NavLink to='/logInProfile/logIn' className={s.logRef}>Need to log in!</NavLink>}
        <label htmlFor={s.formComment}>Введите комментарий</label>
        <textarea className={s.formComment} type="text" value={props.currentComment.text} onChange={(e) => props.onTextTyping(e.target.value)} />
        <button onClick={props.currentUser.name && (()=>props.addComment(props.currentUser.name, props.currentUser.photo))}>Отправить</button>
      </div>
    </div>
  )
}

export default LeaveComment;