import React from 'react'
import s from './Registration.module.css'

const Registration = (props) => {
  return (
    <section className={s.regComponent}>
      <form action="">
        <input id='name' type="text" placeholder='Name' value={props.state.currentRegistrationInfo.name} onChange={(e) => props.onNameTyping(e.target.value)} onBlur={()=>{props.formValidation()}}/>
        <label htmlFor='name'>{props.state.errors.name ? props.state.errors.name : ''}</label>
        <input type="text" placeholder='Surname' value={props.state.currentRegistrationInfo.surname} onChange={(e) => props.onSurnameTyping(e.target.value)} onBlur={()=>{props.formValidation()}}/>
        <label htmlFor='name'>{props.state.errors.surname ? props.state.errors.surname : ''}</label>
        <input type="text" placeholder='@mail' value={props.state.currentRegistrationInfo.mail} onChange={(e) => props.onMailTyping(e.target.value)} onBlur={()=>{props.formValidation()}}/>
        <label htmlFor='name'>{props.state.errors.mail ? props.state.errors.mail : ''}</label>
        <input type="text" placeholder='Adress' value={props.state.currentRegistrationInfo.adress} onChange={(e) => props.onAdressTyping(e.target.value)} onBlur={()=>{props.formValidation()}}/>
        <label htmlFor='name'>{props.state.errors.adress ? props.state.errors.adress : ''}</label>
        <input type="password" autoComplete="off" placeholder='Password'  value={props.state.currentRegistrationInfo.password} onChange={(e) => props.onPasswordTyping(e.target.value)} onBlur={()=>{props.formValidation()}}/>
        <label htmlFor='name'>{props.state.errors.password ? props.state.errors.password : ''}</label>
        <input type="password" autoComplete="off" placeholder='Repeat password' value={props.state.currentRegistrationInfo.repeatPassword} onChange={(e) => props.onRepeatPasswordTyping(e.target.value)} onBlur={()=>{props.formValidation()}}/>
        <label htmlFor='name'>{props.state.errors.repeatPassword ? props.state.errors.repeatPassword : ''}</label>
        <button onClick={(e) => {
          e.preventDefault();
          props.formValidation();
          props.onSubmit()
        }}>Register</button>
      </form>
    </section>
  )
}

export default Registration;