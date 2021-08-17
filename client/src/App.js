import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Header } from "./layout";
import { QuestionPage, WelcomePage } from "./pages";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Switch />
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/QuestionPage">
          <QuestionPage />
        </Route>      
    </>
  );
}

export default App;
