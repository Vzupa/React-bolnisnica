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
            <ul>
                {zaposleni.map((zaposlen: Zaposlen) => (
                    <li key={zaposlen.id} >
                        <IzpisZaposlenega zaposlen={zaposlen} handleDelete={handleDelete}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}