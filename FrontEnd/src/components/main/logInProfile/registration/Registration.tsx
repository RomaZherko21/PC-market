import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import s from "./Registration.module.css";
import { User } from "../../../../types/userTypes";

type PropsType = {
  currentRegistrationInfo: User;
  errors: any;
  serverResponse: { err: boolean; message: string };

  onNameTyping: (str: string) => void;
  onSurnameTyping: (str: string) => void;
  onMailTyping: (str: string) => void;
  onAdressTyping: (str: string) => void;
  onPasswordTyping: (str: string) => void;
  onPhotoTyping: (str: string) => void;
  onRepeatPasswordTyping: (str: string) => void;
  postClientThunkCreator: (user: User) => any;
};

const Registration: React.FC<PropsType> = ({
  currentRegistrationInfo,
  errors,
  serverResponse,
  onNameTyping,
  onSurnameTyping,
  onMailTyping,
  onAdressTyping,
  onPasswordTyping,
  onPhotoTyping,
  onRepeatPasswordTyping,
  postClientThunkCreator,
}) => {
  let history = useHistory();
  async function onSubmitHandler(event: any) {
    event.preventDefault();
    for (let key in errors) {
      if (errors[key] !== "") return;
    }
    let response = await postClientThunkCreator(currentRegistrationInfo);
    if (!response.data.err) {
      history.push("/logInProfile/logIn");
    }
  }

  return (
    <section className={s.regComponent}>
      <form action="">
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={currentRegistrationInfo.name}
          onChange={(e) => onNameTyping(e.target.value)}
        />
        <label htmlFor="name">{errors.name ? errors.name : ""}</label>
        <input
          type="text"
          id="surname"
          placeholder="Surname"
          value={currentRegistrationInfo.surname}
          onChange={(e) => onSurnameTyping(e.target.value)}
        />
        <label htmlFor="surname">{errors.surname ? errors.surname : ""}</label>
        <input
          type="text"
          id="mail"
          placeholder="@mail"
          value={currentRegistrationInfo.mail}
          onChange={(e) => onMailTyping(e.target.value)}
        />
        <label htmlFor="mail">
          {errors.mail || serverResponse.err
            ? errors.mail || serverResponse.message
            : ""}
        </label>
        <input
          type="text"
          id="adress"
          placeholder="Adress"
          value={currentRegistrationInfo.adress}
          onChange={(e) => onAdressTyping(e.target.value)}
        />
        <label htmlFor="adress">{errors.adress ? errors.adress : ""}</label>
        <input
          type="text"
          id="photo"
          autoComplete="off"
          placeholder="photo URL"
          value={currentRegistrationInfo.photo}
          onChange={(e) => onPhotoTyping(e.target.value)}
        />
        <label htmlFor="photo">{errors.photo ? errors.photo : ""}</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          placeholder="Password"
          value={currentRegistrationInfo.password}
          onChange={(e) => onPasswordTyping(e.target.value)}
        />
        <label htmlFor="password">
          {errors.password ? errors.password : ""}
        </label>
        <input
          type="password"
          id="repeatPassword"
          autoComplete="off"
          placeholder="Repeat password"
          value={currentRegistrationInfo.repeatPassword}
          onChange={(e) => onRepeatPasswordTyping(e.target.value)}
        />
        <label htmlFor="repeatPassword">
          {errors.repeatPassword ? errors.repeatPassword : ""}
        </label>
        <button onClick={(e) => onSubmitHandler(e)}>Register</button>
        <NavLink className={s.ref} to="/logInProfile/logIn">
          LogIn
        </NavLink>
      </form>
    </section>
  );
};

export default Registration;
