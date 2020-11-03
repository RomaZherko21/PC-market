import React from 'react'

import s from './UserProfile.module.css'



function UserProfile(props) {
  return (
    <section className={s.currentUserProfile}>
      <img src={props.state.user.photos && props.state.user.photos.small ? props.state.user.photos.small: 'https://svgsilh.com/svg/2098873.svg'} alt="" />
      <ul>
        <li> <span> Name:</span> {props.state.user.fullName}</li>
        <li><span>About:</span> {props.state.user.aboutMe || 'nothing'}</li>
        <li><span>Looking For a Job:</span> {props.state.user.lookingForAJob ? 'Yep' : 'No'}</li>
      </ul>
    </section>
  );
}

export default UserProfile;