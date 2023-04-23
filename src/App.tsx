import React from 'react';
import './App.css';
import {originalOdostnosti, originalZaposleni} from "./Modules/main";
import {Link, Outlet, useOutletContext} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

export function useZaposleni() {
    return useOutletContext<any>();
}

export function useOdostnosti() {
    return useOutletContext<any>();
}

function NavBar() {
    return (
        <div className="navbar">
            <Link to={"/"}> Domov</Link>
            <Link to={"/vsiZaposleni"}>Vsi Zaposleni</Link>
            <Link to={"/vsiUpokojeni"}>Vsi Upokojeni</Link>
            <Link to={"/vsiOdostni"}>Vsi Odsotni</Link>
            <Link to={"/dodajZaposlenega"}>Dodaj Zaposlenega </Link>
        </div>
    );
}

function App() {
    const [zaposleni, setZaposleni] = React.useState(originalZaposleni);
    const [odsotnosti, setOdsotnosti] = React.useState(originalOdostnosti);

    return (
        <div>
            <NavBar/>
            <Outlet context={{
                zaposleni, setZaposleni,
                odsotnosti, setOdsotnosti
            }}/>
        </div>
    );
}

export default App;
