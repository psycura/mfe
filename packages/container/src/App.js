import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Progress from "./components/Progress";

const generateClassname = createGenerateClassName({
  productionPrefix: 'con'
});

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => {

  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header signedIn={isSignedIn} onSignOut={() => setSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setSignedIn(true)}/>
              </Route>
              <Route path='/' component={MarketingLazy}/>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
