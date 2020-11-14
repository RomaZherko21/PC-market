import React, { Fragment } from 'react'
import { Route } from "react-router-dom";

import LogInContainer from './logIn/LogInContainer'
import RegistrationContainer from './registration/RegistrationContainer'

const LogInProfile = () => {
  return (
    <Fragment>
      <Route path='/logInProfile/logIn'>
        <LogInContainer />
      </Route>
      <Route  exact path='/logInProfile/registration'>
        <RegistrationContainer />
      </Route>
    </Fragment>
  )
}

export default LogInProfile;