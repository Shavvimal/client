import React, { useState } from 'react';
import {Home} from './pages';
import { Header } from './layout';
import { WelcomePage } from './pages';
import './styles/app.css';


function App(){

    return (
        <>
            <Header />
            <Home />
            <WelcomePage/>
        </>
    )
}


export default App;
