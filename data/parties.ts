export interface Party {
  name: string;
  abbr: string;
  color?: string;
  hoverColor?: string;
  seats?: number;
  votes: number;
}

export const PARTIES = {
  'pis': {
    name: "Prawo i Sprawiedliwość",
    abbr: "PiS",
    color: "#073A76",
    hoverColor: "#D14040",
    seats: 235,
    votes: 33
  },
  'ko': {
    name: "Koalicja Obywatelska",
    abbr: "KO",
    color: "#FCA241",
    hoverColor: "#214F9E",
    seats: 134,
    votes: 23
  },
  'kwin': {
    name: "Konfederacja Wolność i Niepodległość",
    abbr: "KWiN",
    color: "#102440",
    hoverColor: "#EAB040",
    seats: 11,
    votes: 10
  },
  'nl': {
    name: "Nowa Lewica",
    abbr: "Lewica",
    color: "#AC145A",
    hoverColor: "#EA4040",
    seats: 2,
    votes: 11
  },
  'tr':{
    name: "Trzecia Droga - Polska 2050 Szymona Hołowni - Polskie Stronnictwo Ludowe",
    abbr: "Trzecia droga",
    color: "#96D544",
    hoverColor: "#EAB040",
    seats: 2,
    votes: 10
  },
  'other':  {
      name: "Bezpartyjni / Pozostali",
      abbr: "Bezpartyjni",
      color: "#DA251D",
      hoverColor: "#EAB040",
      votes: 3
    }
};