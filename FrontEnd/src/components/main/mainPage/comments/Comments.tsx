import React, { Fragment } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Comments.module.css";

type CommentType = {
  photo: string;
  author: string;
  text: string;
};
type PropsType = {
  comments: Array<CommentType>;
};

const Comments: React.FC<PropsType> = ({ comments }) => {
  let settings = {
    dots: false,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const MakeComment: React.FC<CommentType> = ({ photo, author, text }) => {
    return (
      <div className={s.oneComment} key={author}>
        <div>
          <img src={photo} alt="" />
          <h2>{author}</h2>
        </div>
        <p>{text}</p>
      </div>
    );
  };
  
  return (
    <Fragment>
      <h1 className="mainTitle">Что говорят о нас</h1>
      <div className={s.carousel}>
        <Slider {...settings}>
          {comments.map((item: CommentType) => {
            return MakeComment(item);
          })}
        </Slider>
      </div>
    </Fragment>
  );
};

export default Comments;
