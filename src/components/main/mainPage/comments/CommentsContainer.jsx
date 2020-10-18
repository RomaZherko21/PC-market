import React, { Fragment } from 'react'

import LeaveCommentContainer from './leaveComment/LeaveCommentContainer'
import Comments from './Comments'






const CommentsContainer = (props) => {

  return (
    <Fragment>
      <Comments comments={props.store.getState().mainPage.comments}/>
      <LeaveCommentContainer store={props.store}/>
    </Fragment>
  )


}

export default CommentsContainer;