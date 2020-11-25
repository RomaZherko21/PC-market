import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import s from './Registration.module.css'

const Registration = (props) => {

  let history = useHistory();
  async function onSubmitHandler(event) {
    event.preventDefault();
    for (let key in props.state.errors) {
      if (props.state.errors[key] !== "") return;
    }
    let response = await props.postClientThunkCreator(props.state.currentRegistrationInfo);
    if (!response.data.err) {
      history.push("/logInProfile/logIn")
    }
  }

  return (
    <section className={s.regComponent}>
      <form action="">
        <input id='name' type="text" placeholder='Name' value={props.state.currentRegistrationInfo.name} onChange={(e) => props.onNameTyping(e.target.value)} />
        <label htmlFor='name'>{props.state.errors.name ? props.state.errors.name : ''}</label>
        <input type="text" id='surname' placeholder='Surname' value={props.state.currentRegistrationInfo.surname} onChange={(e) => props.onSurnameTyping(e.target.value)} />
        <label htmlFor='surname'>{props.state.errors.surname ? props.state.errors.surname : ''}</label>
        <input type="text" id='mail' placeholder='@mail' value={props.state.currentRegistrationInfo.mail} onChange={(e) => props.onMailTyping(e.target.value)} />
        <label htmlFor='mail'>{(props.state.errors.mail || props.state.serverResponse.err) ? (props.state.errors.mail || props.state.serverResponse.message) : ''}</label>
        <input type="text" id='adress' placeholder='Adress' value={props.state.currentRegistrationInfo.adress} onChange={(e) => props.onAdressTyping(e.target.value)} />
        <label htmlFor='adress'>{props.state.errors.adress ? props.state.errors.adress : ''}</label>
        <input type="text" id='photo' autoComplete="off" placeholder='photo URL' value={props.state.currentRegistrationInfo.photo} onChange={(e) => props.onPhotoTyping(e.target.value)} />
        <label htmlFor='photo'>{props.state.errors.photo ? props.state.errors.photo : ''}</label>
        <input type="password" id='password' autoComplete="off" placeholder='Password' value={props.state.currentRegistrationInfo.password} onChange={(e) => props.onPasswordTyping(e.target.value)} />
        <label htmlFor='password'>{props.state.errors.password ? props.state.errors.password : ''}</label>
        <input type="password" id='repeatPassword' autoComplete="off" placeholder='Repeat password' value={props.state.currentRegistrationInfo.repeatPassword} onChange={(e) => props.onRepeatPasswordTyping(e.target.value)} />
        <label htmlFor='repeatPassword'>{props.state.errors.repeatPassword ? props.state.errors.repeatPassword : ''}</label>
        <button onClick={(e) => onSubmitHandler(e)}>Register</button>
        <NavLink className={s.ref} to='/logInProfile/logIn'>LogIn</NavLink>
      </form>
    </section>
  )
}

export default Registration;