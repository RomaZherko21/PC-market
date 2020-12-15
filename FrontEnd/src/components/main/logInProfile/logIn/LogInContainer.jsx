import LogIn from './LogIn'
import { connect } from 'react-redux'

import { actions, getUserThunkCreator } from '../../../../redux/reducers/logIn-reducer'

const mapStateToProps = (state) => {
  return {
    allUsers: state.registration.allUsers,
    state: state.logIn,
  }
}

const LogInContainer = connect(mapStateToProps, {
  onLogInMailTyping: actions.onLogInMailTyping,
  onLogInPasswordTyping: actions.onLogInPasswordTyping,
  getUserThunkCreator
})(LogIn);

export default LogInContainer;