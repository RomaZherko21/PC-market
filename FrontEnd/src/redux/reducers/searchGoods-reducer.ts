import { Dispatch } from "redux";
import productsAPI from "../../api/productsAPI";
import { Product } from "../../types/productTypes";
import { InferActionTypes } from "../redux-store";

interface InitialStateType {
  searchItem: {
    name: string;
    price: string;
  };
  searchedProducts: Array<Product>;
}

let initialState: InitialStateType = {
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
): InitialStateType => {
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
