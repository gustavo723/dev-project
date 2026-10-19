import React, { useState } from 'react';

export default function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Saisissez un texte..." 
      />
      <p>Vous avez écrit : {inputValue}</p>
    </div>
  );
}