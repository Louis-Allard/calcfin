import React, { useState } from 'react';

function CalculInteretCompose() {
  const [valeurInitiale, setValeurInitiale] = useState(2500);
  const [tauxAugmentation, setTauxAugmentation] = useState(3);
  const [periode, setPeriode] = useState(10);
  const [valeurFinale, setValeurFinale] = useState(0);

  const calculerValeurFinale = () => {
    const r = tauxAugmentation / 100;
    const n = periode;
    const V_i = valeurInitiale;
    const V_f = V_i * Math.pow(1 + r, n);
    setValeurFinale(V_f);
  };

  return (
    <div>
      <h2>Calcul de l'intérêt composé</h2>
      <div>
        <label>
          Valeur initiale :
          </label>
          <input
            type="number"
            value={valeurInitiale}
            onChange={(e) => setValeurInitiale(parseFloat(e.target.value))}
          />
      </div>

      <div>
        <label>
          Taux d'augmentation (%) :
          </label>
          <input
            type="number"
            value={tauxAugmentation}
            onChange={(e) => setTauxAugmentation(parseFloat(e.target.value))}
          />
      </div>

      <div>
        <label>
          Période (années) :
          </label>
          <input
            type="number"
            value={periode}
            onChange={(e) => setPeriode(parseInt(e.target.value))}
          />
      </div>
      
      <button onClick={calculerValeurFinale}>Calculer</button>
      <div>
        <p>Valeur finale : {valeurFinale.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CalculInteretCompose;
