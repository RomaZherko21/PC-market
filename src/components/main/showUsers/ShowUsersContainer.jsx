import ShowUsers from './ShowUsers'
import { connect } from 'react-redux'

//Action Creators functions
import addUsersAC from './actionCreators/addUsersAC'
import onPageChangeAC from './actionCreators/onPageChangeAC'
import loadingAC from './actionCreators/loadingAC'

import Loading from '../../common/Loading'

import React, { Fragment } from 'react'
import * as axios from 'axios'


class ShowUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.isFetching()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.count}&page=${this.props.state.page}`).then(response => {
      this.props.addUsers(response.data.items)
      this.props.isFetching()
    })
  }
  onPageChange(page, num) {
    this.props.isFetching()
    this.props.onPageChange(num);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.count}&page=${page + num}`).then(response => {
      this.props.addUsers(response.data.items)
      this.props.isFetching()
    })
  }
  render() {
    return (
      <Fragment>
        {this.props.state.isFetching ? <Loading /> : <ShowUsers state={this.props.state}
          onPageChange={this.onPageChange} onCurrentUserInfo={this.props.onCurrentUserInfo}/>}
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
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ShowUsersContainer);