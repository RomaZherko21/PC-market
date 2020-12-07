import usersAPI from "../../api/usersApi";
import { loading } from "./common-reducer";

const ON_CHANGE_CURRENT_USER = "ON-CHANGE-CURRENT-USER";
const ADD_USERS = "ADD-USERS";
const ON_PAGE_CHANGE = "ON-PAGE-CHANGE";

interface user {
  _id: string;
  name: string;
  surname: string;
  mail: string;
  adress: string;
  photo: string;
  password: string;
  repeatPassword: string;
}
type initialStateType = {
  user: user;
  usersList: Array<user>;
  page: number;
  count: number;
  isFetching: boolean;
};

let initialState: initialStateType = {
  user: {
    _id: "",
    name: "",
    surname: "",
    mail: "",
    adress: "",
    photo: "",
    password: "",
    repeatPassword: "",
  },
  usersList: [],
  page: 1,
  count: 7,
  isFetching: false,
};

const allClientsReducer = (state = initialState, action: any):initialStateType => {
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

type onChangeCurrentUserActionType = {
  type: typeof ON_CHANGE_CURRENT_USER;
  user: user;
};
type addUsersActionType = {
  type: typeof ADD_USERS;
  usersList: Array<user>
};
type onPageChangeActionType = {
  type: typeof ON_PAGE_CHANGE;
  increment: number;
};

export const onChangeCurrentUser = (user: user):onChangeCurrentUserActionType => ({
  type: ON_CHANGE_CURRENT_USER,
  user,
});

export const addUsers = (usersList: Array<user>):addUsersActionType => ({
  type: ADD_USERS,
  usersList,
});

export const onPageChange = (increment: number):onPageChangeActionType => ({
  type: ON_PAGE_CHANGE,
  increment,
});


export const getProfileThunkCreator = (userID: any) => {
  return (dispatch: any) => {
    dispatch(loading());
    usersAPI.getUserProfile(userID).then((response: any) => {
      dispatch(onChangeCurrentUser(response.data.clientProfile));
      dispatch(loading());
    });
  };
};

export const getUsersThunkCreator = (count: number, page: number) => {
  return async (dispatch: any) => {
    dispatch(loading());
    let response = await usersAPI.getUsers(count, page);
    dispatch(addUsers(response.data.clients));
    dispatch(loading());
  };
};

export const getNewUsersThunkCreator = (count: number, page: number, num: number) => {
  return async (dispatch: any) => {
    dispatch(loading());
    dispatch(onPageChange(num));
    let response = await usersAPI.getUsers(count, page + num);
    dispatch(addUsers(response.data.clients));
    dispatch(loading());
  };
};

export default allClientsReducer;
