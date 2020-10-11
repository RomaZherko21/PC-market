import React, { Fragment } from "react";
import Slider from "react-slick";
import s from './Discounts.module.css';
// import { Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Discounts = () => {
    let settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    function OneProduct(name, price, discountPrice, img, description) {
        
        return (
            <div className={s.oneProduct}>
                <div className={s.saleIcon}>Распродажа!</div>
                <div className={s.productDesription}>
                    <img src={img} alt="" />
                    <p>{description}</p>
                </div>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <h2>{price}</h2>
                <h1 className={s.discountPrice}>{discountPrice}</h1>
                <div className={s.store}>В корзину</div>
            </div>
        )
    }
    return (
        <div className={s.container}>
            <Slider {...settings}>
                <div className={s.oneSliderLevel}>
                    {OneProduct('Ноутбук Apple MacBook Air 13" (2017 год)', '2800 руб.', '2550 руб.', 'http://pngimg.com/uploads/cpu/cpu_PNG50.png', `<p>Цвет Черный<br>
Для людей ростом от 160 до 180 см<br>
Нагрузка до 120 кг<br>
Класс газлифта 4-й класс<br>
Вес кресла 23 кг<br>
Материал каркаса сталь<br>
Размер сиденья 57 х 52 см<br>
Тип механизма Топ Ган</p>`)}
                    {OneProduct('Ноутбук Apple MacBook (2017 год)', '3 682 руб.', '3000 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png')}
                    {OneProduct('Ноутбук Apple MacBook Air 13" 2019 MVFN2', '3700 руб.', '3400 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png')}
                    {OneProduct('Процессор AMD Ryzen 3 3200G', '319 руб.', '250 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png')}
                </div>
                <div className={s.oneSliderLevel}>
                    {OneProduct('Ноутбук Apple MacBook Air 13" (2017 год)', '2800 руб.', '2550 руб.', 'http://pngimg.com/uploads/cpu/cpu_PNG50.png')}
                    {OneProduct('Ноутбук Apple MacBook (2017 год)', '3 682 руб.', '3000 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png')}
                    {OneProduct('Ноутбук Apple MacBook Air 13" 2019 MVFN2', '3700 руб.', '3400 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png')}
                    {OneProduct('Процессор AMD Ryzen 3 3200G', '319 руб.', '250 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png')}
                </div> <div className={s.oneSliderLevel}>
                    {OneProduct('Ноутбук Apple MacBook Air 13" (2017 год)', '2800 руб.', '2550 руб.', 'http://pngimg.com/uploads/cpu/cpu_PNG50.png')}
                    {OneProduct('Ноутбук Apple MacBook (2017 год)', '3 682 руб.', '3000 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png')}
                    {OneProduct('Ноутбук Apple MacBook Air 13" 2019 MVFN2', '3700 руб.', '3400 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png')}
                    {OneProduct('Процессор AMD Ryzen 3 3200G', '319 руб.', '250 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png')}
                </div> <div className={s.oneSliderLevel}>
                    {OneProduct('Ноутбук Apple MacBook Air 13" (2017 год)', '2800 руб.', '2550 руб.', 'http://pngimg.com/uploads/cpu/cpu_PNG50.png')}
                    {OneProduct('Ноутбук Apple MacBook (2017 год)', '3 682 руб.', '3000 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png')}
                    {OneProduct('Ноутбук Apple MacBook Air 13" 2019 MVFN2', '3700 руб.', '3400 руб.', 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png')}
                </div>
            </Slider>
        </div>
    )
}

export default Discounts;