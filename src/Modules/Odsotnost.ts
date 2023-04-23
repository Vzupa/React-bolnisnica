import {Zaposlen} from "./Zaposlen";


export interface Odsotnost {
    id: number;
    zaposlen: Zaposlen;
    konec: Date;
    nadomestniZaposlen: Zaposlen;
}