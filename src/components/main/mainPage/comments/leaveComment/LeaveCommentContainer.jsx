import { connect } from 'react-redux';

import addCommentAC from './actionCreators/addCommentAC'
import onNameTypingAC from './actionCreators/onNameTypingAC'
import onTextTypingAC from './actionCreators/onTextTypingAC'

import LeaveComment from './LeaveComment'



const mapStateToProps = (state) => {
  return {
    currentComment: state.mainPage.currentComment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(addCommentAC()),
    onNameTyping: (text) => dispatch(onNameTypingAC(text)),
    onTextTyping: (text) => dispatch(onTextTypingAC(text)),
  }
}

const LeaveCommentContainer = connect(mapStateToProps, mapDispatchToProps)(LeaveComment);


export default LeaveCommentContainer;