import React from 'react'
import s from './ShowUsers.module.css'
import user from '../../../images/user.svg'


function ShowUsers(props){
  return (
    <section className={s.allUsers}>
      {props.state.usersList.map(item => {
        return (
          <div className={s.oneUser}>
            <img src={item.photos.small != null ? item.photos.small : user} alt="" />
            {item.name}
          </div>
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