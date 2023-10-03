"use client";
import { Chart } from "react-google-charts";

import styles from './charts.module.css';

const poolData = {
  pis: [32, 34, 32, 34, 32, 35, 33, 33, 33, 33, 33, 33],
  po: [25, 24, 25, 29, 30, 27, 28, 27, 26, 27, 26, 26],
  kwin: [10, 11, 11, 13, 12, 15, 15, 13, 12, 12, 9, 10],
  nl: [9, 9, 7, 8, 9, 9, 8, 9, 10, 10, 10, 11],
  tr: [14, 14, 13, 9, 10, 10, 11, 10, 10, 10, 10, 10],
};

const data = [
  ['Party', 'Seats', { role: 'style' }, { type: 'string', role: 'tooltip', p: { html: true } }],
  ['PiS', 32, '#8884d8', '450 miejsc w parlamencie'],
  ['PO', 25, '#82ca9d', 'PO'],
  ['Konfederacja', 10, '#ffc658', 'Konfederacja'],
  ['Nowoczesna', 9, '#ff6384', 'Nowoczesna'],
  ['Lewica', 9, '#36a2eb', 'Lewica'],
  ['Trzeci', 14, '#ffce56', 'Trzeci'],
];

export const SeatsPieChart = () => {
  return (
    <div className={styles.chart}>
      <div className={styles.container}>
        <Chart
          chartType="PieChart"
          data={data}
          options={{ title: "Miejsca w parlamencie", pieHole: 0.4, is3D: true }}
          width={"100%"}
          height={"600px"}
        />
      </div>
    </div>
  );
};
