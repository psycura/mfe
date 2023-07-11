import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import { Router, Redirect, Switch, Route } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Progress from "./components/Progress";
import { createBrowserHistory } from 'history';

const generateClassname = createGenerateClassName({
  productionPrefix: 'con'
});

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();
export default () => {

  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);


  return (
    <StylesProvider generateClassName={generateClassname}>
      <Router history={history}>
        <div>
          <Header signedIn={isSignedIn} onSignOut={() => setSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setSignedIn(true)}/>
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/'/>}
                <DashboardLazy/>
              </Route>
              <Route path='/' component={MarketingLazy}/>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};
