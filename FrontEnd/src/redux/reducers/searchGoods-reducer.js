import productsAPI from "../../api/productsAPI";

const GET_SEARCHED_PRODUCTS = "GET-SEARCHED-PRODUCTS";

let initialState = {
  searchItem: {
    name: "",
    price: "",
  },
  searchedProducts: [],
};

const searchGoodsReducer = (state = initialState, action) => {
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

function getSearchedProducts(data = []) {
  return {
    type: "GET-SEARCHED-PRODUCTS",
    data,
  };
}

export const getSearchedProductsThunkCreator = (filteredParams) => {
  return async (dispatch) => {
    let response = await productsAPI.getSearchedProducts(filteredParams);
    dispatch(getSearchedProducts(response));
  };
};

export default searchGoodsReducer;
