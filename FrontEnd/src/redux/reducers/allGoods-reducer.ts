import productsAPI from "../../api/productsAPI";

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

const allGoodsReducer = (state:any = initialState, action: any):initialStateType => {
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

type onGetNewProductsActionType = {
  type: typeof ON_GET_NEW_PRODUCTS,
  products: Array<product>,
  name:string,
}


export const onGetNewProducts = (products:Array<product>, name:string):onGetNewProductsActionType => ({
  type: ON_GET_NEW_PRODUCTS,
  products,
  name,
});

export const getNewGoodsThunkCreator = (type:any) => {
  return async (dispatch:any) => {
    let str = type.split("");
    str.shift();
    str = str.join("");

    let products = await productsAPI.getProducts(str);
    dispatch(onGetNewProducts(products, str));
  };
};

export default allGoodsReducer;
