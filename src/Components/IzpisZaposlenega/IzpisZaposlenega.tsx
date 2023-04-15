import {Zaposlen} from "../../Modules/Zaposlen";
import {oddelki} from "../../Modules/main";

interface Props {
    zaposlen: Zaposlen;
}

export const IzpisZaposlenega = (props: Props) => {
        let njegovOddelek: string = "";

        oddelki.forEach((oddelek) => {
            oddelek.zaposleni.forEach((zaposlen) => {
                if (zaposlen == props.zaposlen)
                    njegovOddelek = oddelek.ime;
            });
        });


        return(
            <div>
                    <pre>
                        Oddelek: {njegovOddelek},
                        <b> {props.zaposlen.ime} {props.zaposlen.priimek}</b>,
                        Delovna doba: {props.zaposlen.letaDelovneDobe},
                        Delovno mesto: {props.zaposlen.delovnoMesto},
                        Email: {props.zaposlen.email}
                    </pre>
            </div>
        );
}