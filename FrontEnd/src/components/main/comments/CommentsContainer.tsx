import Comments from './Comments'
import { connect } from 'react-redux'
import { AppStateType } from "../../../redux/redux-store";
import { compose } from "redux";
import {onNextCommentPage, onPrevCommentPage} from '../../../redux/reducers/comments-reducer'

const mapStateToProps = (state:AppStateType) => {
  return {
   comments: state.comments.someComments,
  }
}
export default compose<AppStateType>(
  connect(mapStateToProps, {
    onNextCommentPage,
    onPrevCommentPage,
  })
)(Comments);