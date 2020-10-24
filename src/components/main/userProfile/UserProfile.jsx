import React from 'react'

import s from './UserProfile.module.css'



function UserProfile(props) {
  return (
    <section className={s.allUsers}>
     <h1>{props.state.user.fullName}</h1>
    </section>
  );
}

export default UserProfile;