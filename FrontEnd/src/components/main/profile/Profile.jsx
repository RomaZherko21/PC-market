import React, { Fragment, useRef, useState } from 'react'
import s from './Profile.module.css'

function Profile(props) {

  const [submitBtn, showSubmitBtn] = useState(false);

  let ul = useRef()
  function onDisabled() {
    showSubmitBtn(!submitBtn)
    for (let item of ul.current.children) {
      if (item.children[1]) item.children[1].disabled = !item.children[1].disabled;
    }
  }

  function submitChanges() {
    onDisabled()
    props.putNewUserProfileInfoThunkCreator(props.currentUser);
  }
  console.log(props.currentUser)
  return (
    <Fragment>
      <section className={s.currentUserProfile}>
        <i className="fas fa-wrench" onClick={onDisabled}></i>
        <img src={props.currentUser.photo} alt="" />
        <ul ref={ul}>
          <li> <span >@mail:  </span> {props.currentUser.mail} </li>
          <li><span >Name:  </span><input value={props.currentUser.name} onChange={(e) => props.onProfileNameChange(e.target.value)} type="text" disabled={true} /> </li>
          <li><span >Adress:</span><input value={props.currentUser.adress} onChange={(e) => props.onProfileAdressChange(e.target.value)} type="text" disabled={true} /> </li>
          <li><span>Money:  </span>$<input value={props.currentUser.money} onChange={(e) => props.onProfileMoneyChange(e.target.value)} type="text" disabled={true} /> </li>
        </ul>
        {submitBtn ? <button onClick={submitChanges}>Сохранить</button> : ''}
      </section>
    </Fragment>
  );
}

export default Profile;