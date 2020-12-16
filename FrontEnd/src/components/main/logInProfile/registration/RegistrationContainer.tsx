import Registration from "./Registration";
import { connect } from "react-redux";
import { AppStateType } from "../../../../redux/redux-store";
import { compose } from "redux";
import {
  actions,
  postClientThunkCreator,
} from "../../../../redux/reducers/registration-reducer";

const mapStateToProps = (state: AppStateType) => {
  return {
    currentRegistrationInfo: state.registration.currentRegistrationInfo,
    errors: state.registration.errors,
    serverResponse: state.registration.serverResponse,
  };
};

export default compose<AppStateType>(
  connect(mapStateToProps, {
    onNameTyping: actions.onNameTyping,
    onSurnameTyping: actions.onSurnameTyping,
    onMailTyping: actions.onMailTyping,
    onAdressTyping: actions.onAdressTyping,
    onPasswordTyping: actions.onPasswordTyping,
    onPhotoTyping: actions.onPhotoTyping,
    onRepeatPasswordTyping: actions.onRepeatPasswordTyping,
    postClientThunkCreator,
  })
)(Registration);
