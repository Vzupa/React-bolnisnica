import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Info, InfoZaposlenega, IzbiraOdsotnost, SpreminjanjeZaposlenega, TabelaZaposlenih} from "./Components";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> ,
        children: [
            {
                path: "/",
                element: <Info />
            },
            {
                path: "/vsiZaposleni",
                element: <TabelaZaposlenih />
            },
            {
                path: "/dodajZaposlenega",
                element: <SpreminjanjeZaposlenega />
            },
            {
                path: "/urediZaposlenega/:id",
                element: <SpreminjanjeZaposlenega />
            },
            {
                path: "/pregledZaposlenega/:id",
                element: <InfoZaposlenega />
            },
            {
                path: "/izbiraOdsotnosti/:id",
                element: <IzbiraOdsotnost />
            }
        ],
    }
]);


root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
