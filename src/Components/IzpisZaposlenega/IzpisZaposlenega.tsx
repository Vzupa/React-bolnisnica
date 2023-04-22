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
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <p className="mb-0">
                    <b>{props.zaposlen.ime} {props.zaposlen.priimek}</b>
                </p>
                <p className="mb-0">
                    Oddelek: {njegovOddelek},
                    Delovno mesto: {props.zaposlen.delovnoMesto},
                    Delovna doba: {props.zaposlen.letaDelovneDobe},
                    Email: {props.zaposlen.email}
                </p>
            </div>
            <div>
                <Link to={`/urediZaposlenega/${props.zaposlen.id}`}>
                    <button className="btn btn-primary me-2">Uredi</button>
                </Link>
                <Link to={`/pregledZaposlenega/${props.zaposlen.id}`}>
                    <button className="btn btn-info me-2">Info</button>
                </Link>
                <button onClick={() => props.handleDelete(props.zaposlen)} className="btn btn-danger">
                    Zbriši
                </button>
            </div>
        </div>
    );
}