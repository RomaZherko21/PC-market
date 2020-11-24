import LogIn from './LogIn'
import { connect } from 'react-redux'

import {onLogInMailTyping, onLogInPasswordTyping, getUserThunkCreator} from '../../../../redux/reducers/logIn-reducer'

const mapStateToProps = (state) => {
  return {
    allUsers: state.registration.allUsers,
    state: state.logIn,
  }
}

const LogInContainer = connect(mapStateToProps, {
  onLogInMailTyping,
  onLogInPasswordTyping,
  getUserThunkCreator
})(LogIn);

export default LogInContainer;