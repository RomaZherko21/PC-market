import logInProfileAPI from "../../api/logInProfileAPI";

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
    mail: "",
    password: "",
  },
  wrongData: "",
  currentUser: {},
};

const registrationReducer = (state = initialState, action) => {
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

export const onLogIn = (user) => ({
  type: "ON-LOG-IN",
  user,
});

export const onLogInMailTyping = (text) => ({
  type: "ON-LOG-IN-MAIL-TYPING",
  text,
});

export const onLogInPasswordTyping = (text) => ({
  type: "ON-LOG-IN-PASSWORD-TYPING",
  text,
});

export const onProfileNameChange = (text) => ({
  type: "ON-PROFILE-NAME-CHANGE",
  text,
});
export const onProfileAdressChange = (text) => ({
  type: "ON-PROFILE-ADRESS-CHANGE",
  text,
});
export const onProfileMoneyChange = (text) => ({
  type: "ON-PROFILE-MONEY-CHANGE",
  text,
});

export const onLogOut = () => ({ type: "ON-LOG-OUT" });
export const onChangeProfileInfo = () => ({ type: "ON-CHANGE-PROFILE-INFO" });

export const getUserThunkCreator = (currentLogInInfo) => {
  return async (dispatch) => {
    let response = await logInProfileAPI.getUser(currentLogInInfo);
    dispatch(onLogIn(response));
    return response;
  };
};

export const putNewUserProfileInfoThunkCreator = (currentLogInInfo) => {
  return () => {
    logInProfileAPI.putUser(currentLogInInfo);
    console.log("postNewUserProfileInfoThunkCreator");
  };
};

export default registrationReducer;
