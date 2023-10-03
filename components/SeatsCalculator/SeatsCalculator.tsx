"use client";

import { useState } from 'react';
import { PARTIES, Party } from '@/data/parties';

export const SeatsCalculator = () => {
  const [parties, setParties] = useState(() => {
    return Object.values(PARTIES)
      .filter(party => 'votes' in party && party?.votes > 0)
      .map((party, index) => {
        return {
          id: `party${index + 1}`,
          name: party.name,
          abbr: party.abbr,
          votes: party.votes,
        };
      });
  });

  const handleVotesChange = (id: string, votes: number) => {
    setParties((prevParties) =>
      prevParties.map((party) =>
        party.id === id ? { ...party, votes } : party
      )
    );
  };

  const calculateSeats = (parties: Party[], numberOfSeats: number): { partyName: string, seatsNumber: number; }[] => {
    const partySeats: number[] = Array(parties.length).fill(0);
    const partiesWithVotes = parties.filter(party => 'votes' in party && party.votes > 0);

    const partiesWithQuotients = partiesWithVotes.map((party, index) => ({
      index,
      name: party.abbr,
      quotient: party.votes / (partySeats[index] + 1),
    }));

    for (let i = 0; i < numberOfSeats; i++) {
      partiesWithQuotients.sort((a, b) => b.quotient - a.quotient);
      const winningParty = partiesWithQuotients[0].index;
      partySeats[winningParty]++;
      partiesWithQuotients[0].quotient = partiesWithVotes[winningParty].votes / (partySeats[winningParty] + 1);
    }

    return partiesWithQuotients.map((party) => ({ partyName: party.name, seatsNumber: partySeats[party.index] }));
  };

  const partyResults = calculateSeats(parties, 460);

  return (
    <div className="flex flex-col items-center md:justify-center md:items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2 p-6 text-center">Wynik procentowy (%)</h1>
        <div className="flex flex-wrap justify-center">
          {parties.map((party) => (
            <div key={party.id} className="flex flex-col items-center mx-2 my-4">
              <label htmlFor={party.id} className="text-lg font-medium mb-2">{party.abbr}</label>
              <input
                type="number"
                id={party.id}
                value={party.votes}
                max={100}
                min={0}
                onChange={(e) =>
                  handleVotesChange(party.id, parseInt(e.target.value))
                }
                className="w-20 h-10 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 p-6 text-center">Ilość miejsc w parlamencie:</h2>
        <div className="flex flex-wrap justify-center">
          {partyResults.sort((a, b) => b.seatsNumber - a.seatsNumber).map((party) => (
            <div key={party.partyName} className="flex flex-col items-center mx-2 my-4">
              {party.partyName}: {party.seatsNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

