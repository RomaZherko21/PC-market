const LOADING = "LOADING";

let initialState = {
  isFetching: false as boolean,
};
type InitialStateType = typeof initialState;

//ACTION TYPES
export type loadingActionType = {
  type: typeof LOADING;
};

type ActionType = loadingActionType;

const commonReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
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

export const loading = (): loadingActionType => ({ type: LOADING });

export default commonReducer;
