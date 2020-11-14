import allGoods from "../../data/allGoods";

let initialState = {
  discountGoods: allGoods.discountGoods,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainPageReducer;
