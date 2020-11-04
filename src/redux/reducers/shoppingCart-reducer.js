
const ADD_TO_SHOPPING_CART = "ADD-TO-SHOPPING-CART";
const ON_SHOW_CURRENT_PRODUCT = "ON-SHOW-CURRENT-PRODUCT";

let initialState = {
  shoppingCartGoods: [],
  fullPrice: 0,
  currentGood:{},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART: {
      return {
        ...state,
        fullPrice: state.fullPrice+action.good.price,
        shoppingCartGoods: [...state.shoppingCartGoods, action.good],
      };
    }
    case ON_SHOW_CURRENT_PRODUCT: {
      return {
        ...state,
        currentGood: action.good,
      };
    }
    default:
      return state;
  }
};

export function addShoppingCartGood(good) {
  return {
    type: "ADD-TO-SHOPPING-CART",
    good: good,
  };
}
export function showCurrentProduct(good) {
  return {
    type: "ON-SHOW-CURRENT-PRODUCT",
    good: good,
  };
}

export default shoppingCartReducer;
