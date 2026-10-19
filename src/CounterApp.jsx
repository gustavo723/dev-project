import React, { useState } from 'react';

export default function CounterApp() {
  const [val, setVal] = useState(0);

  const incrementer = () => setVal(val + 1);
  const decrementer = () => setVal(val - 1);
  const reinitialiser = () => setVal(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', border: '1px solid #ddd', padding: '15px' }}>
      <h2>Valeur actuelle : {val}</h2>
      <button onClick={incrementer}>Ajouter 1</button>
      <button onClick={decrementer}>Soustraire 1</button>
      <button onClick={reinitialiser}>Réinitialiser</button>
    </div>
  );
}