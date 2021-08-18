import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { Header } from "./layout";
import { QuestionPage, WelcomePage, QuestionCurrentPage, Lobby, Leaderboard } from "./pages";
import "./styles/app.css";


function App() {
  return (
    <>

      <Header />
      <Lobby />
      <Switch >
        <Route exact path="/">
          <WelcomePage />
          {/* <ScoreCounter /> */}
        </Route>
        <Route exact path='/QuestionPage'>
          <QuestionCurrentPage />
        </Route>
        <Route exact path='/Leaderboard'>
          <Leaderboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
