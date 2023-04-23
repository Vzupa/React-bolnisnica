import {useOdostnosti, useZaposleni} from "../../App";
import {Odsotnost} from "../../Modules/Odsotnost";
import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega";

export const PregledOdsotnih = () => {
    const { zaposleni, setZaposleni } = useZaposleni();
    const { odsotnosti, setOdsotnosti } = useOdostnosti();

    const handleDelete = (zaposlenStari: Zaposlen) => {
        const updatedZaposleni = zaposleni.filter(
            (zaposlen: Zaposlen) => zaposlenStari.id !== zaposlen.id
        );
        setZaposleni(updatedZaposleni);
    }

    return (
        <div>
            <ul className="list-group">
                {odsotnosti.map((odsotnost: Odsotnost) => (
                    <li key={odsotnost.id} className="list-group-item">
                        <h3>Odsoten:</h3>
                        <IzpisZaposlenega zaposlen={odsotnost.zaposlen}/>
                        <h3>Nadomešča:</h3>
                        <IzpisZaposlenega zaposlen={odsotnost.nadomestniZaposlen}/>
                        <h3>Do:</h3>
                        <p>{odsotnost.konec.toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}