import React from 'react';
import './App.css';
import {originalOddelki, originalOdostnosti, originalZaposleni} from "./Modules/main";
import {Link, Outlet, useOutletContext} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

export function useZaposleni() {
    return useOutletContext<any>();
}

export function useOdostnosti() {
    return useOutletContext<any>();
}

export function useOddelki() {
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
    const [oddelki, setOddelki] = React.useState(originalOddelki);

    return (
        <div>
            <NavBar/>
            <Outlet context={{
                zaposleni, setZaposleni,
                odsotnosti, setOdsotnosti,
                oddelki, setOddelki
            }}/>
        </div>
    );
}

export default App;
