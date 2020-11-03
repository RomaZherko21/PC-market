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
      mail: "admin",
      adress: "Old Valey, 32",
      password: "admin",
      money: 2000,
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
      name: "Roma",
      surname: "Zher",
      mail: "RomaZher@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
      money: 2000,
      photo: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },
    {
      name: "Max",
      surname: "But",
      mail: "MaxBut@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
      money: 2000,
      photo: 'https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg',
    },
    {
      name: "Ivan",
      surname: "Vas",
      mail: "IvanVas@inbox.ru",
      adress: "Old Valey, 32",
      password: "1234",
      money: 2000,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqc4lAlScJUxiQ3Cw7rJmaO400GplM1mNHTw&usqp=CAU',
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
    name: " ",
    surname: " ",
    mail: " ",
    adress: " ",
    password: " ",
    repeatPassword: " ",
  },
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_NAME_TYPING: {
      let errors = { ...state.errors };
      !/^[a-z]{2,16}$/gi.test(action.text)
        ? (errors.name = "Need correct name!")
        : (errors.name = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          name: action.text,
        },
        errors: errors,
      };
    }
    case ON_SURNAME_TYPING: {
      let errors = { ...state.errors };
      !/^[a-z]{2,}$/gi.test(action.text)
        ? (errors.surname = "Need correct surname!")
        : (errors.surname = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          surname: action.text,
        },
        errors: errors,
      };
    }
    case ON_MAIL_TYPING: {
      let errors = { ...state.errors };
      !/^[A-Z0-9a-z_]{3,}@[a-z]{2,6}\.[a-z]{2,4}$/g.test(action.text)
        ? (errors.mail = "Need correct @mail!")
        : (errors.mail = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          mail: action.text,
        },
        errors: errors,
      };
    }
    case ON_ADRESS_TYPING: {
      let errors = { ...state.errors };
      !/^[a-z0-9 .,]{4,}$/gi.test(action.text)
        ? (errors.adress = "Need correct adress!")
        : (errors.adress = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          adress: action.text,
        },
        errors: errors,
      };
    }
    case ON_PASSWORD_TYPING: {
      let errors = { ...state.errors };
      !/^[a-z0-9.!&/#%*?()]{4,}$/gi.test(action.text)
        ? (errors.password = "Need correct password!")
        : (errors.password = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          password: action.text,
        },
        errors: errors,
      };
    }
    case ON_REPEAT_PASSWORD_TYPING: {
      let errors = { ...state.errors };
      state.currentRegistrationInfo.password !== action.text
        ? (errors.repeatPassword = "Passwords need to be the same!")
        : (errors.repeatPassword = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          repeatPassword: action.text,
        },
        errors: errors,
      };
    }
    case ON_SUBMIT: {
      for (let key in state.errors) {
        if (state.errors[key] !== "") return { ...state };
      }
      action.redirect();
      return {
        ...state,
        allUsers: [...state.allUsers, { ...state.currentRegistrationInfo, money:2000, }],
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
    default:
      return state;
  }
};

export function onAdressTyping(text) {
  return {
    type: "ON-ADRESS-TYPING",
    text: text,
  };
}

export function onMailTyping(text) {
  return {
    type: "ON-MAIL-TYPING",
    text: text,
  };
}
export function onNameTyping(text) {
  return {
    type: "ON-NAME-TYPING",
    text: text,
  };
}
export function onSubmit(redirect) {
  return {
    type: "ON-SUBMIT",
    redirect,

  };
}
export function onSurnameTyping(text) {
  return {
    type: "ON-SURNAME-TYPING",
    text: text,
  };
}
export function onPasswordTyping(text) {
  return {
    type: "ON-PASSWORD-TYPING",
    text: text,
  };
}
export function onRepeatPasswordTyping(text) {
  return {
    type: "ON-REPEAT-PASSWORD-TYPING",
    text: text,
  };
}

export default registrationReducer;
