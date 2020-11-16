import Registration from './Registration'
import { connect } from 'react-redux'

import { onNameTyping, onSurnameTyping, onMailTyping, onAdressTyping, onPasswordTyping, onRepeatPasswordTyping, postClientThunkCreator } from '../../../../redux/reducers/registration-reducer'

const mapStateToProps = (state) => {
  return {
    state: state.registration,
  }
}
const RegistrationContainer = connect(mapStateToProps, {
  onNameTyping,
  onSurnameTyping,
  onMailTyping,
  onAdressTyping,
  onPasswordTyping,
  onRepeatPasswordTyping,
  postClientThunkCreator,
})(Registration);

export default RegistrationContainer;