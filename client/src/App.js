import React from 'react';

import { Header, Footer } from './layout';
import { Welcome } from './pages';
import "./style.css";

function App(){

  return(
    <>
    <Header/>
    <Welcome/>
    <Footer/>
    </>
  );
};

export default App;