import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import UserProfile from './UserProfile'
import Loading from '../../../common/Loading/Loading'
import { getProfileThunkCreator } from '../../../../redux/reducers/allClients-reducer'


class UserProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getProfileThunkCreator(this.props.match.params.userID)
  }

  render() {
    return (
      <Fragment>
        {this.props.isFetching ? <Loading /> : <UserProfile currentUser={this.props.currentUser} />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.allClients,
    isFetching: state.common.isFetching,
  }
}

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
  }),
  withRouter,
)(UserProfileContainer)
