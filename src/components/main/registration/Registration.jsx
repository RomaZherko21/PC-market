import React from 'react'
import s from './Registration.module.css'

const Registration = (props) => {

console.log(props.currentRegistrationInfo)

  return (
    <section className={s.regComponent}>
      <form action="">
        <input type="text" placeholder='Name' value={props.currentRegistrationInfo.name} onChange={(e)=>props.onNameTyping(e.target.value)} />
        <input type="text" placeholder='Surname' />
        <input type="text" placeholder='@mail' />
        <input type="text" placeholder='Adress' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Repeat password'/>
        <button>Register</button>
      </form>
    </section>
  )
}

export default Registration;