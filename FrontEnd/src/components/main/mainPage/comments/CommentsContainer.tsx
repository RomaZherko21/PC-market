import Comments from './Comments'
import { connect } from 'react-redux'
import { AppStateType } from "../../../../redux/redux-store";
import { compose } from "redux";


const mapStateToProps = (state: AppStateType) => {
  return {
    comments: state.comments.comments
  }
}

export default compose<AppStateType>(
  connect(mapStateToProps, {
  })
)(Comments);