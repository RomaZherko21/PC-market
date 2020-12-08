import logInProfileAPI from "../../api/logInProfileAPI";
import {Dispatch} from 'redux'
import {user} from '../../types/userTypes'

const ON_LOG_IN_MAIL_TYPING = "ON-LOG-IN-MAIL-TYPING";
const ON_LOG_IN_PASSWORD_TYPING = "ON-LOG-IN-PASSWORD-TYPING";
const ON_LOG_IN = "ON-LOG-IN";
const ON_LOG_OUT = "ON-LOG-OUT";
const ON_CHANGE_PROFILE_INFO = "ON-CHANGE-PROFILE-INFO";
const ON_PROFILE_NAME_CHANGE = "ON-PROFILE-NAME-CHANGE";
const ON_PROFILE_ADRESS_CHANGE = "ON-PROFILE-ADRESS-CHANGE";
const ON_PROFILE_MONEY_CHANGE = "ON-PROFILE-MONEY-CHANGE";

let initialState = {
  currentLogInInfo: {
    mail: "" as string,
    password: "" as string,
  },
  wrongData: "" as string,
  currentUser: {} as {},
};

//ACTION TYPES
type onLogInActionType = {
  type: typeof ON_LOG_IN;
  user: {message:string};
};
type onLogInMailTypingActionType = {
  type: typeof ON_LOG_IN_MAIL_TYPING;
  text: string;
};
type onLogInPasswordTypingActionType = {
  type: typeof ON_LOG_IN_PASSWORD_TYPING;
  text: string;
};
type onProfileNameChangeActionType = {
  type: typeof ON_PROFILE_NAME_CHANGE;
  text: string;
};
type onProfileAdressChangeActionType = {
  type: typeof ON_PROFILE_ADRESS_CHANGE;
  text: string;
};
type onProfileMoneyChangeActionType = {
  type: typeof ON_PROFILE_MONEY_CHANGE;
  text: string;
};
type onLogOutActionType = {
  type: typeof ON_LOG_OUT;
};
type onChangeProfileInfoActionType = {
  type: typeof ON_CHANGE_PROFILE_INFO;
};

type ActionType = onLogInActionType|onLogInMailTypingActionType|onLogInPasswordTypingActionType|onProfileNameChangeActionType
|onProfileAdressChangeActionType|onProfileMoneyChangeActionType|onLogOutActionType|onChangeProfileInfoActionType;

const registrationReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case ON_LOG_IN_MAIL_TYPING: {
      return {
        ...state,
        currentLogInInfo: {
          ...state.currentLogInInfo,
          mail: action.text,
        },
      };
    }

    case ON_LOG_IN_PASSWORD_TYPING: {
      return {
        ...state,
        currentLogInInfo: {
          ...state.currentLogInInfo,
          password: action.text,
        },
      };
    }
    case ON_PROFILE_NAME_CHANGE: {
      if (action.text.length <= 2) return state;
      return {
        ...state,
        currentUser: { ...state.currentUser, name: action.text },
      };
    }
    case ON_PROFILE_ADRESS_CHANGE: {
      if (action.text.length <= 2) return state;
      return {
        ...state,
        currentUser: { ...state.currentUser, adress: action.text },
      };
    }
    case ON_PROFILE_MONEY_CHANGE: {
      if (!Number.isInteger(Number(action.text))) return state;
      return {
        ...state,
        currentUser: { ...state.currentUser, money: action.text },
      };
    }

    case ON_LOG_IN: {
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
    case ON_LOG_OUT: {
      return {
        ...state,
        currentUser: {},
      };
    }
    case ON_CHANGE_PROFILE_INFO: {
      return {
        ...state,
        currentUser: {},
      };
    }
    default:
      return state;
  }
};

export const onLogIn = (user:{message:string}):onLogInActionType => ({
  type: ON_LOG_IN,
  user,
});

export const onLogInMailTyping = (text:string):onLogInMailTypingActionType => ({
  type: ON_LOG_IN_MAIL_TYPING,
  text,
});

export const onLogInPasswordTyping = (text:string):onLogInPasswordTypingActionType => ({
  type: ON_LOG_IN_PASSWORD_TYPING,
  text,
});

export const onProfileNameChange = (text:string):onProfileNameChangeActionType => ({
  type: ON_PROFILE_NAME_CHANGE,
  text,
});
export const onProfileAdressChange = (text:string):onProfileAdressChangeActionType => ({
  type: ON_PROFILE_ADRESS_CHANGE,
  text,
});
export const onProfileMoneyChange = (text:string):onProfileMoneyChangeActionType => ({
  type: ON_PROFILE_MONEY_CHANGE,
  text,
});

export const onLogOut = ():onLogOutActionType => ({ type: ON_LOG_OUT });
export const onChangeProfileInfo = ():onChangeProfileInfoActionType => ({ type: ON_CHANGE_PROFILE_INFO });

export const getUserThunkCreator = (currentLogInInfo:{mail:string,password:string}) => {
  return async (dispatch:Dispatch<ActionType>) => {
    let response:any = await logInProfileAPI.getUser(currentLogInInfo);
    dispatch(onLogIn(response));
    return response;
  };
};

export const putNewUserProfileInfoThunkCreator = (currentLogInInfo:user) => {
  return () => {
    logInProfileAPI.putUser(currentLogInInfo);
    console.log("postNewUserProfileInfoThunkCreator");
  };
};

export default registrationReducer;
