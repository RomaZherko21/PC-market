import React from 'react'
import { NavLink } from 'react-router-dom';

import s from './ShowUsers.module.css'
import user from '../../../images/user.svg'


function ShowUsers(props) {
  return (
    <section className={s.allUsers}>
      {props.state.usersList.map(item => {
        return (
          <NavLink to={`/userProfile/${item.id}`}  key={item.id}>
            <div className={s.oneUser}>
              <img src={item.photos.small != null ? item.photos.small : user} alt="" />
              <h3>{item.name}</h3>
            </div>
          </NavLink>
        )
      })}
      <div className={s.allUsersButtons}>
        <button onClick={() => props.state.page !== 1 && props.onPageChange(props.state.page, -1)}>Previous</button>
        <button onClick={() => props.onPageChange(props.state.page, 1)}>Next</button>
      </div>
    </section>
  );
}

export default ShowUsers;