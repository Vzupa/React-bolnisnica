import { useParams} from "react-router-dom";
import {useOdostnosti, useZaposleni} from "../../App";
import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega";
import {Odsotnost} from "../../Modules/Odsotnost";

export const IzbiraOdsotnost = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const { zaposleni } = useZaposleni();
    const { odsotnosti, setOdsotnosti } = useOdostnosti();
    const zaposlenZaOdsotnost: Zaposlen = zaposleni.find((zaposlen: Zaposlen) => zaposlen.id === parseInt(id as string));

    let mozniNadomestni: Zaposlen[] = [];
    zaposleni.forEach((o: Zaposlen) => {
        if (o.delovnoMesto === zaposlenZaOdsotnost.delovnoMesto && o.id !== zaposlenZaOdsotnost.id) {
            mozniNadomestni.push(o);
        }
    });

    const handleSubmit = (zaposlen: Zaposlen): void => {
        const dateInput: HTMLInputElement = document.getElementById("dateInput") as HTMLInputElement;
        let date: Date = new Date(dateInput.value);

        if (isNaN(date.getTime())) {
            date = new Date();
        }

        const odsotnost: Odsotnost = {
            id: parseInt(String(Math.random() * (24324))),
            zaposlen: zaposlenZaOdsotnost,
            nadomestniZaposlen: zaposlen,
            konec: date
        }

        setOdsotnosti([...odsotnosti, odsotnost]);
        console.log(odsotnosti);
    }

    return (
        <div>
            <h1>Izbira odsotnosti</h1>
            <h3>{zaposlenZaOdsotnost.ime} {zaposlenZaOdsotnost.priimek}</h3>
            <input
                type="date"
                id="dateInput"
                required={true}
                min={new Date().toISOString().split('T')[0]}
            />
                <ul className="list-group">
                    {mozniNadomestni.map((zaposlen: Zaposlen) => (
                        <li key={zaposlen.id} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <IzpisZaposlenega zaposlen={zaposlen} />
                                <button onClick={() => handleSubmit(zaposlen)} className="btn btn-success me-2">
                                    Izberi
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    );
}