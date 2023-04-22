import {useZaposleni} from "../../App";
import {Zaposlen} from "../../Modules/Zaposlen";

export const Info = () => {
    const {zaposleni, setZaposleni} = useZaposleni();
    let [stZaposlenih, stUpokojenih] = [0, 0];

    zaposleni.forEach((zaposlen: Zaposlen) => {
        if (zaposlen.upokojen) {
            stUpokojenih++;
        } else {
            stZaposlenih++;
        }
    });

    return (
        <div className="container">
            <h1>Informacije o bolnišnici</h1>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <strong>Ime bolnišnice: </strong>
                        <span>UKC Ljubljana</span>
                    </p>
                    <p>
                        <strong>Naslov: </strong>
                        <span>Tržaška cesta 25, 1000 Ljubljana</span>
                    </p>
                    <p>
                        <strong>Telefonska številka: </strong>
                        <span>01 530 11 11</span>
                    </p>
                    <p>
                        <strong>E-pošta: </strong>
                        <span>info@ukc-lj.si</span>
                    </p>
                </div>
                <div className="col-md-6">
                    <p>
                        <strong>Zaposleni: </strong>
                        <span>{stZaposlenih}</span>
                    </p>
                    <p>
                        <strong>Upokojeni: </strong>
                        <span>{stUpokojenih}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}