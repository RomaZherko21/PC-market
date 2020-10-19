
import Comments from './Comments'


import {connect} from 'react-redux'



let mapStateToProps = (state)=>{
  return{
    comments: state.mainPage.comments,
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{

  }
}


const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;