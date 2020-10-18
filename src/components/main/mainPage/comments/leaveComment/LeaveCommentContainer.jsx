import React, { } from 'react'

import {addCommentActionCreator} from '../../../../../redux/redux-store'
import LeaveComment from './LeaveComment'




const LeaveCommentContainer = (props) => {

  function handleClick(author, text) {
    if (author !== '' && text !== '') {
      props.store.dispatch(addCommentActionCreator(author, text ));
    }
    author = '';
    text = '';
  }
  return (
    <LeaveComment handleClick={handleClick}/>
  )


}

export default LeaveCommentContainer;