const ON_NAME_TYPING = "ON-NAME-TYPING";
const ON_SURNAME_TYPING = "ON-SURNAME-TYPING";
const ON_MAIL_TYPING = "ON-MAIL-TYPING";
const ON_ADRESS_TYPING = "ON-ADRESS-TYPING";
const ON_PASSWORD_TYPING = "ON-PASSWORD-TYPING";
const ON_REPEAT_PASSWORD_TYPING = "ON-REPEAT-PASSWORD-TYPING";
const ON_SUBMIT = "ON-SUBMIT";
const FORM_VALIDATION = "FORM-VALIDATION";

let initialState = {
  allUsers: [
    {
      name: "Admin",
      surname: "Admin",
      mail: "Admin@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
    },
    {
      name: "Roma",
      surname: "Zher",
      mail: "RomaZher@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
    },
    {
      name: "Max",
      surname: "But",
      mail: "MaxBut@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
    },
    {
      name: "Ivan",
      surname: "Vas",
      mail: "IvanVas@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
    },
  ],
  currentRegistrationInfo: {
    name: "",
    surname: "",
    mail: "",
    adress: "",
    password: "",
    repeatPassword: "",
  },
  errors: {
    name: "",
    surname: "",
    mail: "",
    adress: "",
    password: "",
    repeatPassword: "",
  },
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_NAME_TYPING:
      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          name: action.text,
        },
      };
    case ON_SURNAME_TYPING:
      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          surname: action.text,
        },
      };
    case ON_MAIL_TYPING:
      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          mail: action.text,
        },
      };
    case ON_ADRESS_TYPING:
      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          adress: action.text,
        },
      };
    case ON_PASSWORD_TYPING:
      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          password: action.text,
        },
      };
    case ON_REPEAT_PASSWORD_TYPING:
      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          repeatPassword: action.text,
        },
      };
    case ON_SUBMIT: {
      for(let key in state.errors){
        if(state.errors[key]!=='') return {...state}
      }
      return {
        ...state,
        allUsers: [...state.allUsers, { ...state.currentRegistrationInfo }],
        currentRegistrationInfo: {
          name: "",
          surname: "",
          mail: "",
          adress: "",
          password: "",
          repeatPassword: "",
        },
      };
    }
    case FORM_VALIDATION: {
      let err = validation(state.currentRegistrationInfo);
      return {
        ...state,
        errors: err,
      };
    }
    default:
      return state;
  }
};

function validation(user) {
  let err = {};
  if (!/^[a-z]{2,}$/gi.test(user.name)) {
    err.name = "Need correct name!";
  }
  if (!/^[a-z]{2,}$/gi.test(user.surname)) {
    err.surname = "Need correct surname!";
  }
  if (!/^[A-Z0-9a-z_]{3,}@[a-z]{2,6}\.[a-z]{2,4}$/g.test(user.mail)) {
    err.mail = "Need correct mail (Admin100@gmail.com)!";
  }
  if (!/^[a-z0-9 .,]{4,}$/gi.test(user.adress)) {
    err.adress = "Need correct adress (Volkov St. 21, Umbridge hall)!";
  }
  if (!/^[a-z0-9.!&/#%*?()]{4,}$/gi.test(user.password)) {
    err.password = "Need correct password!";
  }
  if (user.password !== user.repeatPassword) {
    err.repeatPassword = "Passwords need to be the same!";
  }
  return err;
}

export default registrationReducer;
