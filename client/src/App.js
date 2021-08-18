import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { Header } from "./layout";
import { QuestionPage, WelcomePage, QuestionCurrentPage, Lobby } from "./pages";
import "./styles/app.css";


function App() {
  return (
    <>

      <Header />
      <Lobby />
      <Switch >
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/QuestionPage">
          <QuestionCurrentPage />
          {/* <QuestionPage /> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
