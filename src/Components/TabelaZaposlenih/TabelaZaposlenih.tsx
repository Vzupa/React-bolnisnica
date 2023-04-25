import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega";
import {useZaposleni} from "../../App";
import {GumbiZaTabelo} from "../GumbiZaTabelo";

interface TabelaZaposlenihProps {
    pogoj: boolean;
}

export const TabelaZaposlenih = (props: TabelaZaposlenihProps): JSX.Element => {
    const {zaposleni, setZaposleni} = useZaposleni();

    const handleDelete = (zaposlenStari: Zaposlen): void => {
        const updatedZaposleni: Zaposlen[] = zaposleni.filter(
            (zaposlen: Zaposlen) => zaposlenStari.id !== zaposlen.id
        );
        setZaposleni(updatedZaposleni);
    }

    return (
        <div>
            <ul className="list-group">
                {zaposleni.map((zaposlen: Zaposlen) => (
                    (zaposlen.upokojen === props.pogoj) ? null : (
                        <li key={zaposlen.id} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <IzpisZaposlenega zaposlen={zaposlen}/>
                                <GumbiZaTabelo zaposlen={zaposlen} handleDelete={handleDelete} />
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}