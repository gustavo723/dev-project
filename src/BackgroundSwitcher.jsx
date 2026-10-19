import React, { useState } from 'react';

export default function BackgroundSwitcher() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor, padding: '30px', textAlign: 'center', margin: '20px', borderRadius: '8px' }}>
      <p>Couleur de fond sélectionnée : {bgColor}</p>
      <button onClick={() => setBgColor('red')}>Rouge</button>
      <button onClick={() => setBgColor('green')}>Vert</button>
      <button onClick={() => setBgColor('blue')}>Bleu</button>
    </div>
  );
}