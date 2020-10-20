import Registration from './Registration'
import {connect} from 'react-redux'

//Action Creators functions
import onNameTypingAC from './actionCreators/onNameTypingAC'


const mapStateToProps = (state)=>{
  return{
    currentRegistrationInfo: state.registration.currentRegistrationInfo,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    onNameTyping: (text)=> dispatch(onNameTypingAC(text)),
  }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;