const ON_NAME_TYPING = "ON-NAME-TYPING";
const ON_SURNAME_TYPING = "ON-SURNAME-TYPING";
const ON_MAIL_TYPING = "ON-MAIL-TYPING";
const ON_ADRESS_TYPING = "ON-ADRESS-TYPING";
const ON_PASSWORD_TYPING = "ON-PASSWORD-TYPING";
const ON_REPEAT_PASSWORD_TYPING = "ON-REPEAT-PASSWORD-TYPING";
const ON_SUBMIT = "ON-SUBMIT";

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
    repeatPassword:"",
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
    case ON_SUBMIT:
      return {
        allUsers: [
          ...state.allUsers,
          {...state.currentRegistrationInfo}
        ],
        currentRegistrationInfo: {
          name: "",
          surname: "",
          mail: "",
          adress: "",
          password: "",
          repeatPassword:"",
        },
      };
    default:
      return state;
  }
};

export default registrationReducer;
