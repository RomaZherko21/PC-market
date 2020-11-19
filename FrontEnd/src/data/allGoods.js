import React from "react";
const allGoods = {
  discountGoods: [
    {
      id: '0001',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 2550,
      amount:1,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0002',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0003',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 2234,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0004',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 288,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0001',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 2550,
      amount:1,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0002',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0003',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 2234,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0004',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 288,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0001',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 2550,
      amount:1,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0002',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0003',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 2234,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
    {
      id: '0004',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 288,
      amount:1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
      warranty: "1 год",
    },
  ],
  computers:[],
  laptops:[],
  printers:[],
  monitors:[],
  modules:[],
  periphery:[],
  accessories:[],
};

export default allGoods;
