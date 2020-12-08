import { Dispatch } from "redux";
import productsAPI from "../../api/productsAPI";

const GET_SEARCHED_PRODUCTS = "GET-SEARCHED-PRODUCTS";

interface initialStateType {
  searchItem: {
    name: string;
    price: string;
  };
  searchedProducts: Array<{}>;
}

let initialState: initialStateType = {
  searchItem: {
    name: "",
    price: "",
  },
  searchedProducts: [],
};

//ACTION TYPES
type getSearchedProductsActionType = {
  type: typeof GET_SEARCHED_PRODUCTS,
  data: Array<{}>,
}
type ActionType = getSearchedProductsActionType;

const searchGoodsReducer = (state = initialState, action:ActionType):initialStateType => {
  switch (action.type) {
    case GET_SEARCHED_PRODUCTS: {
      console.log(action.data);
      return {
        ...state,
        searchedProducts: [...action.data],
      };
    }
    default:
      return state;
  }
};

export const getSearchedProducts = (data = []):getSearchedProductsActionType => ({
  type: GET_SEARCHED_PRODUCTS,
  data,
});

export const getSearchedProductsThunkCreator = (filteredParams:{name:string, price:string}) => {
  return async (dispatch:Dispatch<ActionType>) => {
    let response = await productsAPI.getSearchedProducts(filteredParams);
    dispatch(getSearchedProducts(response));
  };
};

export default searchGoodsReducer;
