import React, { Fragment } from 'react'

import s from './Profile.module.css'


function Profile(props) {
  return (
    <Fragment>
      <section className={s.currentUserProfile}>
        <img src={props.currentUser.photo} alt="" />
        <ul>
          <li> <span> @mail:</span> {props.currentUser.mail}</li>
          <li><span>Name:</span> {props.currentUser.name} {props.currentUser.surname}</li>
          <li><span>Adress:</span> {props.currentUser.adress}</li>
          <li><span>Money:</span> {props.currentUser.money}</li>
        </ul>
      </section>
    </Fragment>
  );
}

export default Profile;