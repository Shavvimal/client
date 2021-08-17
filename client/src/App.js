import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Header } from "./layout";
import { QuestionPage, WelcomePage } from "./pages";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Switch >
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/QuestionPage">
          <QuestionPage />
        </Route>
      </Switch>      
    </>
  );
}

export default App;
