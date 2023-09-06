"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export const data = {
  labels: [
    'Komitet Wyborczy Prawo i Sprawiedliwość',
    'Komitet Wyborczy Koalicja Obywatelska',
    'Komitet Wyborczy Konfederacja Wolność i Niepodległość',
    'Komitet Wyborczy Trzecia Droga - Polska 2050 Szymona Hołowni - Polskie Stronnictwo Ludowe',
    'Komitet Wyborczy Nowa Lewica',
    'Inny Komitet Wyborczy',
    'Nie wiem/trudno powiedzieć/odmowa odpowiedzi',
  ],
  datasets: [
    {
      label: '% poparcia wyborczego',
      data: [37, 31, 9, 8, 6, 2, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 0, 0, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 0, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return <Doughnut data={data} />;
};
