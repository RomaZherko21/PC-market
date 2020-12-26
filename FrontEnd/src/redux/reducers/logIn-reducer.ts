import logInProfileAPI from "../../api/logInProfileAPI";
import { Dispatch } from "redux";
import { User } from "../../types/userTypes";
import { InferActionTypes } from "../redux-store";

let initialState = {
  currentLogInInfo: {
    mail: "",
    password: "",
  } as { mail: string; password: string },
  wrongData: "" as string | undefined,
  currentUser: {} as {},
};
type InitialStateType = typeof initialState;
type ActionType = InferActionTypes<typeof actions>;

const logInReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "ON_LOG_IN_MAIL_TYPING": {
      return {
        ...state,
        currentLogInInfo: {
          ...state.currentLogInInfo,
          mail: action.text,
        },
      };
    }

    case "ON_LOG_IN_PASSWORD_TYPING": {
      return {
        ...state,
        currentLogInInfo: {
          ...state.currentLogInInfo,
          password: action.text,
        },
      };
    }
    case "ON_PROFILE_NAME_CHANGE": {
      if (action.text.length <= 2) return state;
      return {
        ...state,
        currentUser: { ...state.currentUser, name: action.text },
      };
    }
    case "ON_PROFILE_ADRESS_CHANGE": {
      if (action.text.length <= 2) return state;
      return {
        ...state,
        currentUser: { ...state.currentUser, adress: action.text },
      };
    }
    case "ON_PROFILE_MONEY_CHANGE": {
      if (!Number.isInteger(Number(action.text))) return state;
      return {
        ...state,
        currentUser: { ...state.currentUser, money: action.text },
      };
    }

    case "ON_LOG_IN": {
      let err;
      let user;
      if (action.user.message) {
        err = action.user.message;
        user = {};
      } else {
        user = {
          ...action.user,
          money: 2000,
        };
      }
      return {
        ...state,
        currentLogInInfo: {
          mail: "",
          password: "",
        },
        currentUser: user,
        wrongData: err,
      };
    }
    case "ON_LOG_OUT": {
      return {
        ...state,
        currentUser: {},
      };
    }
    case "ON_CHANGE_PROFILE_INFO": {
      return {
        ...state,
        currentUser: {},
      };
    }
    default:
      return state;
  }
};

export const actions = {
  onLogIn: (user: { message: string }) =>
    ({
      type: "ON_LOG_IN",
      user,
    } as const),

  onLogInMailTyping: (text: string) =>
    ({
      type: "ON_LOG_IN_MAIL_TYPING",
      text,
    } as const),

  onLogInPasswordTyping: (text: string) =>
    ({
      type: "ON_LOG_IN_PASSWORD_TYPING",
      text,
    } as const),

  onProfileNameChange: (text: string) =>
    ({
      type: "ON_PROFILE_NAME_CHANGE",
      text,
    } as const),
  onProfileAdressChange: (text: string) =>
    ({
      type: "ON_PROFILE_ADRESS_CHANGE",
      text,
    } as const),
  onProfileMoneyChange: (text: string) =>
    ({
      type: "ON_PROFILE_MONEY_CHANGE",
      text,
    } as const),

  onLogOut: () => ({ type: "ON_LOG_OUT" } as const),
  onChangeProfileInfo: () => ({ type: "ON_CHANGE_PROFILE_INFO" } as const),
};

export const getUserThunkCreator = (currentLogInInfo: {
  mail: string;
  password: string;
}) => {
  return async (dispatch: Dispatch<ActionType>) => {
    let response: any = await logInProfileAPI.getUser(currentLogInInfo);
    dispatch(actions.onLogIn(response));
    return response;
  };
};

export const putNewUserProfileInfoThunkCreator = (currentLogInInfo: User) => {
  return () => {
    logInProfileAPI.putUser(currentLogInInfo);
  };
};

export default logInReducer;
