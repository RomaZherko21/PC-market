import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import s from './LogIn.module.css'

const LogIn = (props) => {
  let history = useHistory();
  async function onSubmit(e) {
    e.preventDefault();
    let res = await props.getUserThunkCreator(props.state.currentLogInInfo);
    if (!res.message) history.push("/profile")
  }
  return (
    <section className={s.regComponent}>
      <form action="">
        <input type="text" placeholder='@mail' value={props.state.currentLogInInfo.mail} onChange={(e) => props.onLogInMailTyping(e.target.value)} />
        <input type="password" autoComplete="off" placeholder='Password' value={props.state.currentLogInInfo.password} onChange={(e) => props.onLogInPasswordTyping(e.target.value)} />
        <button onClick={(e) => {onSubmit(e)}}>Login</button>
        <label>{props.state.wrongData}</label>
        <NavLink className={s.ref} to='/logInProfile/registration'>Registration</NavLink>
      </form>
    </section>
  )
}

export default LogIn;