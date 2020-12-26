import usersAPI from "../../api/usersAPI";
import { loading } from "./common-reducer";
import {Dispatch} from 'redux'
import {loadingActionType} from './common-reducer'
import {User} from '../../types/userTypes'

const ON_CHANGE_CURRENT_USER = "ON-CHANGE-CURRENT-USER";
const ADD_USERS = "ADD-USERS";
const ON_PAGE_CHANGE = "ON-PAGE-CHANGE";

type InitialStateType = {
  user: User;
  usersList: Array<User>;
  page: number;
  count: number;
  isFetching: boolean;
};

let initialState: InitialStateType = {
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


//ACTION TYPES
type onChangeCurrentUserActionType = {
  type: typeof ON_CHANGE_CURRENT_USER;
  user: User;
};
type addUsersActionType = {
  type: typeof ADD_USERS;
  usersList: Array<User>
};
type onPageChangeActionType = {
  type: typeof ON_PAGE_CHANGE;
  increment: number;
};
type ActionType = onChangeCurrentUserActionType | addUsersActionType |  onPageChangeActionType | loadingActionType;




const allClientsReducer = (state = initialState, action: ActionType):InitialStateType => {
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




export const onChangeCurrentUser = (user: User):onChangeCurrentUserActionType => ({
  type: ON_CHANGE_CURRENT_USER,
  user,
});

export const addUsers = (usersList: Array<User>):addUsersActionType => ({
  type: ADD_USERS,
  usersList,
});

export const onPageChange = (increment: number):onPageChangeActionType => ({
  type: ON_PAGE_CHANGE,
  increment,
});


export const getProfileThunkCreator = (userID: string) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch(loading());
    usersAPI.getUserProfile(userID).then((response: any) => {
      dispatch(onChangeCurrentUser(response.data.clientProfile));
      dispatch(loading());
    });
  };
};

export const getUsersThunkCreator = (count: number, page: number) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(loading());
    let response = await usersAPI.getUsers(count, page);
    console.log(response.data)
    dispatch(addUsers(response.data.clients));
    dispatch(loading());
  };
};

export const getNewUsersThunkCreator = (count: number, page: number, num: number) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(loading());
    dispatch(onPageChange(num));
    let response = await usersAPI.getUsers(count, page + num);
    dispatch(addUsers(response.data.clients));
    dispatch(loading());
  };
};

export default allClientsReducer;
