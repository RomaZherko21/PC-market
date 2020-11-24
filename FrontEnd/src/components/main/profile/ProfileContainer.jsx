import Profile from './Profile'
import { connect } from 'react-redux'

import { putNewUserProfileInfoThunkCreator, onProfileNameChange, onProfileAdressChange, onProfileMoneyChange  } from '../../../redux/reducers/logIn-reducer'

const mapStateToProps = (state) => {
  return {
    currentUser: state.logIn.currentUser,
  }
}

export default connect(mapStateToProps, {
  putNewUserProfileInfoThunkCreator,
  onProfileNameChange,
  onProfileAdressChange,
  onProfileMoneyChange
})(Profile);