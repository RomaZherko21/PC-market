import React from 'react'

import s from './UserProfile.module.css'
import user from '../../../../images/user.svg'


function UserProfile(props) {
  return (
    <section className={s.currentUserProfile}>
      <img src={user} alt="" />
      <ul>
        <li> <span> Name:</span> {props.state.user.name}</li>
        <li><span>Surname:</span> {props.state.user.surname}</li>
        <li><span>@mail:</span> {props.state.user.mail}</li>
        <li><span>Adress:</span> {props.state.user.adress}</li>
      </ul>
    </section>
  );
}

export default UserProfile;