import {Zaposlen} from "../../Modules/Zaposlen";
import {useZaposleni} from "../../App";
import React, {useEffect, useState} from "react";
import {originalOddelki} from "../../Modules/main";
import {Oddelek} from "../../Modules/Oddelek";
import {OddelekOption} from "../OddelekOption";
import {useParams} from "react-router-dom";


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

export const SpreminjanjeZaposlenega = () => {
    const { id } = useParams<{ id?: string }>();
    const { zaposleni, setZaposleni } = useZaposleni();
    const [novZaposlen, setNovZaposlen] = useState<Zaposlen>(initalStateZaposlen);
    const [izbranOddelek, setIzbranOddelek] = useState<number>(0);


    useEffect(() => {
        if (id) {
            const zaposlenToEdit = zaposleni.find((zaposlen: Zaposlen) => zaposlen.id === parseInt(id));
            if (zaposlenToEdit) {
                setNovZaposlen(zaposlenToEdit);
            }
        }
        setIzbranOddelek(findOddelekId() as number);
    }, [id, zaposleni]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        setNovZaposlen((prevState: Zaposlen) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (id) {
            setZaposleni((prevZaposleni: Zaposlen[]) =>
                prevZaposleni.map((zaposlen: Zaposlen) => (zaposlen.id === novZaposlen.id ? novZaposlen : zaposlen))
            );
        }
        else {
            novZaposlen.id = zaposleni.length + 1;
            setZaposleni((prevZaposleni: Zaposlen[]) => [...prevZaposleni, novZaposlen]);
        }

        if (!id){
            setNovZaposlen(initalStateZaposlen);
        }
    }

    const  findOddelekId = (): number | string => {
        for (const oddelek of originalOddelki) {
            if (oddelek.zaposleni.includes(novZaposlen)) {
                return oddelek.id;
            }
        }
        return "0";
    }

    const urediOddelek = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        event.preventDefault();
        const { value } = event.target;

        const starOddelek = originalOddelki.find((oddelek: Oddelek) => oddelek.id === findOddelekId());
        const novOddelek = originalOddelki.find((oddelek: Oddelek) => oddelek.id === parseInt(value || '0'));

        if (starOddelek) {
            starOddelek.zaposleni = starOddelek.zaposleni.filter((zaposlen: Zaposlen) => zaposlen.id !== novZaposlen.id);
        }
        if (novOddelek && !novOddelek.zaposleni.includes(novZaposlen)) {
            novOddelek.zaposleni.push(novZaposlen);
            setIzbranOddelek(novOddelek.id);
        }
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

                <select id="oddelek-select" value={izbranOddelek} onChange={urediOddelek}>
                    <OddelekOption />
                </select>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}