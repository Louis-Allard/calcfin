import Graph from './Graph';
import Graph2 from './Graph2';

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

    return { valeurs, sommeInterets: sommeInterets.toFixed(2), valeurFinale: valeurActuelle.toFixed(2) };
  };

  const { valeurs, sommeInterets, valeurFinale } = calculerValeurs();

  return (
    <div>
      <h2>Résultats du Calcul</h2>
      <table>
        <thead>
          <tr>
            <th>Période</th>
            <th>Intérêts</th>
            <th>Valeur</th>
          </tr>
        </thead>
        <tbody>
          {valeurs.map((valeur, index) => (
            <tr key={index}>
              <td>Année {valeur.periode}</td>
              <td>{valeur.interet}</td>
              <td>{valeur.valeur}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div>
        Somme des intérêts gagnés: {sommeInterets}
      </div>
      <div>
        Somme totale gagnée à la fin de la période: <span className="st">{valeurFinale}</span>
      </div>
              <Graph valeurs={valeurs} />
              <br />
                      <Graph2 valeurs={valeurs} valeurInitiale={valeurInitiale} />
    </div>
  );
};

export default Tab;
