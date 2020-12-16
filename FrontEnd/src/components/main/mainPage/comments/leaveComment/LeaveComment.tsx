import React from "react";
import { NavLink } from "react-router-dom";
import s from "./LeaveComment.module.css";

type PropsType = {
  currentUser: { name: string; photo: string };
  currentComment: { text: string };
  addComment: (name: string, photo: string) => void;
  onTextTyping: (value: string) => void;
};

const LeaveComment: React.FC<PropsType> = ({
  currentUser,
  currentComment,
  addComment,
  onTextTyping,
}) => {
  return (
    <div>
      <h1 className="mainTitle">Оставьте комментарий</h1>
      <div className={s.commentForm}>
        {currentUser.name ? (
          <div className={s.currentUser}>
            <img src={currentUser.photo} alt="" />
            <span>{currentUser.name}</span>
          </div>
        ) : (
          <NavLink to="/logInProfile/logIn" className={s.logRef}>
            Need to log in!
          </NavLink>
        )}
        <label htmlFor={s.formComment}>Введите комментарий</label>
        <textarea
          className={s.formComment}
          value={currentComment.text}
          onChange={(e) => onTextTyping(e.target.value)}
        />
        <button
          onClick={() => {
            currentUser.name && addComment(currentUser.name, currentUser.photo);
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default LeaveComment;
