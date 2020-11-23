import usersAPI from "../../api/usersApi";
import { loading } from "./common-reducer";

const ON_CHANGE_CURRENT_USER = "ON-CHANGE-CURRENT-USER";
const ADD_USERS = "ADD-USERS";
const ON_PAGE_CHANGE = "ON-PAGE-CHANGE";

let initialState = {
  user: {},
  usersList: [],
  page: 1,
  count: 7,
  isFetching: false,
};

const allClientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_CURRENT_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    case ADD_USERS: {
      return {
        ...state,
        usersList: [...action.usersList],
      };
    }
    case ON_PAGE_CHANGE: {
      return {
        ...state,
        page: state.page + action.increment,
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

export function addUsers(usersList) {
  return {
    type: "ADD-USERS",
    usersList: usersList,
  };
}

export function onPageChange(increment) {
  return {
    type: "ON-PAGE-CHANGE",
    increment: increment,
  };
}

export const getProfileThunkCreator = (userID) => {
  return (dispatch) => {
    dispatch(loading());
    usersAPI.getUserProfile(userID).then((response) => {
      dispatch(onChangeCurrentUser(response.data.clientProfile));
      dispatch(loading());
    });
  };
};

export const getUsersThunkCreator = (count, page) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await usersAPI.getUsers(count, page);
    dispatch(addUsers(response.data.clients));
    dispatch(loading());
  };
};

export const getNewUsersThunkCreator = (count, page, num) => {
  return async (dispatch) => {
    dispatch(loading());
    dispatch(onPageChange(num));
    let response = await usersAPI.getUsers(count, page + num);
    dispatch(addUsers(response.data.clients));
    dispatch(loading());
  };
};

export default allClientsReducer;
