import React, { } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './Сarousel.module.css';


import first from '../../../../images/mainCarousel/first.jpg';
import second from '../../../../images/mainCarousel/second.jpg';
import third from '../../../../images/mainCarousel/third.jpg';
import fourth from '../../../../images/mainCarousel/fourth.jpg';



const Carousel =()=> {
  
  let settings = {
    dots: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
};

    return (
      <div className={s.carousel}>
        <Slider {...settings}>
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
        <img src={fourth} alt="" />
      </Slider>
      </div>
    )
  

}

export default Carousel;