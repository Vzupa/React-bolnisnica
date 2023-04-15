import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TabelaZaposlenih} from "./Components/TabelaZaposlenih/TabelaZaposlenih";
import {zaposleni} from "./Modules/main";

function App() {
  return (
    <TabelaZaposlenih zaposleni={zaposleni} />
  );
}

export default App;
