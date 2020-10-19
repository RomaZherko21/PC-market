import React, { Fragment } from 'react'

import LeaveCommentContainer from './leaveComment/LeaveCommentContainer'
import Comments from './Comments'


import {connect} from 'react-redux'


// const CommentsContainer = (props) => {

//   return (
 
//      <Fragment>
//         <Comments/>
//         {/* <LeaveCommentContainer store={store} /> */}
//       </Fragment>
      
 
//   )


// }

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