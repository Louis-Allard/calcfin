import React from 'react';

const Tab = ({ valeurInitiale, taux, periode }) => {
  // Calcul des intérêts et des valeurs pour chaque période
  const calculerValeurs = () => {
    const valeurs = [];
    let valeurActuelle = parseFloat(valeurInitiale);
    let sommeInterets = 0;

    for (let i = 0; i < periode; i++) {
      const interet = valeurActuelle * (parseFloat(taux) / 100);
      sommeInterets += interet;
      valeurActuelle += interet;
      valeurs.push({
        periode: i + 1,
        interet: interet.toFixed(2),
        valeur: valeurActuelle.toFixed(2),
      });
    }

    return { valeurs, sommeInterets: sommeInterets.toFixed(2) };
  };

  const { valeurs, sommeInterets } = calculerValeurs();

  return (
    <div>
      Résultats du Calcul
      <table>
        <thead>
          <tr>
            <th>Période</th>
            {valeurs.map((_, index) => (
              <th key={index}>Année {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intérêts</td>
            {valeurs.map((valeur, index) => (
              <td key={index}>{valeur.interet}</td>
            ))}
          </tr>
          <tr>
            <td>Valeur</td>
            {valeurs.map((valeur, index) => (
              <td key={index}>{valeur.valeur}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div>
        Somme des Intérêts Gagnés: {sommeInterets}
      </div>
    </div>
  );
};

export default Tab;
