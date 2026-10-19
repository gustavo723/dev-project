import React, { useState } from 'react';

export default function ToggleContent() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '15px' }}>
      <button onClick={handleToggle}>
        {show ? 'Masquer' : 'Afficher'}
      </button>
      {show && (
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ceci est le paragraphe d'exemple à afficher ou masquer.
        </p>
      )}
    </div>
  );
}