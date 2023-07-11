import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";


const generateClassname = createGenerateClassName({
  productionPrefix: 'au'
});
export default ({history}) => {
  return <div>
    <StylesProvider generateClassName={generateClassname}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signup" component={SignUp}/>
          <Route path="/auth/signin" component={SignIn}/>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
}
