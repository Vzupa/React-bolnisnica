import {Link} from "react-router-dom";
import {Zaposlen} from "../../Modules/Zaposlen";

interface props {
    zaposlen: Zaposlen;
    handleDelete: (zaposlen: Zaposlen) => void;
}

export const GumbiZaTabelo = (props: props): JSX.Element => {
    const zaposlen: Zaposlen = props.zaposlen;
    const handleDelete: (zaposlen: Zaposlen) => void = props.handleDelete;

    return (
        <div>
            <Link to={`/urediZaposlenega/${zaposlen.id}`}>
                <button className="btn btn-primary me-2">Uredi</button>
            </Link>
            <Link to={`/pregledZaposlenega/${zaposlen.id}`}>
                <button className="btn btn-info me-2">Info</button>
            </Link>
            {zaposlen.upokojen ? null : (
                <Link to={`/izbiraOdsotnosti/${zaposlen.id}`}>
                    <button className="btn btn-success me-2">Odsotnost</button>
                </Link>
            )}
            <button onClick={() => handleDelete(zaposlen)} className="btn btn-danger">
                Zbriši
            </button>
        </div>
    );
}