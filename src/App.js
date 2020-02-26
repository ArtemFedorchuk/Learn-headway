import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Routes from './constants/routes';

import {
  SideBar,
  WrappedlLoginForm,
  WrappedlResetPasswordForm,
  WrappedlSignUpForm,
  WrappedForgotPasswordForm
} from './components/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={Routes.HOME} component={SideBar} />
        <Route exact path={Routes.LOGIN} component={WrappedlLoginForm} />
        <Route exact path={Routes.RESET_PASSWORD} component={WrappedlResetPasswordForm} />
        <Route exact path={Routes.SIGN_UP} component={WrappedlSignUpForm} />
        <Route exact path={Routes.FORGOT_PASSWORD} component={WrappedForgotPasswordForm} />
      </Switch>
    </div>
  );
}

export default App;
