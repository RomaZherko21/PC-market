import Registration from './Registration'
import { connect } from 'react-redux'

import { actions, postClientThunkCreator } from '../../../../redux/reducers/registration-reducer'

const mapStateToProps = (state) => {
  return {
    state: state.registration,
  }
}
const RegistrationContainer = connect(mapStateToProps, {
  onNameTyping: actions.onNameTyping,
  onSurnameTyping: actions.onSurnameTyping,
  onMailTyping: actions.onMailTyping,
  onAdressTyping: actions.onAdressTyping,
  onPasswordTyping: actions.onPasswordTyping,
  onPhotoTyping: actions.onPhotoTyping,
  onRepeatPasswordTyping: actions.onRepeatPasswordTyping,
  postClientThunkCreator,
})(Registration);

export default RegistrationContainer;