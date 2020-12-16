import React, { Fragment } from "react";
import Slider from "react-slick";
import s from "./Discounts.module.css";
import { NavLink } from "react-router-dom";
import {product} from '../../../../types/productTypes'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type PropsType = {
  discounts: Array<product>;
  getNewGoodsThunkCreator: (productsType: string) => () => void;
  showCurrentProduct: (item: {}) => void;
  addShoppingCartGood: (item: {}) => void;
};
type Good = {
  id: string;
  img: string;
  description: {};
  name: string;
  prevPrice: string;
  discountPrice: string;
  price?:number;
  mainDescription?: string;
};

const Discounts: React.FC<PropsType> = ({
  discounts,
  getNewGoodsThunkCreator,
  showCurrentProduct,
  addShoppingCartGood,
}) => {
  if (discounts.length === 0) {
    getNewGoodsThunkCreator("/discounts");
  }

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
  if (document.documentElement.clientWidth < 1230) {
    settings.slidesToScroll = 3;
    settings.slidesToShow = 3;
  }
  if (document.documentElement.clientWidth < 850) {
    settings.slidesToScroll = 2;
    settings.slidesToShow = 2;
  }
  if (document.documentElement.clientWidth < 500) {
    settings.slidesToScroll = 1;
    settings.slidesToShow = 1;
  }

  function OneProduct(item: Good, showCurrentProduct: (item: {}) => void) {
    return (
      <div className={s.oneProduct} key={item.id}>
        <div className={s.saleIcon}>Распродажа!</div>
        <NavLink to="/currentProduct">
          <div
            className={s.productDesription}
            onClick={() => {
              showCurrentProduct && showCurrentProduct(item);
            }}
          >
            <img src={item.img} alt="" />
            <ul>
              {Object.values(item.description).map((item: any, id) => {
                return <li key={id}>{item}</li>;
              })}
            </ul>
          </div>
        </NavLink>
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <h2>{item.prevPrice}</h2>
        <h1 className={s.discountPrice}>{item.discountPrice}</h1>
        <div className={s.store} onClick={() => addShoppingCartGood(item)}>
          В корзину
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <h1 className="mainTitle">Товары по скидке</h1>
      <div className={s.container}>
        <Slider {...settings}>
          {discounts.map((item:any) => {
            return OneProduct(item, showCurrentProduct);
          })}
        </Slider>
      </div>
    </Fragment>
  );
};

export default Discounts;
