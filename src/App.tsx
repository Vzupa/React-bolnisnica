import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TabelaZaposlenih} from "./Components/TabelaZaposlenih/TabelaZaposlenih";
import {originalZaposleni} from "./Modules/main";
import {Link, Outlet, useOutletContext} from "react-router-dom";

export function useZaposleni() {
  return useOutletContext<any>();
}

function App() {
  const [zaposleni, setZaposleni] = React.useState(originalZaposleni);

  return (
    <div>
      <Link to={"/vsiZaposleni"}>Vsi Zaposleni</Link>
      <Outlet context={ {zaposleni, setZaposleni} } />
    </div>
  );
}

export default App;
