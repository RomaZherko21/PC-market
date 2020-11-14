import allGoods from '../../data/allGoods'

const ON_SEARCH_GOODS = "ON-SEARCH-GOODS";
const GET_SEARCHED_PRODUCTS = "GET-SEARCHED-PRODUCTS";


let initialState = {
  searchItem: {
    name: "",
    price: "",
  },
  searchedGoods:[],
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
    case GET_SEARCHED_PRODUCTS: {
      let searchedGoods = [];
      for(let arr in allGoods){
        if(Array.isArray(allGoods[arr])){
          for (let item of allGoods[arr]){
            if(item.price<=state.searchItem.price && item.name.split(' ').includes(state.searchItem.name)) searchedGoods.push(item);
          }
        }
      }
      console.log(searchedGoods)
      return {
        ...state,
        searchedGoods,
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
export function getSearchedProducts() {
  return {
    type: "GET-SEARCHED-PRODUCTS",
  };
}

export default searchGoodsReducer;
