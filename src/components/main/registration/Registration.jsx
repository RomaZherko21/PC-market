import React from 'react'
import s from './Registration.module.css'

const Registration = (props) => {

console.log(props.currentRegistrationInfo)

  return (
    <section className={s.regComponent}>
      <form action="">
        <input type="text" placeholder='Name' value={props.currentRegistrationInfo.name} onChange={(e)=>props.onNameTyping(e.target.value)} />
        <input type="text" placeholder='Surname' value={props.currentRegistrationInfo.surname} onChange={(e)=>props.onSurnameTyping(e.target.value)}/>
        <input type="text" placeholder='@mail' value={props.currentRegistrationInfo.mail} onChange={(e)=>props.onMailTyping(e.target.value)} />
        <input type="text" placeholder='Adress' value={props.currentRegistrationInfo.adress} onChange={(e)=>props.onAdressTyping(e.target.value)} />
        <input type="password" placeholder='Password' value={props.currentRegistrationInfo.password} onChange={(e)=>props.onPasswordTyping(e.target.value)} />
        <input type="password" placeholder='Repeat password'/>
        <button>Register</button>
      </form>
    </section>
  )
}

export default Registration;