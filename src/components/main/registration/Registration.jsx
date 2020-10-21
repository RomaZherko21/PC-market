import React from 'react'
import s from './Registration.module.css'

const Registration = (props) => {

  return (
    <section className={s.regComponent}>
      <form action="">
        <input type="text" placeholder='Name' value={props.currentRegistrationInfo.name} onChange={(e) => props.onNameTyping(e.target.value)} />
        <input type="text" placeholder='Surname' value={props.currentRegistrationInfo.surname} onChange={(e) => props.onSurnameTyping(e.target.value)} />
        <input type="text" placeholder='@mail' value={props.currentRegistrationInfo.mail} onChange={(e) => props.onMailTyping(e.target.value)} />
        <input type="text" placeholder='Adress' value={props.currentRegistrationInfo.adress} onChange={(e) => props.onAdressTyping(e.target.value)} />
        <input type="password" autoComplete="off" placeholder='Password' value={props.currentRegistrationInfo.password} onChange={(e) => props.onPasswordTyping(e.target.value)} />
        <input type="password" autoComplete="off" placeholder='Repeat password' value={props.currentRegistrationInfo.repeatPassword} onChange={(e) => props.onRepeatPasswordTyping(e.target.value)}/>
        <button onClick={(e) => {
          e.preventDefault();
          props.onSubmit()
        }}>Register</button>
      </form>
    </section>
  )
}

export default Registration;