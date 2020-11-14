import React, { Fragment } from 'react'

import UserProfile from './UserProfile'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import Loading from '../../../common/Loading'

import { getProfileThunkCreator, loading } from '../../../../redux/reducers/currentUser-reducer'


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



export default compose(
  connect(mapStateToProps, {
    loading,
    getProfileThunkCreator,
  }),
  withRouter,
)(UserProfileContainer)
