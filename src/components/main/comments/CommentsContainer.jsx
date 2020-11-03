import Comments from './Comments'
import { connect } from 'react-redux'

import {onNextCommentPage, onPrevCommentPage} from '../../../redux/reducers/comments-reducer'


const mapStateToProps = (state) => {
  return {
   comments: state.comments.someComments,
  }
}


export default connect(mapStateToProps, {
  onNextCommentPage,
  onPrevCommentPage,
})(Comments);