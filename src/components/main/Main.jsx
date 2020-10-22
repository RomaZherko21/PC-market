import React, { } from "react";
import s from './Main.module.css';
import { Route } from "react-router-dom";

import NavBar from './navBar/NavBar'
import MainPage from './mainPage/MainPage'
import Products from './products/Products'
import RegistrationContainer from './registration/RegistrationContainer'
import LogInContainer from './logIn/LogInContainer'


const Main = (props) => {

    return (
        <section className={s.main}>
            <NavBar />
            <Route exact path='/'><MainPage/></Route>
            <Route path='/products'><Products /></Route>
            <Route path='/userCabinet'><RegistrationContainer /></Route>
            <Route path='/logIn'><LogInContainer /></Route>
        </section>
    )
}

export default Main;