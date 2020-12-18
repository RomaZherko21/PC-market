import Profile from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { compose } from "redux";

import {
  actions,
  putNewUserProfileInfoThunkCreator,
} from "../../../redux/reducers/logIn-reducer";

const mapStateToProps = (state: AppStateType) => {
  return {
    currentUser: state.logIn.currentUser,
  };
};

export default compose<AppStateType>(
  connect(mapStateToProps, {
    putNewUserProfileInfoThunkCreator,
    onProfileNameChange: actions.onProfileNameChange,
    onProfileAdressChange: actions.onProfileAdressChange,
    onProfileMoneyChange: actions.onProfileMoneyChange,
  })
)(Profile);
