const ADD_TO_SHOPPING_CART = "ADD-TO-SHOPPING-CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE-FROM-SHOPPING-CART";
const ON_SHOW_CURRENT_PRODUCT = "ON-SHOW-CURRENT-PRODUCT";
const ON_PLUS_CURRENT_GOOD_AMOUNT = "ON-PLUS-CURRENT-GOOD-AMOUNT";
const ON_MINUS_CURRENT_GOOD_AMOUNT = "ON-MINUS-CURRENT-GOOD-AMOUNT";

type product = {
  id: string;
  name: string;
  mainDescription: string;
  price: number;
  amount: number;
  img: string;
  description: {};
  warranty: string;
};

let initialState = {
  shoppingCartGoods: [] as Array<product>,
  fullPrice: 0 as number,
  currentGood: {} as product,
};
type initialStateType = typeof initialState;

const shoppingCartReducer = (state = initialState, action:any):initialStateType => {
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

type addShoppingCartGoodActionType = {
  type: typeof ADD_TO_SHOPPING_CART,
  good: product,
}
type removeShoppingCartGoodActionType = {
  type: typeof REMOVE_FROM_SHOPPING_CART,
  good: product,
}
type showCurrentProductActionType = {
  type: typeof ON_SHOW_CURRENT_PRODUCT,
  good: product,
}
type plusCurrentGoodAmountActionType = {
  type: typeof ON_PLUS_CURRENT_GOOD_AMOUNT,
  good: product,
}
type minusCurrentGoodAmountActionType = {
  type: typeof ON_MINUS_CURRENT_GOOD_AMOUNT,
  good: product,
}

export const addShoppingCartGood = (good:product):addShoppingCartGoodActionType => ({
  type: ADD_TO_SHOPPING_CART,
  good,
});
export const removeShoppingCartGood = (good:product):removeShoppingCartGoodActionType => ({
  type: REMOVE_FROM_SHOPPING_CART,
  good,
});
export const showCurrentProduct = (good:product):showCurrentProductActionType => ({
  type: ON_SHOW_CURRENT_PRODUCT,
  good,
});
export const plusCurrentGoodAmount = (good:product):plusCurrentGoodAmountActionType => ({
  type: ON_PLUS_CURRENT_GOOD_AMOUNT,
  good,
});
export const minusCurrentGoodAmount = (good:product):minusCurrentGoodAmountActionType => ({
  type: ON_MINUS_CURRENT_GOOD_AMOUNT,
  good,
});

export default shoppingCartReducer;
