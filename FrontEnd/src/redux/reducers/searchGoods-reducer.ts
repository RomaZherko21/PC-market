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

const searchGoodsReducer = (state = initialState, action:any):initialStateType => {
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

type getSearchedProductsActionType = {
  type: typeof GET_SEARCHED_PRODUCTS,
  data: Array<{}>,
}

export const getSearchedProducts = (data = []):getSearchedProductsActionType => ({
  type: GET_SEARCHED_PRODUCTS,
  data,
});

export const getSearchedProductsThunkCreator = (filteredParams:any) => {
  return async (dispatch:any) => {
    let response = await productsAPI.getSearchedProducts(filteredParams);
    dispatch(getSearchedProducts(response));
  };
};

export default searchGoodsReducer;
