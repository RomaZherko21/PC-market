import Registration from './Registration'
import { connect } from 'react-redux'

import {onNameTyping, onSurnameTyping, onMailTyping, onAdressTyping, onPasswordTyping, onSubmit, onRepeatPasswordTyping, postClientThunkCreator} from '../../../../redux/reducers/registration-reducer'

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
  onSubmit,
  postClientThunkCreator,
})(Registration);

export default RegistrationContainer;