import React, { } from "react";
import s from './Main.module.css';
import { Route } from "react-router-dom";

import NavBarContainer from './navBar/NavBarContainer'
import MainPage from './mainPage/MainPage'
import ProductsContainer from './products/ProductsContainer'
import LogInProfile from './logInProfile/LogInProfile'
import ShowUsersContainer from './showUsers/ShowUsersContainer'
import UserProfileContainer from './showUsers/userProfile/UserProfileContainer'
import ShoppingCartContainer from "./shoppingCart/ShoppingCartContainer";
import CommentsContainer from "./comments/CommentsContainer";
import ProfileContainer from './profile/ProfileContainer'
import Delivery from "./delivery/Delivery";
import AboutUs from "./aboutUs/AboutUs";

import Footer from '../footer/Footer'

const Main = (props) => {
    return (
        <section className={s.main}>
            <NavBarContainer />
            <Route exact path='/'><MainPage /></Route>
            <Route path={props.currentUser.name ? '/profile' : '/logInProfile'}>{props.currentUser.name ? <ProfileContainer /> : <LogInProfile />}</Route>
            <Route path='/showUsers'><ShowUsersContainer /></Route>
            <Route path='/userProfile/:userID?'><UserProfileContainer /></Route>
            <Route path='/shoppingCart'><ShoppingCartContainer /></Route>
            <Route path='/delivery'><Delivery /></Route>
            <Route path='/comments'><CommentsContainer /></Route>
            <Route path='/aboutUs'><AboutUs /></Route>
            <ProductsContainer />
            <Footer />
        </section>
    )
}

export default Main;