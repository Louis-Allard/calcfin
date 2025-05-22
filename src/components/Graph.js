import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Graph = ({ valeurs }) => {
  // Préparation des données pour le graphique
  const periods = valeurs.map(valeur => `Année ${valeur.periode}`);
  const interests = valeurs.map(valeur => valeur.interet);
  const values = valeurs.map(valeur => parseFloat(valeur.valeur) - parseFloat(valeur.interet));

  const data = {
    labels: periods,
    datasets: [
      {
        label: 'Valeur Initiale',
        data: values,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Intérêts',
        data: interests,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
        text: 'Évolution des Intérêts et des Valeurs',
      },
    },
    scales: {
      x: {
        stacked: true, // Empiler les barres
      },
      y: {
        stacked: true, // Empiler les barres
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Graph;
