const LOADING = "LOADING";

let initialState = {
  isFetching: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    }
    default:
      return state;
  }
};

export function loading() {
  return {
    type: "LOADING",
  };
}

export default commonReducer;
