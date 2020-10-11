import React, {Fragment } from "react";
import s from './MainPage.module.css';
// import { Route } from "react-router-dom";




import Carousel from './carousel/Сarousel'
import Discounts from './discounts/Discounts'


const MainPage = () => {

    return (
            <section className={s.mainPage}>
                <Carousel/>
                <Discounts/>
            </section>
    )
}

export default MainPage;