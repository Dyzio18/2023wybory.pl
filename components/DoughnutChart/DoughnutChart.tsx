"use client";

import { PARTIES } from '@/data/parties';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


export const data = {
  labels: [
    PARTIES.pis.name,
    PARTIES.po.name,
    PARTIES.kwin.name,
    PARTIES.nl.name,
    PARTIES.tr.name,
    PARTIES.other.name,
    'Nie wiem/trudno powiedzieć/odmowa odpowiedzi',
  ],
  datasets: [
    {
      label: '% poparcia wyborczego',
      data: [37, 31, 9, 8, 6, 2, 7],
      backgroundColor: [
        PARTIES.pis.color,
        PARTIES.po.color,
        PARTIES.kwin.color,
        PARTIES.nl.color,
        PARTIES.tr.color,
        PARTIES.other.color,
        PARTIES.none.color,
      ],
      borderColor: [
        PARTIES.pis.hoverColor,
        PARTIES.po.hoverColor,
        PARTIES.kwin.hoverColor,
        PARTIES.nl.hoverColor,
        PARTIES.tr.hoverColor,
        PARTIES.other.hoverColor,
        'rgba(255, 0, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="w-100">
      <div className="flex justify-center">
        <Doughnut data={data} width={'700'} />
      </div>
    </div>
  );
};
