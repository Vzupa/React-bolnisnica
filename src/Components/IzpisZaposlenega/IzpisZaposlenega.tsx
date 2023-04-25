import {Zaposlen} from "../../Modules/Zaposlen";
import {Oddelek} from "../../Modules/Oddelek";
import {useOddelki} from "../../App";

interface Props {
    zaposlen: Zaposlen;
}

export const IzpisZaposlenega = (props: Props): JSX.Element => {
    const { oddelki } = useOddelki();
    let njegovOddelek: string = "";

    oddelki.forEach((oddelek: Oddelek) => {
        oddelek.zaposleni.forEach((zaposlen: Zaposlen) => {
            if (zaposlen === props.zaposlen)
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