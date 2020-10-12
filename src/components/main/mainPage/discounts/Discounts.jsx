import React, { } from "react";
import Slider from "react-slick";
import s from './Discounts.module.css';
// import { Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let discountGoods = [
    {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '2800 руб.',
        discountPrice: '2550 руб.',
        img: 'http://pngimg.com/uploads/cpu/cpu_PNG39.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook (2017 год)',
        prevPrice: '4000 руб.',
        discountPrice: '3700 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
        prevPrice: '2500 руб.',
        discountPrice: '2234 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '319 руб.',
        discountPrice: '288 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '2800 руб.',
        discountPrice: '2550 руб.',
        img: 'http://pngimg.com/uploads/cpu/cpu_PNG39.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook (2017 год)',
        prevPrice: '4000 руб.',
        discountPrice: '3700 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
        prevPrice: '2500 руб.',
        discountPrice: '2234 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '319 руб.',
        discountPrice: '288 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '2800 руб.',
        discountPrice: '2550 руб.',
        img: 'http://pngimg.com/uploads/cpu/cpu_PNG39.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook (2017 год)',
        prevPrice: '4000 руб.',
        discountPrice: '3700 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
        prevPrice: '2500 руб.',
        discountPrice: '2234 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '319 руб.',
        discountPrice: '288 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '2800 руб.',
        discountPrice: '2550 руб.',
        img: 'http://pngimg.com/uploads/cpu/cpu_PNG39.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook (2017 год)',
        prevPrice: '4000 руб.',
        discountPrice: '3700 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
        prevPrice: '2500 руб.',
        discountPrice: '2234 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    }, {
        name: 'Процессор AMD Ryzen 3 3200G',
        prevPrice: '319 руб.',
        discountPrice: '288 руб.',
        img: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png',
        description: () => {
            return (<ul> <li> Цвет Черный</li>
                <li> Для людей ростом от 160 до 180 см</li>
                <li> Нагрузка до 120 кг</li>
                <li> Класс газлифта 4-й класс</li>
                <li> Вес кресла 23 кг</li>
                <li>Материал каркаса сталь</li>
                <li> Размер сиденья 57 х 52 см</li>
                <li>Тип механизма Топ Ган</li></ul>)
        }
    },
]

const Discounts = () => {
    
    let settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        slidesToScroll: 4,
        slidesToShow: 4,
        arrows: false,
    };
    if (document.documentElement.clientWidth < 1230) { settings.slidesToScroll = 3; settings.slidesToShow = 3 }
    if (document.documentElement.clientWidth < 850) { settings.slidesToScroll = 2; settings.slidesToShow = 2 }
    if (document.documentElement.clientWidth < 500) { settings.slidesToScroll = 1; settings.slidesToShow = 1 }

    function OneProduct(name, price, discountPrice, img, description,key) {
        return (
            <div className={s.oneProduct} key={key}>
                <div className={s.saleIcon}>Распродажа!</div>
                <div className={s.productDesription}>
                    <img src={img} alt="" />
                    {description}
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
                {discountGoods.map((item,id) => {

                    return OneProduct(item.name, item.prevPrice, item.discountPrice, item.img, item.description(),item.name )
                })}
            </Slider>
        </div>
    )
}

export default Discounts;