import {Zaposlen} from "./Zaposlen";
import {Oddelek} from "./Oddelek";

const kardiologija: Oddelek = {
    id: 1,
    ime: "Kardiologija",
    zaposleni: []
}

const ortopedija: Oddelek = {
    id: 2,
    ime: "Ortopedija",
    zaposleni: []
}

const nevrologija: Oddelek = {
    id: 3,
    ime: "Nevrologija",
    zaposleni: []
}

const AnaNovak: Zaposlen = {
    id: 1,
    ime: "Ana",
    priimek: "Novak",
    letaDelovneDobe: 5,
    delovnoMesto: "kardiolog",
    email: "ana.novak@example.com",
    slika: "https://example.com/images/ana-novak.jpg",
    upokojen: false,
    odsotnosti: []
}

const MarkoKovac: Zaposlen = {
    id: 2,
    ime: "Marko",
    priimek: "Kovač",
    letaDelovneDobe: 10,
    delovnoMesto: "kartiolog",
    email: "marko.kovac@example.com",
    slika: "https://example.com/images/marko-kovac.jpg",
    upokojen: false,
    odsotnosti: []
}

const MajaPetrovic: Zaposlen = {
    id: 3,
    ime: "Maja",
    priimek: "Petrovič",
    letaDelovneDobe: 3,
    delovnoMesto: "medicinska sestra",
    email: "maja.petrovic@example.com",
    slika: "https://example.com/images/maja-petrovic.jpg",
    upokojen: false,
    odsotnosti: []
}

const PeterHorvat: Zaposlen = {
    id: 4,
    ime: "Peter",
    priimek: "Horvat",
    letaDelovneDobe: 8,
    delovnoMesto: "ortoped",
    email: "peter.horvat@example.com",
    slika: "https://example.com/images/peter-horvat.jpg",
    upokojen: false,
    odsotnosti: []
}

const SaraZagar: Zaposlen = {
    id: 5,
    ime: "Sara",
    priimek: "Žagar",
    letaDelovneDobe: 2,
    delovnoMesto: "medicinska sestra",
    email: "sara.zagar@example.com",
    slika: "https://example.com/images/sara-zagar.jpg",
    upokojen: false,
    odsotnosti: []
}

const LukaNovak: Zaposlen = {
    id: 6,
    ime: "Luka",
    priimek: "Novak",
    letaDelovneDobe: 5,
    delovnoMesto: "ortoped",
    email: "luka.novak@example.com",
    slika: "https://example.com/images/luka-novak.jpg",
    upokojen: false,
    odsotnosti: []
}

const KatarinaKovac: Zaposlen = {
    id: 7,
    ime: "Katarina",
    priimek: "Kovac",
    letaDelovneDobe: 7,
    delovnoMesto: "nevrolog",
    email: "katarina.kovacs@example.com",
    slika: "https://example.com/images/katarina-kovacs.jpg",
    upokojen: false,
    odsotnosti: []
}

const MatijaHribar: Zaposlen = {
    id: 8,
    ime: "Matija",
    priimek: "Hribar",
    letaDelovneDobe: 4,
    delovnoMesto: "nevrolog",
    email: "matija.hribar@example.com",
    slika: "https://example.com/images/matija-hribar.jpg",
    upokojen: false,
    odsotnosti: []
}

const GoranKovac: Zaposlen = {
    id: 9,
    ime: "Goran",
    priimek: "Kovač",
    letaDelovneDobe: 9,
    delovnoMesto: "medicinska sestra",
    email: "goran.kovac@example.com",
    slika: "https://example.com/images/goran-kovac.jpg",
    upokojen: false,
    odsotnosti: []
}

const MajaBabic: Zaposlen = {
    id: 10,
    ime: "Maja",
    priimek: "Babič",
    letaDelovneDobe: 3,
    delovnoMesto: "medicinska sestra",
    email: "maja.babic@example.com",
    slika: "https://example.com/images/maja-babic.jpg",
    upokojen: false,
    odsotnosti: []
}

export const originalZaposleni: Zaposlen[] = [AnaNovak, MarkoKovac, MajaPetrovic, PeterHorvat, SaraZagar, LukaNovak, KatarinaKovac, MatijaHribar, GoranKovac, MajaBabic];

kardiologija.zaposleni.push(AnaNovak, MarkoKovac, MajaPetrovic);
ortopedija.zaposleni.push(PeterHorvat, SaraZagar, LukaNovak);
nevrologija.zaposleni.push(KatarinaKovac, MatijaHribar, GoranKovac, MajaBabic);

export const originalOddelki: Oddelek[] = [kardiologija, ortopedija, nevrologija];