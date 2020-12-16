import React, { Fragment } from 'react'

import s from './Comments.module.css'

type CommentType = {
  photo: string;
  author: string;
  text: string;
};
type PropsType = {
  comments: Array<CommentType>;
  onPrevCommentPage: ()=>void;
  onNextCommentPage: ()=>void;
};

const ShowUsers: React.FC<PropsType> = ({comments,onPrevCommentPage,onNextCommentPage})=> {
  return (
    <Fragment>
      <h1 className='mainTitle'>Отзывы</h1>
      <section className={s.comments}>
        {comments.map(item => {
          return (
            <div className={s.oneComment} key={item.photo}>
              <img src={item.photo} alt="" />
              <h3>{item.author}</h3>
              <p>{item.text}</p>
            </div>
          )
        })}
      </section>
      <div className={s.allUsersButtons}>
        <button onClick={onPrevCommentPage}>Previous</button>
        <button onClick={onNextCommentPage}>Next</button>
      </div>
    </Fragment>
  );
}

export default ShowUsers;