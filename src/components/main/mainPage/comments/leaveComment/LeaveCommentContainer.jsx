import { connect } from 'react-redux';

import { addCommentActionCreator } from '../../../../../redux/redux-store'
import LeaveComment from './LeaveComment'



const mapStateToProps = (state) => {
  return {
    comments: state.mainPage.comments,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (author, text) => {
      if (author !== '' && text !== '') {
        dispatch(addCommentActionCreator(author, text));
      }
    }
  }
}

const LeaveCommentContainer = connect(mapStateToProps, mapDispatchToProps)(LeaveComment);


export default LeaveCommentContainer;