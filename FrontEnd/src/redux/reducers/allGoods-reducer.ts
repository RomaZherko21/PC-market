import productsAPI from "../../api/productsAPI";
import {Dispatch} from 'redux'

const ON_GET_NEW_PRODUCTS = "ON-GET-NEW-PRODUCTS";

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

interface initialStateType {
  discounts: Array<product>;
  pc: Array<product>;
  laptop: Array<product>;
  printer: Array<product>;
  monitor: Array<product>;
  modules: Array<product>;
  periphery: Array<product>;
  accessories: Array<product>;
};

let initialState: initialStateType = {
  discounts: [],
  pc: [],
  laptop: [],
  printer: [],
  monitor: [],
  modules: [],
  periphery: [],
  accessories: [],
};


//ACTION TYPES
type onGetNewProductsActionType = {
  type: typeof ON_GET_NEW_PRODUCTS,
  products: Array<product>,
  name:string,
}
type ActionType = onGetNewProductsActionType;

const allGoodsReducer = (state:any = initialState, action: ActionType):initialStateType => {
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




export const onGetNewProducts = (products:Array<product>, name:string):onGetNewProductsActionType => ({
  type: ON_GET_NEW_PRODUCTS,
  products,
  name,
});

export const getNewGoodsThunkCreator = (type:string) => {
  return async (dispatch:Dispatch<ActionType>) => {
    let str = type.split("/")[1];
    let products = await productsAPI.getProducts(str);
    dispatch(onGetNewProducts(products, str));
  };
};

export default allGoodsReducer;
