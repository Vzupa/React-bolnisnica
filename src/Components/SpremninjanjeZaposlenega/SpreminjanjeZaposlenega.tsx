import {Zaposlen} from "../../Modules/Zaposlen";
import {useZaposleni} from "../../App";
import {useRef, useState} from "react";
import {originalOddelki} from "../../Modules/main";
import {Oddelek} from "../../Modules/Oddelek";

const initalStateZaposlen: Zaposlen = {
    id: 0,
    ime: '',
    priimek: '',
    letaDelovneDobe: 0,
    delovnoMesto: '',
    email: '',
    slika: '',
    upokojen: false,
    odsotnosti: []
}

interface Props {
    zaposlen?: Zaposlen;
}

export const SpreminjanjeZaposlenega = (props: Props) => {
    const { zaposlen = initalStateZaposlen } = props;  // Da initalState ce je zaposlen null
    const {zaposleni, setZaposleni} = useZaposleni();
    const [ novZaposlen, setNovZaposlen] = useState<Zaposlen>(zaposlen);

    const oddelekSelectRef = useRef<HTMLSelectElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        setNovZaposlen((prevState: Zaposlen) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        novZaposlen.id = zaposleni.length + 1;
        zaposleni.push(novZaposlen);
        setZaposleni(zaposleni);

        const oddelek = originalOddelki.find((oddelek: Oddelek) => oddelek.id === parseInt(oddelekSelectRef.current?.value || '0'));


        if (oddelek) {
            oddelek.zaposleni.push(novZaposlen);
            console.log(oddelek.zaposleni);
        }

        setNovZaposlen(initalStateZaposlen);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ime">Ime</label>
                <input type="text" name="ime" id="ime" value={novZaposlen.ime} onChange={handleChange} />

                <label htmlFor="priimek">Priimek</label>
                <input type="text" name="priimek" id="priimek" value={novZaposlen.priimek} onChange={handleChange} />

                <label htmlFor="letaDelovneDobe">Delovna doba</label>
                <input type="number" name="letaDelovneDobe" id="letaDelovneDobe" value={novZaposlen.letaDelovneDobe} onChange={handleChange} />

                <label htmlFor="delovnoMesto">Delovno mesto</label>
                <input type="text" name="delovnoMesto" id="delovnoMesto" value={novZaposlen.delovnoMesto} onChange={handleChange} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={novZaposlen.email} onChange={handleChange} />

                <label htmlFor="slika">Slika</label>
                <input type="text" name="slika" id="slika" value={novZaposlen.slika} onChange={handleChange} />

                <label htmlFor="upokojen">Upokojen</label>
                <input type="checkbox" name="upokojen" id="upokojen" checked={novZaposlen.upokojen} onChange={handleChange} />

                <select id="oddelek-select" ref={oddelekSelectRef}>
                    <option value="">-- Izberi oddelek --</option>
                    {originalOddelki.map((oddelek) => (
                        <option key={oddelek.id} value={oddelek.id}>
                            {oddelek.ime}
                        </option>
                    ))}
                </select>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}