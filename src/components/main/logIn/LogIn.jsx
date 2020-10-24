import React from 'react'
import s from './LogIn.module.css'

const LogIn = (props) => {
  return (
    <section className={s.regComponent}>
      <form action="">
        <input type="text" placeholder='@mail' value={props.state.currentLogInInfo.mail} onChange={(e) => props.onLogInMailTyping(e.target.value)} />
        <input type="password" autoComplete="off" placeholder='Password' value={props.state.currentLogInInfo.password} onChange={(e) => props.onLogInPasswordTyping(e.target.value)} />
        <button onClick={(e) => {
          e.preventDefault();
          props.onLogIn(props.allUsers)
        }}>Login</button>
        <label>{props.state.wrongData}</label>
      </form>
    </section>
  )
}

export default LogIn;