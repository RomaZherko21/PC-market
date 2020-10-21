import React from "react";
const ADD_COMMENT_HANDLE = "ADD-COMMENT-HANDLE";
const ON_NAME_TYPING = "ON-NAME-TYPING";
const ON_TEXT_TYPING = "ON-TEXT-TYPING";

let initialState = {
  discountGoods: [
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
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
    },
    {
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
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
    },
    {
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
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
    },
    {
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
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
    },
    {
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
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
    },
    {
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
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
    },
    {
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
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
    },
    {
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
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
    },
    {
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
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
    },
    {
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
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
    },
  ],
  comments: [
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
  ],
  currentComment: {
    name: "",
    text: "",
  },
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_HANDLE:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            author: state.currentComment.name,
            text: state.currentComment.text,
            photo:
              "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
          },
        ],
        currentComment: {
          name: "",
          text: "",
        },
      };
    case ON_NAME_TYPING:
      return {
        ...state,
        currentComment: {
          ...state.currentComment,
          name: action.name,
        },
      };
    case ON_TEXT_TYPING:
      return {
        ...state,
        currentComment: {
          ...state.currentComment,
          text: action.text,
        },
      };

    default:
      return state;
  }
};

export default mainPageReducer;
