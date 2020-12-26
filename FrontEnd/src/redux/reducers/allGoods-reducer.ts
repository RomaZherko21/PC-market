import productsAPI from "../../api/productsAPI";
import {Dispatch} from 'redux'
import {Product} from '../../types/productTypes'

const ON_GET_NEW_PRODUCTS = "ON-GET-NEW-PRODUCTS";

interface InitialStateType {
  discounts: Array<Product>;
  pc: Array<Product>;
  laptop: Array<Product>;
  printer: Array<Product>;
  monitor: Array<Product>;
  modules: Array<Product>;
  periphery: Array<Product>;
  accessories: Array<Product>;
};

let initialState: InitialStateType = {
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
  products: Array<Product>,
  name:string,
}
type ActionType = onGetNewProductsActionType;

const allGoodsReducer = (state:any = initialState, action: ActionType):InitialStateType => {
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

export const onGetNewProducts = (products:Array<Product>, name:string):onGetNewProductsActionType => ({
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
