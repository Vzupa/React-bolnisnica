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
    slika: "https://www.benburke.org/assets/images/notexist2.jpg",
    upokojen: false,
    odsotnost: null
}

const MarkoKovac: Zaposlen = {
    id: 2,
    ime: "Marko",
    priimek: "Kovač",
    letaDelovneDobe: 10,
    delovnoMesto: "kartiolog",
    email: "marko.kovac@example.com",
    slika: "data:image/jpeg;base64,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",
    upokojen: false,
    odsotnost: null
}

const MajaPetrovic: Zaposlen = {
    id: 3,
    ime: "Maja",
    priimek: "Petrovič",
    letaDelovneDobe: 3,
    delovnoMesto: "medicinska sestra",
    email: "maja.petrovic@example.com",
    slika: "https://i.seadn.io/gae/PTIvyNEFSwpiBA-Kv7ZTRNGzBOOxMzIW59q5vX02Ml911J4_Y5UwfooDhE6oQrULV0M5YODgqWkr6W4o19bxLY2qXCJuDhJ8Y4uObg?auto=format&w=1000",
    upokojen: false,
    odsotnost: null
}

const PeterHorvat: Zaposlen = {
    id: 4,
    ime: "Peter",
    priimek: "Horvat",
    letaDelovneDobe: 8,
    delovnoMesto: "ortoped",
    email: "peter.horvat@example.com",
    slika: "https://i.seadn.io/gae/7KTZ107oTbcCCWSs8M76vYd1b7gwth5AdHn6KR1HlfTxF0jgZugiVx6CdmYNw4OBtFJDNgQEizIkHzD5TUVmux0ppHGA-Ei5eG8k8Q?auto=format&w=1000",
    upokojen: false,
    odsotnost: null
}

const SaraZagar: Zaposlen = {
    id: 5,
    ime: "Sara",
    priimek: "Žagar",
    letaDelovneDobe: 2,
    delovnoMesto: "medicinska sestra",
    email: "sara.zagar@example.com",
    slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pJoj40zpj1AxIN7rPHlDLQ2Pyy845V7jsw&usqp=CAU",
    upokojen: false,
    odsotnost: null
}

const LukaNovak: Zaposlen = {
    id: 6,
    ime: "Luka",
    priimek: "Novak",
    letaDelovneDobe: 5,
    delovnoMesto: "ortoped",
    email: "luka.novak@example.com",
    slika: "https://mybroadband.co.za/news/wp-content/uploads/2019/02/person-doesnt-exist-1.png",
    upokojen: false,
    odsotnost: null
}

const KatarinaKovac: Zaposlen = {
    id: 7,
    ime: "Katarina",
    priimek: "Kovac",
    letaDelovneDobe: 7,
    delovnoMesto: "nevrolog",
    email: "katarina.kovacs@example.com",
    slika: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1678017705/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/Screenshot_2023-03-05_at_13.01.13_s6mu0w.png",
    upokojen: false,
    odsotnost: null
}

const MatijaHribar: Zaposlen = {
    id: 8,
    ime: "Matija",
    priimek: "Hribar",
    letaDelovneDobe: 4,
    delovnoMesto: "nevrolog",
    email: "matija.hribar@example.com",
    slika: "https://i0.wp.com/www.PartisanIssues.com/wp-content/uploads/2019/02/AI-Generated-Face-2.jpg?fit=750%2C750&ssl=1",
    upokojen: false,
    odsotnost: null
}

const GoranKovac: Zaposlen = {
    id: 9,
    ime: "Goran",
    priimek: "Kovač",
    letaDelovneDobe: 9,
    delovnoMesto: "medicinska sestra",
    email: "goran.kovac@example.com",
    slika: "https://i.imgur.com/KSrujp9.jpg",
    upokojen: false,
    odsotnost: null
}

const MajaBabic: Zaposlen = {
    id: 10,
    ime: "Maja",
    priimek: "Babič",
    letaDelovneDobe: 3,
    delovnoMesto: "medicinska sestra",
    email: "maja.babic@example.com",
    slika: "https://imgix.bustle.com/inverse/1c/a7/db/94/ca5f/4d3d/a785/2d44a8f0d879/the-generative-adversarial-network-behind-this-person-does-not-exist-has-already-inspired-copycats.png?w=374&h=374&fit=crop&crop=faces&auto=format%2Ccompress",
    upokojen: false,
    odsotnost: null
}

export const originalZaposleni: Zaposlen[] = [AnaNovak, MarkoKovac, MajaPetrovic, PeterHorvat, SaraZagar, LukaNovak, KatarinaKovac, MatijaHribar, GoranKovac, MajaBabic];

kardiologija.zaposleni.push(AnaNovak, MarkoKovac, MajaPetrovic);
ortopedija.zaposleni.push(PeterHorvat, SaraZagar, LukaNovak);
nevrologija.zaposleni.push(KatarinaKovac, MatijaHribar, GoranKovac, MajaBabic);

export const originalOddelki: Oddelek[] = [kardiologija, ortopedija, nevrologija];