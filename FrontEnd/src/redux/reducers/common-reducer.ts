const LOADING = "LOADING";

let initialState = {
  isFetching: false as boolean,
};
type initialStateType = typeof initialState;

const commonReducer = (state = initialState, action: any):initialStateType => {
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

type loadingActionType = {
  type: typeof LOADING;
};

export const loading = ():loadingActionType => ({ type: LOADING });

export default commonReducer;
