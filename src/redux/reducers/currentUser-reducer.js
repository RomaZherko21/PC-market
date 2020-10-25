import usersAPI from "../../api/api";

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

function onChangeCurrentUserAC(user) {
  return {
    type: "ON-CHANGE-CURRENT-USER",
    user: user,
  };
}

export const getProfileThunkCreator = (userID) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userID).then((response) => {
      dispatch(onChangeCurrentUserAC(response.data));
    });
  };
};

export default currentUserReducer;
