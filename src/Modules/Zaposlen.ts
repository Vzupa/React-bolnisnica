import {Oddelek} from "./Oddelek";
import {Odsotnost} from "./Odsotnost";

export interface Zaposlen {
    id: number;
    ime: string;
    priimek: string;
    letaDelovneDobe: number;
    delovnoMesto: string;
    email: string;
    slika: string;
    upokojen: boolean;
    odsotnost: Odsotnost | null;
}