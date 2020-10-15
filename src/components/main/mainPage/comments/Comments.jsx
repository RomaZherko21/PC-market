import React, { Fragment } from 'react'

import LeaveComment from './leaveComment/LeaveComment'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './Comments.module.css';




const Comments = (props) => {
  let settings = {
    dots: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  function makeComment({ photo, author, text }) {
    return (
      <div className={s.oneComment} key={author}>
        <div>
          <img src={photo} alt="" />
          <h2>{author}</h2>
        </div>
        <p>{text}</p>
      </div>
    )
  }


  return (
    <Fragment>
      <h1 className='mainTitle'>Что говорят о нас</h1>
      <div className={s.carousel}>
        <Slider {...settings}>
          {props.comments.map(item => {
            return makeComment(item)
          })}
        </Slider>
      </div>
      <LeaveComment/>

    </Fragment>
  )


}

export default Comments;