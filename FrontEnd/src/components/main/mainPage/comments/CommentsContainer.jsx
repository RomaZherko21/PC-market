import Comments from './Comments'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
  }
}

const CommentsContainer = connect(mapStateToProps, {})(Comments);

export default CommentsContainer;