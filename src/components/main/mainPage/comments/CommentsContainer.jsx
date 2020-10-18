import React, { Fragment } from 'react'

import LeaveCommentContainer from './leaveComment/LeaveCommentContainer'
import Comments from './Comments'

import StoreContext from '../../../../storeContext'




const CommentsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
       (store)=> (<Fragment>
        <Comments comments={store.getState().mainPage.comments} />
        <LeaveCommentContainer store={store} />
      </Fragment>)
      }
    </StoreContext.Consumer>
  )


}

export default CommentsContainer;