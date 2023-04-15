import {Zaposlen} from "./Zaposlen";

export interface Oddelek{
    id: number;
    ime: string;
    zaposleni: Zaposlen[];
}