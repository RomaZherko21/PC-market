
const ADD_TO_SHOPPING_CART = "ADD-TO-SHOPPING-CART";

let initialState = {
  shoppingCartGoods: [],
  fullPrice: 0,
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

export default shoppingCartReducer;
