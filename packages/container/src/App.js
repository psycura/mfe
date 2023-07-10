import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassname = createGenerateClassName({
  productionPrefix: 'con'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header/>
          <MarketingApp/>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
