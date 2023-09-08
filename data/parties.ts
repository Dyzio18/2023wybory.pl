export interface Party {
  name: string;
  abbr: string;
  color: string;
  hoverColor: string;
}

export const PARTIES = {
  'pis': {
    name: "Prawo i Sprawiedliwość",
    abbr: "PiS",
    color: "#073A76",
    hoverColor: "#D14040",
  },
  'po': {
    name: "Platforma Obywatelska",
    abbr: "PO",
    color: "#FCA241",
    hoverColor: "#214F9E",
  },
  'kwin': {
    name: "Konfederacja Wolność i Niepodległość",
    abbr: "KWiN",
    color: "#102440",
    hoverColor: "#EAB040",
  },
  'nl': {
    name: "Nowa Lewica",
    abbr: "NL",
    color: "#AC145A",
    hoverColor: "#EA4040",
  },
  'tr':{
    name: "Trzecia Droga - Polska 2050 Szymona Hołowni - Polskie Stronnictwo Ludowe",
    abbr: "TR",
    color: "#96D544",
    hoverColor: "#EAB040",
  },
  'other':  {
      name: "Bezpartyjni / Pozostali",
      abbr: "BS",
      color: "#DA251D",
      hoverColor: "#EAB040",
    },
  'none':  {
      name: "Nie zdecydowani",
      abbr: "NN",
      color: "#D3D3D3",
      hoverColor: "#D3D3D3",
    },
};