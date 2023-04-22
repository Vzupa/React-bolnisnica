import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega";
import {useZaposleni} from "../../App";


export const TabelaZaposlenih = () => {
    const {zaposleni, setZaposleni} = useZaposleni();

    const handleDelete = (zaposlenStari: Zaposlen) => {
        const updatedZaposleni = zaposleni.filter(
            (zaposlen: Zaposlen) => zaposlenStari.id !== zaposlen.id
        );
        setZaposleni(updatedZaposleni);
    }

    return(
        <div>
            <ul className="list-group">
                {zaposleni.map((zaposlen: Zaposlen) => (
                    <li key={zaposlen.id} className="list-group-item">
                        <IzpisZaposlenega zaposlen={zaposlen} handleDelete={handleDelete}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}