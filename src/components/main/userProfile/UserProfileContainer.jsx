import React, { Fragment } from 'react'

import UserProfile from './UserProfile'
import { connect } from 'react-redux'

import Loading from '../../common/Loading'

import { withRouter } from 'react-router-dom'
import { getProfileThunkCreator, loading } from '../../../redux/reducers/currentUser-reducer'


class UserProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getProfileThunkCreator(this.props.match.params.userID)
  }
  render() {
    return (
      <Fragment>
        {this.props.isFetching ? <Loading /> : <UserProfile state={this.props.currentUser} />}
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

let WithURLUserProfileContainer = withRouter(UserProfileContainer)

export default connect(mapStateToProps, {
  loading,
  getProfileThunkCreator,
})(WithURLUserProfileContainer);
