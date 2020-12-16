import LogIn from "./LogIn";
import { connect } from "react-redux";
import { AppStateType } from "../../../../redux/redux-store";
import { compose } from "redux";
import {
  actions,
  getUserThunkCreator,
} from "../../../../redux/reducers/logIn-reducer";

const mapStateToProps = (state: AppStateType) => {
  return {
    currentLogInInfo: state.logIn.currentLogInInfo,
    currentUser: state.logIn.currentUser,
    wrongData: state.logIn.wrongData,
  };
};

export default compose<AppStateType>(
  connect(mapStateToProps, {
    onLogInMailTyping: actions.onLogInMailTyping,
    onLogInPasswordTyping: actions.onLogInPasswordTyping,
    getUserThunkCreator,
  })
)(LogIn);
