import LogIn from './LogIn'
import { connect } from 'react-redux'

//Action Creators functions
import onLogInMailTypingAC from './actionCreators/onLogInMailTypingAC'
import onLogInPasswordTypingAC from './actionCreators/onLogInPasswordTypingAC'
import onLogInAC from './actionCreators/onLogInAC'


const mapStateToProps = (state) => {
  return {
    allUsers: state.registration.allUsers,
    state: state.logIn,
  }
}


const LogInContainer = connect(mapStateToProps, {
  onLogInMailTyping: onLogInMailTypingAC,
  onLogInPasswordTyping: onLogInPasswordTypingAC,
  onLogIn: onLogInAC,
})(LogIn);

export default LogInContainer;