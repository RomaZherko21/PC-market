const ON_CHANGE_CURRENT_USER = "ON-CHANGE-CURRENT-USER";

let initialState = {
  user: {
    fullName: "",
  },
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_CURRENT_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default currentUserReducer;
