import React, { useState } from 'react';
import Tab from './Tab';

const Calc = () => {
  const [formData, setFormData] = useState({
    valeurInitiale: '',
    taux: '',
    periode: '',
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Calcul d'intérêts composés</legend>
          <div>
            <label>
              Valeur Initiale:
            </label>
            <input
              type="number"
              name="valeurInitiale"
              value={formData.valeurInitiale}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Taux:
            </label>
            <input
              type="number"
              name="taux"
              value={formData.taux}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Période (année):
            </label>
            <input
              type="number"
              name="periode"
              value={formData.periode}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Soumettre</button>
        </fieldset>
      </form>

      {results && (
        <Tab
          valeurInitiale={results.valeurInitiale}
          taux={results.taux}
          periode={results.periode}
        />
      )}
    </div>
  );
};

export default Calc;
