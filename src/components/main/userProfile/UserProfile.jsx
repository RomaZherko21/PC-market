import React from 'react'

import s from './UserProfile.module.css'



function UserProfile(props) {
  return (
    <section className={s.allUsers}>
     <ul>
       <li>Name: {props.state.user.fullName}</li>
       <li>About: {props.state.user.aboutMe || 'nothing'}</li>
       <li>Looking For a Job: {props.state.user.lookingForAJob ? 'Yep':'No'}</li>
     </ul>
    </section>
  );
}

export default UserProfile;