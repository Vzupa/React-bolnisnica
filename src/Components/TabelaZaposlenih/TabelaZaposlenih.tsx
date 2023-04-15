import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega/IzpisZaposlenega";

interface Props {
    zaposleni: Zaposlen[];
}

export const TabelaZaposlenih = (props: Props) => {

    return(
        <div>
            <ul>
                {props.zaposleni.map((zaposlen) => (
                    <li key={zaposlen.id} >
                        <IzpisZaposlenega zaposlen={zaposlen} />
                    </li>
                ))}
            </ul>
        </div>
    );
}