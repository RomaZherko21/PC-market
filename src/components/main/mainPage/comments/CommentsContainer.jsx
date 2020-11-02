
import Comments from './Comments'


import {connect} from 'react-redux'



const mapStateToProps = (state)=>{
  return{
    comments: state.comments.comments,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{

  }
}


const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;