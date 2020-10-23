import ShowUsers from './ShowUsers'
import { connect } from 'react-redux'

//Action Creators functions
import addUsersAC from './actionCreators/addUsersAC'
import onPageChangeAC from './actionCreators/onPageChangeAC'



const mapStateToProps = (state) => {
  return {
    state: state.showUsers,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (allUsers) => dispatch(addUsersAC(allUsers)),
    onPageChange: (increment) => dispatch(onPageChangeAC(increment)),
  }
}

const ShowUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ShowUsers);

export default ShowUsersContainer;