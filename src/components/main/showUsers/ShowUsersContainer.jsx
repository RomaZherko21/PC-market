import ShowUsers from './ShowUsers'
import { connect } from 'react-redux'

//Action Creators functions
import addUsersAC from './actionCreators/addUsersAC'
import onPageChangeAC from './actionCreators/onPageChangeAC'
import loadingAC from './actionCreators/loadingAC'

import Loading from '../../common/Loading'

import React, { Fragment } from 'react'
import { getUsersThunkCreator, getNewUsersThunkCreator } from '../../../redux/reducers/showUsers-reducer'

class ShowUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.state.count, this.props.state.page);
  }
  onPageChange(page, num) {
      this.props.getNewUsersThunkCreator(this.props.state.count, page,num);
  }
  render() {
    return (
      <Fragment>
        {this.props.state.isFetching ? <Loading /> : <ShowUsers state={this.props.state}
          onPageChange={this.onPageChange} onCurrentUserInfo={this.props.onCurrentUserInfo} />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.showUsers,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (allUsers) => dispatch(addUsersAC(allUsers)),
    onPageChange: (increment) => dispatch(onPageChangeAC(increment)),
    isFetching: () => dispatch(loadingAC()),
    getUsersThunkCreator: (count, page) => dispatch(getUsersThunkCreator(count, page)),
    getNewUsersThunkCreator: (count, page,num) => dispatch(getNewUsersThunkCreator(count, page, num)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ShowUsersContainer);