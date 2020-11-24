import { connect } from 'react-redux';
import {addComment, onTextTyping} from '../../../../../redux/reducers/comments-reducer'
import LeaveComment from './LeaveComment'

const mapStateToProps = (state) => {
  return { 
    currentComment: state.comments.currentComment,
    currentUser: state.logIn.currentUser,
  }
}

const LeaveCommentContainer = connect(mapStateToProps, {
  addComment,
  onTextTyping,
})(LeaveComment);


export default LeaveCommentContainer;