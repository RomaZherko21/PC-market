import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import s from "./ShoppingCart.module.css";
import { product } from "../../../types/productTypes";
import { user } from "../../../types/userTypes";

type PropsType = {
  shoppingCart: {
    currentGood: product;
    fullPrice: number;
    shoppingCartGoods: Array<product>;
  };
  currentUser: user;

  removeShoppingCartGood: (item: product) => void;
  plusCurrentGoodAmount: (item: product) => void;
  minusCurrentGoodAmount: (item: product) => void;
};

const ShoppingCart: React.FC<PropsType> = ({
  shoppingCart,
  currentUser,
  removeShoppingCartGood,
  plusCurrentGoodAmount,
  minusCurrentGoodAmount,
}) => {
  return (
    <Fragment>
      <div className={s.shoppingCartInfo}>
        {!currentUser.name ? (
          <h1>
            Need To{" "}
            <NavLink to="/logInProfile/logIn" className={s.user}>
              LogIn
            </NavLink>
          </h1>
        ) : (
          <h1>
            {" "}
            Balance: <span>{currentUser.money}</span> руб.
          </h1>
        )}
        <h1>
          Full Price: <span>{shoppingCart.fullPrice}</span> руб.
        </h1>
      </div>
      <section className={s.shoppingCart}>
        {shoppingCart.shoppingCartGoods.map((item: product) => {
          return (
            <div className={s.oneProduct} key={item.id}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <h2>{item.price} руб.</h2>
              <div className={s.amount}>
                Кол-во: {item.amount}
                <div>
                  <i
                    className="fas fa-plus"
                    onClick={() => plusCurrentGoodAmount(item)}
                  ></i>
                  <i
                    className="fas fa-minus"
                    onClick={() => minusCurrentGoodAmount(item)}
                  ></i>
                </div>
              </div>
              <div
                className={s.delete}
                onClick={() => {
                  removeShoppingCartGood(item);
                }}
              >
                Удалить
              </div>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
