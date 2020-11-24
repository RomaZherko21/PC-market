import ShowUsers from './ShowUsers'
import { connect } from 'react-redux'

import Loading from '../../common/Loading/Loading'

import React, { Fragment } from 'react'
import { getUsersThunkCreator, getNewUsersThunkCreator, onPageChange } from '../../../redux/reducers/allClients-reducer'

class ShowUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.state.count, this.props.state.page);
  }
  onPageChange(page, num) {
    this.props.getNewUsersThunkCreator(this.props.state.count, page, num);
  }

  render() {
    return (
      <Fragment>
        {this.props.isFetching ? <Loading /> : <ShowUsers state={this.props.state}
          onPageChange={this.onPageChange} onCurrentUserInfo={this.props.onCurrentUserInfo} />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.allClients,
    isFetching: state.common.isFetching,
  }
}

export default connect(mapStateToProps, {
  onPageChange,
  getUsersThunkCreator,
  getNewUsersThunkCreator,
})(ShowUsersContainer);