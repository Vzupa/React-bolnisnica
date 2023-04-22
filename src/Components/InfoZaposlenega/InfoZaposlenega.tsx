import {useParams} from "react-router-dom";
import {useZaposleni} from "../../App";
import {Zaposlen} from "../../Modules/Zaposlen";
import React from "react";
import {originalOddelki} from "../../Modules/main";

export const InfoZaposlenega = () => {
    const { id } = useParams<{ id: string }>();
    const { zaposleni } = useZaposleni();

    const zaposlen = zaposleni.find((zaposlen: Zaposlen) => zaposlen.id === parseInt(id as string));

    let njegovOddelek;
    originalOddelki.forEach((oddelek) => {
        oddelek.zaposleni.forEach((o) => {
            if (o == zaposlen)
                njegovOddelek = oddelek.ime;
        });
    });

    return (
        <div className="container">
            <h1>{zaposlen.ime} {zaposlen.priimek}</h1>
            <div className="row align-items-center">
                <div className="col-sm-3">
                    <img src={zaposlen.slika} alt={zaposlen.ime} className="img-fluid" style={{maxWidth: "300px"}} />
                </div>
                <div className="col-sm-9">
                    <p>Oddelek: {njegovOddelek}</p>
                    <p>Delovno mesto: {zaposlen.delovnoMesto}</p>
                    <p>Leto delovne dobe: {zaposlen.letaDelovneDobe}</p>
                    <p>Upokojen: {zaposlen.upokojen ? "Da" : "Ne"}</p>
                    <p>Odsotnost: {zaposlen.odsotnost ? zaposlen.odsotnost : "Ni odsoten"}</p>
                </div>
            </div>
        </div>
    );
};