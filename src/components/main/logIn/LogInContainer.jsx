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
const mapDispatchToProps = (dispatch) => {
  return {
    onLogInMailTypingAC: (text) => dispatch(onLogInMailTypingAC(text)),
    onLogInPasswordTypingAC: (text) => dispatch(onLogInPasswordTypingAC(text)),
    onLogInAC: (allUsers) => dispatch(onLogInAC(allUsers)),
  }
}

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default LogInContainer;