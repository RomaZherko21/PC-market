import React, { } from "react";
import s from './MainPage.module.css';

import Carousel from './carousel/Сarousel'
import DiscountsContainer from './discounts/DiscountsContainer'
import HowWeWork from './howWeWork/HowWeWork'
import ConfiguratorInfo from './configuratorInfo/ConfiguratorInfo'
import CommentsContainer from './comments/CommentsContainer'
import LeaveCommentContainer from './comments/leaveComment/LeaveCommentContainer'

const MainPage = () => {
    return (
        <section className={s.mainPage}>
            <Carousel />
            <DiscountsContainer />
            <HowWeWork />
            <ConfiguratorInfo />
            <CommentsContainer />
            <LeaveCommentContainer />
        </section>
    )
}

export default MainPage;