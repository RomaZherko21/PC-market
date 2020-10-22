const ON_LOG_IN_MAIL_TYPING = "ON-LOG-IN-MAIL-TYPING";
const ON_LOG_IN_PASSWORD_TYPING = "ON-LOG-IN-PASSWORD-TYPING";
const ON_LOG_IN = "ON-LOG-IN";

let initialState = {
  currentLogInInfo: {
    mail: "",
    password: "",
  },
  wrongData: '',
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
let err = '';
if(!user.mail || !user.password) err = 'Wrong data';
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
    default:
      return state;
  }
};

export default registrationReducer;
