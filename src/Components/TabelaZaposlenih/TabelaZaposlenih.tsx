import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega";
import {useOddelki, useOdostnosti, useZaposleni} from "../../App";
import {GumbiZaTabelo} from "../GumbiZaTabelo";
import {Oddelek} from "../../Modules/Oddelek";
import {Odsotnost} from "../../Modules/Odsotnost";

interface TabelaZaposlenihProps {
    pogoj: boolean;
    oddelekID?: number;
}

export const TabelaZaposlenih = (props: TabelaZaposlenihProps): JSX.Element => {
    const {zaposleni, setZaposleni} = useZaposleni();
    const { oddelki, setOddelki } = useOddelki();
    const { odsotnosti, setOdsotnosti } = useOdostnosti();

    const handleDelete = (zaposlenStari: Zaposlen): void => {
        const updatedZaposleni: Zaposlen[] = zaposleni.filter(
            (zaposlen: Zaposlen) => zaposlenStari.id !== zaposlen.id
        );
        setZaposleni(updatedZaposleni);

        const updatedOddelki: Oddelek[] = oddelki.map((oddelek: Oddelek) => {
            if (oddelek.zaposleni.find((zaposlen: Zaposlen) => zaposlen.id === zaposlenStari.id)) {
                const updatedZaposleni = oddelek.zaposleni.filter((zaposlen: Zaposlen) => zaposlen.id !== zaposlenStari.id);
                return { ...oddelek, zaposleni: updatedZaposleni };
            }
            return oddelek;
        });
        setOddelki(updatedOddelki);

        odsotnosti.filter((odstotnost: Odsotnost) => {
            if (odstotnost.zaposlen.id === zaposlenStari.id) {
                setOdsotnosti([...odsotnosti.filter((o: Odsotnost) => o.id !== odstotnost.id)]);
            }
            if (odstotnost.nadomestniZaposlen.id === zaposlenStari.id) {
                setOdsotnosti([...odsotnosti.filter((o: Odsotnost) => o.id !== odstotnost.id)]);
            }
        });
    }

    const zaposleniToDisplay: Zaposlen[] = props.oddelekID === 0 ? zaposleni : oddelki.filter((oddelek: Oddelek) => oddelek.id === props.oddelekID)[0]?.zaposleni ?? [];

    return (
        <div>
            <ul className="list-group">
                {zaposleniToDisplay.map((zaposlen: Zaposlen) => (
                    zaposlen.upokojen === props.pogoj ? null : (
                        <li key={zaposlen.id} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <IzpisZaposlenega zaposlen={zaposlen} />
                                <GumbiZaTabelo zaposlen={zaposlen} handleDelete={handleDelete} />
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}