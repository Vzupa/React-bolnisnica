import {Zaposlen} from "./Zaposlen";

export interface Odsotnost {
    id: number;
    zaposlen: Zaposlen;
    trajanje: number;
    nadomestniZaposlen: Zaposlen;
}