import React from 'react';
import './App.css';
import {originalZaposleni} from "./Modules/main";
import {Link, Outlet, useOutletContext} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

export function useZaposleni() {
    return useOutletContext<any>();
}

function NavBar() {
    return (
        <div className="navbar">
            <Link to={"/"}> Domov</Link>
            <Link to={"/vsiZaposleni"}>Vsi Zaposleni</Link>
            <Link to={"/dodajZaposlenega"}>Dodaj Zaposlenega </Link>
        </div>
    );
}

function App() {
    const [zaposleni, setZaposleni] = React.useState(originalZaposleni);

    return (
        <div>
            <NavBar />
            <Outlet context={{zaposleni, setZaposleni}}/>
        </div>
    );
}

export default App;
