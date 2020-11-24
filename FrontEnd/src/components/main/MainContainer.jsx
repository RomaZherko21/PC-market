import { connect } from 'react-redux'
import Main from './Main'

const mapStateToProps = (state) => {
  return {
    currentUser: state.logIn.currentUser
  }
}

export default connect(mapStateToProps,{})(Main)
