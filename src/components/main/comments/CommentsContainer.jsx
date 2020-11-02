import Comments from './Comments'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
   comments: state.comments.comments,
  }
}


export default connect(mapStateToProps, {
 
})(Comments);