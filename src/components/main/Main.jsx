import React, { } from "react";
import s from './Main.module.css';
import { Route } from "react-router-dom";

import NavBar from './navBar/NavBar'
import MainPage from './mainPage/MainPage'
import Products from './products/Products'



const Main = (props) => {

    return (
            <section className={s.main}>
                <NavBar />
                <Route exact  path='/'><MainPage discountGoods={props.state.mainPage.discountGoods} comments={props.state.mainPage.comments}/></Route>
                <Route path='/products'><Products /></Route>
            </section>
    )
}

export default Main;