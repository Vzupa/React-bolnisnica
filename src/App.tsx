import React from 'react';
import './App.css';
import {originalZaposleni} from "./Modules/main";
import {Link, Outlet, useOutletContext} from "react-router-dom";

export function useZaposleni() {
  return useOutletContext<any>();
}

function App() {
  const [zaposleni, setZaposleni] = React.useState(originalZaposleni);

  return (
    <div>
        <Link to={"/dodajZaposlenega"}>Dodaj Zaposlenega </Link>
      <Link to={"/vsiZaposleni"}>Vsi Zaposleni</Link>
      <Outlet context={ {zaposleni, setZaposleni} } />
    </div>
  );
}

export default App;
