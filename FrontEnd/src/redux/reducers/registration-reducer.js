import logInProfileAPI from "../../api/logInProfileAPI";

const ON_NAME_TYPING = "ON-NAME-TYPING";
const ON_SURNAME_TYPING = "ON-SURNAME-TYPING";
const ON_MAIL_TYPING = "ON-MAIL-TYPING";
const ON_ADRESS_TYPING = "ON-ADRESS-TYPING";
const ON_PHOTO_TYPING = "ON-PHOTO-TYPING";
const ON_PASSWORD_TYPING = "ON-PASSWORD-TYPING";
const ON_REPEAT_PASSWORD_TYPING = "ON-REPEAT-PASSWORD-TYPING";
const ON_REGISTRATION_SERVER_RESPONSE = "ON-REGISTRATION-SERVER-RESPONSE";
const ON_SUBMIT = "ON-SUBMIT";

let initialState = {
  currentRegistrationInfo: {
    name: "",
    surname: "",
    mail: "",
    adress: "",
    photo: "",
    password: "",
    repeatPassword: "",
  },
  errors: {
    name: " ",
    surname: " ",
    mail: " ",
    adress: " ",
    photo: " ",
    password: " ",
    repeatPassword: " ",
  },
  serverResponse: {
    err: true,
    message: "",
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
    case ON_PHOTO_TYPING: {
      let errors = { ...state.errors };
      action.text.length<7
        ? (errors.photo = "Need correct photo URL!")
        : (errors.photo = "");

      return {
        ...state,
        currentRegistrationInfo: {
          ...state.currentRegistrationInfo,
          photo: action.text,
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
    case ON_REGISTRATION_SERVER_RESPONSE: {
      return {
        ...state,
        serverResponse: {
          err: action.err,
          message: action.message,
        },
      };
    }
    case ON_SUBMIT: {
      return {
        ...state,
        currentRegistrationInfo: {
          name: "",
          surname: "",
          mail: "",
          adress: "",
          photo: "",
          password: "",
          repeatPassword: "",
        },
      };
    }
    default:
      return state;
  }
};

export const onAdressTyping = (text) => ({
  type: "ON-ADRESS-TYPING",
  text,
});
export const onMailTyping = (text) => ({
  type: "ON-MAIL-TYPING",
  text,
});
export const onNameTyping = (text) => ({
  type: "ON-NAME-TYPING",
  text,
});
export const onSurnameTyping = (text) => ({
  type: "ON-SURNAME-TYPING",
  text,
});
export const onPhotoTyping = (text) => ({
  type: "ON-PHOTO-TYPING",
  text,
});
export const onPasswordTyping = (text) => ({
  type: "ON-PASSWORD-TYPING",
  text,
});
export const onRepeatPasswordTyping = (text) => ({
  type: "ON-REPEAT-PASSWORD-TYPING",
  text,
});
export const onRegistrationServerResponse = (err, message) => ({
  type: "ON-REGISTRATION-SERVER-RESPONSE",
  err,
  message,
});
export const onSubmit = () => ({type: "ON-SUBMIT"});

export const postClientThunkCreator = (client) => {
  return async (dispatch) => {
    let response = await logInProfileAPI.postNewClient(client);
    dispatch(onRegistrationServerResponse(response.data.err, response.data.message));
    if (!response.data.err) dispatch(onSubmit());
    return response;
  };
};

export default registrationReducer;
