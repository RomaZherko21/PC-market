import React from 'react'
import s from './LogIn.module.css'

const LogIn = (props) => {
  return (
    <section className={s.regComponent}>
      <form action="">
        <input type="text" placeholder='@mail' value={props.state.currentLogInInfo.mail} onChange={(e) => props.onLogInMailTypingAC(e.target.value)} />
        <input type="password" autoComplete="off" placeholder='Password' value={props.state.currentLogInInfo.password} onChange={(e) => props.onLogInPasswordTypingAC(e.target.value)} />
        <button onClick={(e) => {
          e.preventDefault();
          props.onLogInAC(props.allUsers)
        }}>Log In</button>
        <label>{props.state.wrongData}</label>
      </form>
    </section>
  )
}

export default LogIn;