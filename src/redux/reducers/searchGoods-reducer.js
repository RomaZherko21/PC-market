
const ON_SEARCH_GOODS = "ON-SEARCH-GOODS";

let initialState = {
  searchItem: {
    name: "",
    price: '',
  },
};

const searchGoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SEARCH_GOODS: {
      return {
        ...state,
        searchItem: {
          ...state.searchItem,
          ...action.searchItem,
        },
      };
    }
    default:
      return state;
  }
};

export function onSearchGoods(searchItem) {
  return {
    type: "ON-SEARCH-GOODS",
    searchItem: searchItem,
  };
}

export default searchGoodsReducer;
