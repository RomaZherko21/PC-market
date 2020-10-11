import React, { } from "react";
import s from './Main.module.css';
import { Route } from "react-router-dom";

import Products from './products/Products'
import NavBar from './navBar/NavBar'
import Carousel from './carousel/Сarousel'


const Main = () => {

    return (
            <section className={s.main}>
                <NavBar />
                <Route exact  path='/'><Carousel /></Route>
                <Route path='/products'><Products /></Route>
            </section>
    )
}

export default Main;