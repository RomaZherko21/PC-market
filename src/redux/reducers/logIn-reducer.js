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
      let user = {};
      for (let item of action.allUsers) {
        if (
          item.mail === state.currentLogInInfo.mail &&
          item.password === state.currentLogInInfo.password
        ) {
          user = item;
          break;
        }
      }
      let err = "";
      if (!user.mail || !user.password) err = "Wrong data";
      return {
        ...state,
        currentLogInInfo: {
          mail: "",
          password: "",
        },
        currentUser: { ...user },
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

export function onLogIn(allUsers) {
  return {
    type: "ON-LOG-IN",
    allUsers: allUsers,
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

export default registrationReducer;
