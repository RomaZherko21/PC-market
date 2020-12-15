import Profile from './Profile'
import { connect } from 'react-redux'

import { actions, putNewUserProfileInfoThunkCreator } from '../../../redux/reducers/logIn-reducer'

const mapStateToProps = (state) => {
  return {
    currentUser: state.logIn.currentUser,
  }
}

export default connect(mapStateToProps, {
  putNewUserProfileInfoThunkCreator,
  onProfileNameChange: actions.onProfileNameChange,
  onProfileAdressChange: actions.onProfileAdressChange,
  onProfileMoneyChange: actions.onProfileMoneyChange
})(Profile);