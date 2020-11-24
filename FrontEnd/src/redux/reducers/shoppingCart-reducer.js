const ADD_TO_SHOPPING_CART = "ADD-TO-SHOPPING-CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE-FROM-SHOPPING-CART";
const ON_SHOW_CURRENT_PRODUCT = "ON-SHOW-CURRENT-PRODUCT";
const ON_PLUS_CURRENT_GOOD_AMOUNT = "ON-PLUS-CURRENT-GOOD-AMOUNT";
const ON_MINUS_CURRENT_GOOD_AMOUNT = "ON-MINUS-CURRENT-GOOD-AMOUNT";

let initialState = {
  shoppingCartGoods: [],
  fullPrice: 0,
  currentGood: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART: {
      if (state.shoppingCartGoods.includes(action.good)) return state;
      return {
        ...state,
        shoppingCartGoods: [...state.shoppingCartGoods, action.good],
        fullPrice: state.fullPrice + action.good.price,
      };
    }
    case REMOVE_FROM_SHOPPING_CART: {
      let newShoppingCart = state.shoppingCartGoods.filter(
        (item) => item.name !== action.good.name
      );
      let fullPrice = newShoppingCart.reduce((pre,item)=>{
        return pre+=item.price*(item.amount);
      },0)
      return {
        ...state,
        fullPrice,
        shoppingCartGoods: [...newShoppingCart],
      };
    }
    case ON_SHOW_CURRENT_PRODUCT: {
      return {
        ...state,
        currentGood: action.good,
      };
    }
    case ON_PLUS_CURRENT_GOOD_AMOUNT: {
      return {
        ...state,
        currentGood: {...action.good, amount:++action.good.amount,},
        fullPrice: state.fullPrice + action.good.price,
      };
    }
    case ON_MINUS_CURRENT_GOOD_AMOUNT: {
      if(action.good.amount<=1) return state;
      return {
        ...state,
        currentGood: {...action.good, amount: --action.good.amount,},
        fullPrice: state.fullPrice - action.good.price,
      };
    }
    default:
      return state;
  }
};

export const addShoppingCartGood = (good) => ({
  type: "ADD-TO-SHOPPING-CART",
  good,
});
export const removeShoppingCartGood = (good) => ({
  type: "REMOVE-FROM-SHOPPING-CART",
  good,
});
export const showCurrentProduct = (good) => ({
  type: "ON-SHOW-CURRENT-PRODUCT",
  good,
});
export const plusCurrentGoodAmount = (good) => ({
  type: "ON-PLUS-CURRENT-GOOD-AMOUNT",
  good,
});
export const minusCurrentGoodAmount = (good) => ({
  type: "ON-MINUS-CURRENT-GOOD-AMOUNT",
  good,
});

export default shoppingCartReducer;
