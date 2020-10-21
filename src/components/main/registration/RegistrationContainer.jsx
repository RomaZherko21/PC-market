import Registration from './Registration'
import { connect } from 'react-redux'

//Action Creators functions
import onNameTypingAC from './actionCreators/onNameTypingAC'
import onSurnameTypingAC from './actionCreators/onSurnameTypingAC'
import onMailTypingAC from './actionCreators/onMailTypingAC'
import onAdressTypingAC from './actionCreators/onAdressTypingAC'
import onPasswordTypingAC from './actionCreators/onPasswordTypingAC'
import onSubmitAC from './actionCreators/onSubmitAC'
import onRepeatPasswordTypingAC from './actionCreators/onRepeatPasswordTypingAC'

import formValidationAC from './actionCreators/formValidationAC'

const mapStateToProps = (state) => {
  return {
    state: state.registration,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onNameTyping: (text) => dispatch(onNameTypingAC(text)),
    onSurnameTyping: (text) => dispatch(onSurnameTypingAC(text)),
    onMailTyping: (text) => dispatch(onMailTypingAC(text)),
    onAdressTyping: (text) => dispatch(onAdressTypingAC(text)),
    onPasswordTyping: (text) => dispatch(onPasswordTypingAC(text)),
    onRepeatPasswordTyping: (text) => dispatch(onRepeatPasswordTypingAC(text)),
    onSubmit: () => dispatch(onSubmitAC()),
    formValidation: () => dispatch(formValidationAC()),
  }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;