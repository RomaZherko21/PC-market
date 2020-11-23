import productsAPI from "../../api/productsAPI";

const ON_GET_NEW_PRODUCTS = "ON-GET-NEW-PRODUCTS";

let initialState = {
  discountGoods: [
    {
      id: "0001",
      name: "Процессор AMD Ryzen 5 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 2550,
      amount: 1,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0002",
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      amount: 1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0003",
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 288,
      amount: 1,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0004",
      name: "HP 22-c0068ur",
      prevPrice: "2000 руб.",
      discountPrice: "1600 руб.",
      price: 1600,
      amount: 1,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/c05963386-kopiya.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0005",
      name: "lenovo ideacentre 520-24icb",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      amount: 1,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/000022105913-kopiya.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0006",
      name: "HP OfficeJet Pro 8023 All-in-One",
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 2234,
      amount: 1,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/orig-3_result.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0007",
      name: "Intel-Core i5 – 10400, 2.9 GHz, 12MB, oem, LGA1200, Comet Lake",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 288,
      amount: 1,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/1789393-kopiya.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
    {
      id: "0008",
      name: "Gaming Chair ThunderX3 YC1 Black Red",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 2550,
      amount: 1,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/4-1.png",
      description: {
        color: "Цвет Черный",
        weight: "Нагрузка до 120 кг",
        material: "Материал каркаса сталь",
        size: "Размер сиденья 57 х 52 см",
      },
      warranty: "1 год",
    },
  ],
  pc: [],
  laptop: [],
  printer: [],
  monitor: [],
  modules: [],
  periphery: [],
  accessories: [],
};

const allGoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_GET_NEW_PRODUCTS: {
      if (state[action.name].length === 0) {
        return {
          ...state,
          [action.name]: [...action.products],
        };
      } else {
        return { ...state };
      }
    }
    default:
      return state;
  }
};

export function onGetNewProducts(products, name) {
  return {
    type: "ON-GET-NEW-PRODUCTS",
    products,
    name,
  };
}

export const getNewGoodsThunkCreator = (type) => {
  return async (dispatch) => {
    let str = type.split("");
    str.shift();
    str = str.join("");

    let products = await productsAPI.getProducts(str);
    dispatch(onGetNewProducts(products, str));
  };
};

export default allGoodsReducer;
