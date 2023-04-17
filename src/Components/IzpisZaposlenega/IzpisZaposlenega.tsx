import {Zaposlen} from "../../Modules/Zaposlen";
import {originalOddelki} from "../../Modules/main";
import {Link} from "react-router-dom";

interface Props {
    zaposlen: Zaposlen;
    handleDelete: (zaposlen: Zaposlen) => void;
}

export const IzpisZaposlenega = (props: Props) => {
    let njegovOddelek: string = "";

    originalOddelki.forEach((oddelek) => {
        oddelek.zaposleni.forEach((zaposlen) => {
            if (zaposlen == props.zaposlen)
                njegovOddelek = oddelek.ime;
        });
    });

    return (
        <div>
            <p>
                Oddelek: {njegovOddelek},
                <b> {props.zaposlen.ime} {props.zaposlen.priimek}</b>,
                Delovna doba: {props.zaposlen.letaDelovneDobe},
                Delovno mesto: {props.zaposlen.delovnoMesto},
                Email: {props.zaposlen.email}
            </p>
            <Link to={`/urediZaposlenega/${props.zaposlen.id}`}>
                <button>Uredi</button>
            </Link>
            <button onClick={() => props.handleDelete(props.zaposlen)}>Zbriši</button>
        </div>
    );
}