import usersAPI from "../../api/usersApi";

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

export function onChangeCurrentUser(user) {
  return {
    type: "ON-CHANGE-CURRENT-USER",
    user: user,
  };
}

export function loading() {
  return {
    type: "LOADING"
  };  
}

export const getProfileThunkCreator = (userID) => {
  return (dispatch) => {
    dispatch(loading())
    usersAPI.getUserProfile(userID).then((response) => {
      console.log(response.data.clientProfile)
      dispatch(onChangeCurrentUser(response.data.clientProfile));
      dispatch(loading())
    });
  };
};

export default currentUserReducer;
