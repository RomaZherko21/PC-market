import React, { Fragment, useRef, useState } from "react";
import s from "./Profile.module.css";
import { User } from "../../../types/userTypes";

type PropsType = {
  currentUser: User;

  onProfileNameChange: (str: string) => void;
  onProfileAdressChange: (str: string) => void;
  onProfileMoneyChange: (str: string) => void;
  putNewUserProfileInfoThunkCreator: (user: User) => void;
};

const Profile: React.FC<PropsType> = ({
  currentUser,
  onProfileNameChange,
  onProfileAdressChange,
  onProfileMoneyChange,
  putNewUserProfileInfoThunkCreator,
}) => {
  const [submitBtn, showSubmitBtn] = useState(false);

  let ul: any = useRef();
  function onDisabled(): void {
    showSubmitBtn(!submitBtn);
    for (let item of ul.current.children) {
      if (item.children[1])
        item.children[1].disabled = !item.children[1].disabled;
    }
  }

  function submitChanges(): void {
    onDisabled();
    putNewUserProfileInfoThunkCreator(currentUser);
  }
  return (
    <Fragment>
      <section className={s.currentUserProfile}>
        <i className="fas fa-wrench" onClick={onDisabled}></i>
        <img src={currentUser.photo} alt="" />
        <ul ref={ul}>
          <li>
            {" "}
            <span>@mail: </span> {currentUser.mail}{" "}
          </li>
          <li>
            <span>Name: </span>
            <input
              value={currentUser.name}
              onChange={(e) => onProfileNameChange(e.target.value)}
              type="text"
              disabled={true}
            />{" "}
          </li>
          <li>
            <span>Adress:</span>
            <input
              value={currentUser.adress}
              onChange={(e) => onProfileAdressChange(e.target.value)}
              type="text"
              disabled={true}
            />{" "}
          </li>
          <li>
            <span>Money: </span>$
            <input
              value={currentUser.money}
              onChange={(e) => onProfileMoneyChange(e.target.value)}
              type="text"
              disabled={true}
            />{" "}
          </li>
        </ul>
        {submitBtn ? <button onClick={submitChanges}>Сохранить</button> : ""}
      </section>
    </Fragment>
  );
};

export default Profile;
