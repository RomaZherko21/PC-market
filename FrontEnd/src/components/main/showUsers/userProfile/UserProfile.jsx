import React from 'react'

import s from './UserProfile.module.css'

function UserProfile(props) {
  return (
    <section className={s.currentUserProfile}>
      <img src={props.currentUser.user.photo} alt="" />
      <ul>
        <li> <span> Name:</span> {props.currentUser.user.name}</li>
        <li><span>Surname:</span> {props.currentUser.user.surname}</li>
        <li><span>@mail:</span> {props.currentUser.user.mail}</li>
        <li><span>Adress:</span> {props.currentUser.user.adress}</li>
      </ul>
    </section>
  );
}

export default UserProfile;