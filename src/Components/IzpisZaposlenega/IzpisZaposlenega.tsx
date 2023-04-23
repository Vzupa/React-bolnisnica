import {Zaposlen} from "../../Modules/Zaposlen";
import {originalOddelki} from "../../Modules/main";

interface Props {
    zaposlen: Zaposlen;
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
                <p className="mb-0">
                    <b>
                        {props.zaposlen.ime} {props.zaposlen.priimek}
                    </b>
                </p>
                <p className="mb-0">
                    Oddelek: {njegovOddelek},
                    Delovno mesto: {props.zaposlen.delovnoMesto},
                    Delovna doba: {props.zaposlen.letaDelovneDobe},
                    Email: {props.zaposlen.email}
                </p>
            </div>
    );
}