import React, { Fragment } from 'react'

import UserProfile from './UserProfile'
import { connect } from 'react-redux'

//Action Creators functions
import loadingAC from './actionCreators/loadingAC'
import onChangeCurrentUserAC from './actionCreators/onChangeCurrentUserAC'

import Loading from '../../common/Loading'

import { withRouter } from 'react-router-dom'
import usersAPI from '../../../api/api'


class UserProfileContainer extends React.Component {

  componentDidMount() {
    // this.props.isFetching()

    usersAPI.getUserProfile(this.props.match.params.userID)
    .then(response => {
      this.props.onChangeCurrentUser(response.data)
      // this.props.isFetching()
    })
  }
  render() {
    return (
      <Fragment>
        {!this.props.isFetching ? <Loading /> : <UserProfile state={this.props.currentUser} />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    isFetching: state.showUsers.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    isFetching: () => dispatch(loadingAC()),
    onChangeCurrentUser: (user) => dispatch(onChangeCurrentUserAC(user)),
  }
}

let WithURLUserProfileContainer = withRouter(UserProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLUserProfileContainer);
