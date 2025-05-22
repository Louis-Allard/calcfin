import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Graph = ({ valeurs, valeurInitiale }) => {
  // Calcul de la somme des intérêts et de la somme des valeurs sans les intérêts
  const sommeInterets = valeurs.reduce((acc, valeur) => acc + parseFloat(valeur.interet), 0);
  const sommeValeursSansInterets = parseFloat(valeurInitiale);

  const data = {
    labels: ['Somme des Intérêts', 'Somme des Valeurs sans Intérêts'],
    datasets: [
      {
        data: [sommeInterets, sommeValeursSansInterets],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Répartition des Intérêts et des Valeurs',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default Graph;
