import logInProfileAPI from "../../api/logInProfileAPI";

const ON_LOG_IN_MAIL_TYPING = "ON-LOG-IN-MAIL-TYPING";
const ON_LOG_IN_PASSWORD_TYPING = "ON-LOG-IN-PASSWORD-TYPING";
const ON_LOG_IN = "ON-LOG-IN";
const ON_LOG_OUT = "ON-LOG-OUT";

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

    case ON_LOG_IN: {
      let err;
      let user;
      if (action.user.message) {
        err = action.user.message;
        user = {};
      } else {
        user = { ...action.user, money: 2000, photo: 'http://pngimg.com/uploads/pacman/pacman_PNG19.png'};
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
    default:
      return state;
  }
};

export function onLogIn(user) {
  return {
    type: "ON-LOG-IN",
    user,
  };
}

export function onLogInMailTyping(text) {
  return {
    type: "ON-LOG-IN-MAIL-TYPING",
    text: text,
  };
}
export function onLogInPasswordTyping(text) {
  return {
    type: "ON-LOG-IN-PASSWORD-TYPING",
    text: text,
  };
}
export function onLogOut() {
  return {
    type: "ON-LOG-OUT",
  };
}
export const getUserThunkCreator = (currentLogInInfo) => {
  return async (dispatch) => {
    let response = await logInProfileAPI.getUser(currentLogInInfo);
    dispatch(onLogIn(response));
    return response;
  };
};

export default registrationReducer;
