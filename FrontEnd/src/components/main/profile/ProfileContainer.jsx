import Profile from './Profile'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
    currentUser: state.logIn.currentUser,
  }
}


export default connect(mapStateToProps, {

})(Profile);