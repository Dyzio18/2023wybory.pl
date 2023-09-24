import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

const postsDirectory = path.join(process.cwd(), 'data');
const parseConfig = {
  delimiter: ';',
  bom: true,
  quote: '"',
  relax_quotes: true,
  // escape: ' ',
  from_line: 2
};


function removeBOM(data: string) {
  if (data.charCodeAt(0) === 0xfeff) {
    return data.slice(1);
  }
  return data;
}

export function getCsvDistrictIds(name: string) {
  const fullPath = path.join(postsDirectory, name);
  const fileContents = removeBOM(fs.readFileSync(fullPath, 'utf8'));
  const records: Number[] = [];
  const parser = parse(parseConfig);

  fs.createReadStream(fullPath)
    .pipe(parser)
    .on("data", function (row) {
      records.push(row[0]);
    })
    .on("end", function () {
      console.log("finished");
    })
    .on("error", function (error) {
      console.log(error.message);
    });



  return records.map((id) => {
    return {
      params: {
        id: id,
      },
    };
  });
}

interface SejmCsvHeaders {
  districtNumber: string;                // "Numer okręgu"
  mandateCount: string;                  // "Liczba mandatów"
  listCount: string;                     // "Liczba list"
  candidateCount: string;                // "Liczba kandydatów"
  residents: string;                     // "Mieszkańcy"
  voters: string;                        // "Wyborcy"
  electionCommitteeLocation: string;     // "Siedziba OKW"
  borderDescription: string;             // "Opis granic"
}

interface SejmCsvRow {
  id: number;
  region?: SejmCsvHeaders;
}

export function getSejmCsvDataByDistrict(id: number) {
  const fullPath = path.join(postsDirectory, 'sejm.csv');
  const fileContents = removeBOM(fs.readFileSync(fullPath, 'utf8'));

  const parser = parse(parseConfig);
  const data: SejmCsvRow = {
    id: id,
  };

  fs.createReadStream(fullPath)
    .pipe(parser)
    .on("data", function (row) {
      if (row[0] == id) {
        data.region = {
          districtNumber: row[0],
          mandateCount: row[1],
          listCount: row[2],
          candidateCount: row[3],
          residents: row[4],
          voters: row[5],
          electionCommitteeLocation: row[6],
          borderDescription: row[7],
        };
      };
    })
    .on("end", function () {
      console.log("finished");
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .write(fileContents);

  return data;
}




export interface CandidateCsvHeaders {
  districtNumber: string;              // "Nr okręgu"
  listNumber: string;                  // "Nr listy"
  positionOnList: string;              // "Pozycja na liście"
  fullName: string;                    // "Nazwisko i imiona"
  committeeName: string;               // "Nazwa komitetu"
  gender: string;                      // "Płeć"
  occupation: string;                  // "Zawód"
  residence: string;                   // "Miejsce zamieszkania"
  terytMz: string;                     // "TERYT m. z."
  municipalityMz: string;              // "Gmina m. z."
  partyAffiliation: string;            // "Przynależność do partii"
  support: string;                     // "Poparcie"
  voteCount: string;                   // "Liczba głosów"
  percentageOfVotesOnList: string;     // "Procent głosów oddanych na listę"
  percentageOfVotesInDistrict: string; // "Procent głosów oddanych w okręgu"
  mandateAwarded: string;              // "Czy przyznano mandat"
}

interface SejmCandidateCsvRow {
  id: number;
  candidates?: CandidateCsvHeaders[];
}

export function getSejmCandidatesCsvDataByDistrict(id: number) {
  const fullPath = path.join(postsDirectory, 'kandydaci_sejm.csv');
  const fileContents = removeBOM(fs.readFileSync(fullPath, 'utf8'));

  const parser = parse(parseConfig);
  const data: SejmCandidateCsvRow = {
    id: id,
    candidates: [],
  };

  fs.createReadStream(fullPath)
    .pipe(parser)
    .on("data", function (row) {
      if (row[0] == id) {
        data.candidates?.push({
          districtNumber: row[0],
          listNumber: row[1],
          positionOnList: row[2],
          fullName: row[3],
          committeeName: row[4],
          gender: row[5],
          occupation: row[6],
          residence: row[7],
          terytMz: row[8],
          municipalityMz: row[9],
          partyAffiliation: row[10],
          support: row[11],
          voteCount: row[12],
          percentageOfVotesOnList: row[13],
          percentageOfVotesInDistrict: row[14],
          mandateAwarded: row[15],
        });
      };
    })
    .on("end", function () {
      console.log("finished");
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .write(fileContents);

  parser.end();

  console.log(data);

  return data;
}