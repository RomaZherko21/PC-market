import productsAPI from "../../api/productsAPI";

const ON_GET_NEW_PRODUCTS = "ON-GET-NEW-PRODUCTS";

let initialState = {
  discounts: [],
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
