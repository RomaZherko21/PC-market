import React, { } from "react";
import s from './Main.module.css';
import { Route } from "react-router-dom";

import NavBar from './navBar/NavBar'
import MainPage from './mainPage/MainPage'
import Products from './products/Products'



const Main = (props) => {

    debugger;
    return (
        <section className={s.main}>
            
            <NavBar />
            <Route exact path='/'><MainPage discountGoods={props.store.getState().mainPage.discountGoods} comments={props.store.getState().mainPage.comments} dispatch={props.store.dispatch} /></Route>
            <Route path='/products'><Products /></Route>
        </section>
    )
}

export default Main;