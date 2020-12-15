import { product } from "../../types/productTypes";
import { InferActionTypes } from "../redux-store";

let initialState = {
  shoppingCartGoods: [] as Array<product>,
  fullPrice: 0 as number,
  currentGood: {} as product,
};
type initialStateType = typeof initialState;

type ActionType = InferActionTypes<typeof actions>;

const shoppingCartReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "ADD_TO_SHOPPING_CART": {
      if (state.shoppingCartGoods.includes(action.good)) return state;
      return {
        ...state,
        shoppingCartGoods: [...state.shoppingCartGoods, action.good],
        fullPrice: state.fullPrice + action.good.price,
      };
    }
    case "REMOVE_FROM_SHOPPING_CART": {
      let newShoppingCart = state.shoppingCartGoods.filter(
        (item) => item.name !== action.good.name
      );
      let fullPrice = newShoppingCart.reduce((pre, item) => {
        return (pre += item.price * item.amount);
      }, 0);
      return {
        ...state,
        fullPrice,
        shoppingCartGoods: [...newShoppingCart],
      };
    }
    case "ON_SHOW_CURRENT_PRODUCT": {
      return {
        ...state,
        currentGood: action.good,
      };
    }
    case "ON_PLUS_CURRENT_GOOD_AMOUNT": {
      return {
        ...state,
        currentGood: { ...action.good, amount: ++action.good.amount },
        fullPrice: state.fullPrice + action.good.price,
      };
    }
    case "ON_MINUS_CURRENT_GOOD_AMOUNT": {
      if (action.good.amount <= 1) return state;
      return {
        ...state,
        currentGood: { ...action.good, amount: --action.good.amount },
        fullPrice: state.fullPrice - action.good.price,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addShoppingCartGood: (good: product) =>
    ({
      type: "ADD_TO_SHOPPING_CART",
      good,
    } as const),
  removeShoppingCartGood: (good: product) =>
    ({
      type: "REMOVE_FROM_SHOPPING_CART",
      good,
    } as const),
  showCurrentProduct: (good: product) =>
    ({
      type: "ON_SHOW_CURRENT_PRODUCT",
      good,
    } as const),
  plusCurrentGoodAmount: (good: product) =>
    ({
      type: "ON_PLUS_CURRENT_GOOD_AMOUNT",
      good,
    } as const),
  minusCurrentGoodAmount: (good: product) =>
    ({
      type: "ON_MINUS_CURRENT_GOOD_AMOUNT",
      good,
    } as const),
};

export default shoppingCartReducer;
