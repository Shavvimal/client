import React, { useState } from 'react';
import { Header } from './layout';
import { QuestionPage, WelcomePage } from './pages';
import './styles/app.css';


function App(){

    return (
        <>
            <Header />
            <WelcomePage/>
            <QuestionPage />
        </>
    )
}


export default App;
