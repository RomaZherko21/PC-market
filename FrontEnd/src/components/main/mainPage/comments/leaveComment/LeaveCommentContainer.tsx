import { connect } from "react-redux";
import {
  addComment,
  onTextTyping,
} from "../../../../../redux/reducers/comments-reducer";
import LeaveComment from "./LeaveComment";
import { AppStateType } from "../../../../../redux/redux-store";
import { compose } from "redux";

const mapStateToProps = (state: AppStateType) => {
  return {
    currentComment: state.comments.currentComment,
    currentUser: state.logIn.currentUser,
  };
};

export default compose<AppStateType>(
  connect(mapStateToProps, {
    addComment,
    onTextTyping,
  })
)(LeaveComment);
