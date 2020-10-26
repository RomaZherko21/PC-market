import { connect } from 'react-redux';

import {addComment, onNameTyping, onTextTyping} from '../../../../../redux/reducers/mainPage-reducer'


import LeaveComment from './LeaveComment'

const mapStateToProps = (state) => {
  return { 
    currentComment: state.mainPage.currentComment,
  }
}
const LeaveCommentContainer = connect(mapStateToProps, {
  addComment,
  onNameTyping,
  onTextTyping,
})(LeaveComment);


export default LeaveCommentContainer;