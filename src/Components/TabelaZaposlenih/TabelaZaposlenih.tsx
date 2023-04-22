import {Zaposlen} from "../../Modules/Zaposlen";
import {IzpisZaposlenega} from "../IzpisZaposlenega";
import {useZaposleni} from "../../App";
import {Link} from "react-router-dom";


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
                        <div className="d-flex justify-content-between align-items-center">
                            <IzpisZaposlenega zaposlen={zaposlen} />
                            <div>
                                <Link to={`/urediZaposlenega/${zaposlen.id}`}>
                                    <button className="btn btn-primary me-2">Uredi</button>
                                </Link>
                                <Link to={`/pregledZaposlenega/${zaposlen.id}`}>
                                    <button className="btn btn-info me-2">Info</button>
                                </Link>
                                <Link to={`/izbiraOdsotnosti/${zaposlen.id}`}>
                                    <button className="btn btn-success me-2">Odsotnost</button>
                                </Link>
                                <button onClick={() => handleDelete(zaposlen)} className="btn btn-danger">
                                    Zbriši
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}