"use client";

import { PARTIES } from '@/data/parties';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Poparcie wyborcze',
    },
  },
};

const labels = ['16 maja', '21 maja', '27 maja', '4 czerwca', '24 czerwca', '11 lipca', '14 lipca', '21 lipca', '29 lipca', '26 sierpnia', '9 września', '13 września'];
const poolData = {
  pis: [32, 34, 32, 34, 32, 35, 33, 33, 33, 33, 33, 33],
  po: [25, 24, 25, 29, 30, 27, 28, 27, 26, 27, 26, 26],
  kwin: [10, 11, 11, 13, 12, 15, 15, 13, 12, 12, 9, 10],
  nl: [9, 9, 7, 8, 9, 9, 8, 9, 10, 10, 10, 11],
  tr: [14, 14, 13, 9, 10, 10, 11, 10, 10, 10, 10, 10],
};

const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: PARTIES.pis.name,
      data: poolData.pis,
      borderColor: PARTIES.pis.color,
    },
    {
      fill: false,
      label: PARTIES.ko.name,
      data: poolData.po,
      borderColor: PARTIES.ko.color,
    },
    {
      fill: false,
      label: PARTIES.kwin.name,
      data: poolData.kwin,
      borderColor: PARTIES.kwin.color,
    },
    {
      fill: false,
      label: PARTIES.nl.name,
      data: poolData.nl,
      borderColor: PARTIES.nl.color,
    },
    {
      fill: false,
      label: PARTIES.tr.name,
      data: poolData.tr,
      borderColor: PARTIES.tr.color,
    }
  ],
};

export const ElectionPools = () => {

  return (
    <div className="pt-10 mb-10">
      <div className="">
        <h2 className="text-3xl text-center font-bold sm:text-4xl mt-28">
          Poparcie wyborcze
        </h2>
        <p className='text-sm text-center pb-5'>* Na podstawie badań opinii społecznej przeprowadze przez <a href='https://ibris.pl/' target='_blank'>
          Fundacje IBRiS
        </a>
        </p>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};


