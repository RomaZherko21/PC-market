import React, { } from 'react'
import { connect } from 'react-redux';

import {addCommentActionCreator} from '../../../../../redux/redux-store'
import LeaveComment from './LeaveComment'




// const LeaveCommentContainer = (props) => {

//   function handleClick(author, text) {
//     if (author !== '' && text !== '') {
//       props.store.dispatch(addCommentActionCreator(author, text ));
//     }
//     author = '';
//     text = '';
//   }
//   return (
//     <LeaveComment handleClick={handleClick}/>
//   )
// }

let mapStateToProps = (state)=>{
  return{
comments: state.mainPage.comments,
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    handleClick: (author,text)=>{
      if (author !== '' && text !== '') {
        dispatch(addCommentActionCreator(author, text ));
      }
    }
  }
}

let LeaveCommentContainer = connect(mapStateToProps, mapDispatchToProps)(LeaveComment);


export default LeaveCommentContainer;