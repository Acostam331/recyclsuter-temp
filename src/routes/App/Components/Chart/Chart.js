/* eslint-disable */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  const data = {
    labels: ['February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Posts by month',
        data: [15, 25, 3, 4, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Finished projects by month',
        data: [10, 14, 2, 8, 6],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default Chart;
