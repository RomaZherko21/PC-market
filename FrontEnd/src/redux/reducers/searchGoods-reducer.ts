import { Dispatch } from "redux";
import productsAPI from "../../api/productsAPI";
import { product } from "../../types/productTypes";
import { InferActionTypes } from "../redux-store";

interface initialStateType {
  searchItem: {
    name: string;
    price: string;
  };
  searchedProducts: Array<product>;
}

let initialState: initialStateType = {
  searchItem: {
    name: "",
    price: "",
  },
  searchedProducts: [],
};

type ActionType = InferActionTypes<typeof actions>;

const searchGoodsReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "GET_SEARCHED_PRODUCTS": {
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

const actions = {
  getSearchedProducts: (data = []) => ({
    type: "GET_SEARCHED_PRODUCTS",
    data,
  }),
};

export const getSearchedProductsThunkCreator = (filteredParams: {
  name: string;
  price: string;
}) => {
  return async (dispatch: Dispatch<ActionType>) => {
    let response: any = await productsAPI.getSearchedProducts(filteredParams);
    dispatch(actions.getSearchedProducts(response));
  };
};

export default searchGoodsReducer;
