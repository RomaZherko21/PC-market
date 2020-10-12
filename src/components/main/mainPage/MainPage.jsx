import React, { } from "react";
import s from './MainPage.module.css';
// import { Route } from "react-router-dom";




import Carousel from './carousel/Сarousel'
import Discounts from './discounts/Discounts'



const MainPage = (props) => {

    return (
            <section className={s.mainPage}>
                <Carousel/>
                <Discounts discountGoods={props.discountGoods}/>
            </section>
    )
}

export default MainPage;