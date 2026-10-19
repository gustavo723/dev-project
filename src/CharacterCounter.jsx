import React, { useState } from 'react';

export default function CharacterCounter() {
  const [content, setContent] = useState('');
  const limit = 100;

  const isOverLimit = content.length > limit;

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        rows="5" 
        cols="35"
        placeholder="Tapez votre message ici..."
      />
      <p style={{ color: isOverLimit ? 'red' : 'black' }}>
        Nombre de caractères : {content.length}
      </p>
    </div>
  );
}