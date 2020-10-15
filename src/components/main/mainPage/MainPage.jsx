import React, { } from "react";
import s from './MainPage.module.css';




import Carousel from './carousel/Сarousel'
import Discounts from './discounts/Discounts'
import HowWeWork from './howWeWork/HowWeWork'
import ConfiguratorInfo from './configuratorInfo/ConfiguratorInfo'
import Comments from './comments/Comments'



const MainPage = (props) => {
    return (
            <section className={s.mainPage}>
                <Carousel/>
                <Discounts discountGoods={props.discountGoods}/>
                <HowWeWork />
                <ConfiguratorInfo />
                <Comments  comments={props.comments} addCommentHandle={props.addCommentHandle}/>
            </section>
    )
}

export default MainPage;