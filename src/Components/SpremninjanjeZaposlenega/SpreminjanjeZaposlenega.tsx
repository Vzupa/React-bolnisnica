import {Zaposlen} from "../../Modules/Zaposlen";
import {useZaposleni} from "../../App";
import React, {useEffect, useState} from "react";
import {originalOddelki} from "../../Modules/main";
import {Oddelek} from "../../Modules/Oddelek";
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
}

export const SpreminjanjeZaposlenega = () => {
    const { id } = useParams<{ id?: string }>();
    const { zaposleni, setZaposleni } = useZaposleni();
    const [novZaposlen, setNovZaposlen] = useState<Zaposlen>(initalStateZaposlen);
    const [izbranOddelek, setIzbranOddelek] = useState<number>(0);

    const  findOddelekId = (): number | string => {
        for (const oddelek of originalOddelki) {
            if (oddelek.zaposleni.includes(novZaposlen)) {
                return oddelek.id;
            }
        }
        return "0";
    }

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
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="ime" className="form-label">Ime</label>
                        <input type="text" className="form-control" name="ime" id="ime" value={novZaposlen.ime} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="priimek" className="form-label">Priimek</label>
                        <input type="text" className="form-control" name="priimek" id="priimek" value={novZaposlen.priimek} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="letaDelovneDobe" className="form-label">Delovna doba</label>
                        <input type="number" className="form-control" name="letaDelovneDobe" id="letaDelovneDobe" value={novZaposlen.letaDelovneDobe} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="delovnoMesto" className="form-label">Delovno mesto</label>
                        <input type="text" className="form-control" name="delovnoMesto" id="delovnoMesto" value={novZaposlen.delovnoMesto} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" id="email" value={novZaposlen.email} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="slika" className="form-label">Slika</label>
                        <input type="text" className="form-control" name="slika" id="slika" value={novZaposlen.slika} onChange={handleChange} />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" name="upokojen" id="upokojen" checked={novZaposlen.upokojen} onChange={handleChange} />
                        <label htmlFor="upokojen" className="form-check-label">Upokojen</label>
                    </div>

                    <div className="mb-3">
                        <select id="oddelek-select" className="form-select" value={izbranOddelek} onChange={urediOddelek}>
                            <option value="">-- Izberi oddelek --</option>
                            {originalOddelki.map((oddelek) => (
                                <option key={oddelek.id} value={oddelek.id}>
                                    {oddelek.ime}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {id ? "Shrani" : "Dodaj"}
                    </button>
                </form>
            </div>

            <div className="col-md-6">
                <img src={novZaposlen.slika} className="img-fluid" alt="" style={{ maxHeight: '300px' }} />
            </div>
        </div>
    );
}