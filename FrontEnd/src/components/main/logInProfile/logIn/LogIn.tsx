import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import s from "./LogIn.module.css";
import { User } from "../../../../types/userTypes";

type PropsType = {
  currentLogInInfo:{mail:string,password:string},
  currentUser:User,
  wrongData: string | undefined,

  onLogInMailTyping: (str: string) => void;
  onLogInPasswordTyping: (str: string) => void;
  getUserThunkCreator: (currentLogInInfo: {mail:string,password:string}) => void;
};

const LogIn: React.FC<PropsType> = ({
  currentLogInInfo,
  currentUser,
  wrongData,
  onLogInMailTyping,
  onLogInPasswordTyping,
  getUserThunkCreator,
}) => {
  let history = useHistory();
  async function onSubmit(e:any) {
    e.preventDefault();
    let res:any = await getUserThunkCreator(currentLogInInfo);
    if (!res.message) history.push("/profile");
  }
  return (
    <section className={s.regComponent}>
      <form action="">
        <input
          type="text"
          placeholder="@mail"
          value={currentLogInInfo.mail}
          onChange={(e) => onLogInMailTyping(e.target.value)}
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          value={currentLogInInfo.password}
          onChange={(e) => onLogInPasswordTyping(e.target.value)}
        />
        <button
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          Login
        </button>
        <label>{wrongData}</label>
        <NavLink className={s.ref} to="/logInProfile/registration">
          Registration
        </NavLink>
      </form>
    </section>
  );
};

export default LogIn;
