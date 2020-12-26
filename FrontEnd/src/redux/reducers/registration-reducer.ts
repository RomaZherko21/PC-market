import logInProfileAPI from "../../api/logInProfileAPI";
import { User } from "../../types/userTypes";
import { Dispatch } from "redux";
import { InferActionTypes } from "../redux-store";

let initialState = {
  currentRegistrationInfo: {
    name: "" as string,
    surname: "" as string,
    mail: "" as string,
    adress: "" as string,
    photo: "" as string,
    password: "" as string,
    repeatPassword: "" as string,
  },
  errors: {
    name: " " as string,
    surname: " " as string,
    mail: " " as string,
    adress: " " as string,
    photo: " " as string,
    password: " " as string,
    repeatPassword: " " as string,
  },
  serverResponse: {
    err: true as boolean,
    message: "" as string,
  },
};

type ActionType = InferActionTypes<typeof actions>;

type InitialStateType = typeof initialState;

const registrationReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "ON_NAME_TYPING": {
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
    case "ON_SURNAME_TYPING": {
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
    case "ON_MAIL_TYPING": {
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
    case "ON_ADRESS_TYPING": {
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
    case "ON_PHOTO_TYPING": {
      let errors = { ...state.errors };
      action.text.length < 7
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
    case "ON_PASSWORD_TYPING": {
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
    case "ON_REPEAT_PASSWORD_TYPING": {
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
    case "ON_REGISTRATION_SERVER_RESPONSE": {
      return {
        ...state,
        serverResponse: {
          err: action.err,
          message: action.message,
        },
      };
    }
    case "ON_SUBMIT": {
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

export const actions = {
  onNameTyping: (text: string) =>
    ({
      type: "ON_NAME_TYPING",
      text,
    } as const),
  onSurnameTyping: (text: string) =>
    ({
      type: "ON_SURNAME_TYPING",
      text,
    } as const),
  onMailTyping: (text: string) =>
    ({
      type: "ON_MAIL_TYPING",
      text,
    } as const),
  onAdressTyping: (text: string) =>
    ({
      type: "ON_ADRESS_TYPING",
      text,
    } as const),
  onPhotoTyping: (text: string) =>
    ({
      type: "ON_PHOTO_TYPING",
      text,
    } as const),
  onPasswordTyping: (text: string) =>
    ({
      type: "ON_PASSWORD_TYPING",
      text,
    } as const),
  onRepeatPasswordTyping: (text: string) =>
    ({
      type: "ON_REPEAT_PASSWORD_TYPING",
      text,
    } as const),
  onRegistrationServerResponse: (err: boolean, message: string) =>
    ({
      type: "ON_REGISTRATION_SERVER_RESPONSE",
      err,
      message,
    } as const),
  onSubmit: () => ({ type: "ON_SUBMIT" } as const),
};

export const postClientThunkCreator = (client: User) => {
  return async (dispatch: Dispatch<ActionType>) => {
    let response = await logInProfileAPI.postNewClient(client);
    dispatch(
      actions.onRegistrationServerResponse(
        response.data.err,
        response.data.message
      )
    );
    if (!response.data.err) dispatch(actions.onSubmit());
    return response;
  };
};

export default registrationReducer;
