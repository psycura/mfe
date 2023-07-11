import React, { lazy, Suspense } from "react";
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
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path='/auth' component={AuthLazy}/>
              <Route path='/' component={MarketingLazy}/>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
