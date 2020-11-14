import React, { Fragment } from "react";
import Slider from "react-slick";
import s from './Discounts.module.css';

import { NavLink } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Discounts = (props) => {

    let settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        slidesToScroll: 4,
        slidesToShow: 4,
        arrows: true,
        draggable: false,
    };
    if (document.documentElement.clientWidth < 1230) { settings.slidesToScroll = 3; settings.slidesToShow = 3 }
    if (document.documentElement.clientWidth < 850) { settings.slidesToScroll = 2; settings.slidesToShow = 2 }
    if (document.documentElement.clientWidth < 500) { settings.slidesToScroll = 1; settings.slidesToShow = 1 }

    function OneProduct(name, price, discountPrice, img, description, key, good,showCurrentProduct) {
        return (
            <div className={s.oneProduct} key={key}>
                <div className={s.saleIcon}>Распродажа!</div>
                <NavLink to="/currentProduct">
                    <div className={s.productDesription} onClick={()=>{showCurrentProduct && showCurrentProduct(good)}}>
                        <img src={img} alt="" />
                        {description}
                    </div>
                </NavLink>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <h2>{price}</h2>
                <h1 className={s.discountPrice}>{discountPrice}</h1>
                <div className={s.store} onClick={() => props.addShoppingCartGood(good)}>В корзину</div>
            </div>
        )
    }
    return (
        <Fragment>
            <h1 className='mainTitle'>Товары по скидке</h1>
            <div className={s.container}>
                <Slider {...settings}>
                    {props.discountGoods.map((item, id) => {
                        return OneProduct(item.name, item.prevPrice, item.discountPrice, item.img, item.description(), item.name, item, props.showCurrentProduct)
                    })}
                </Slider>
            </div>
        </Fragment>
    )
}

export default Discounts;