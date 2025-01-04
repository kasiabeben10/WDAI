import React, { useState } from 'react';

const Haslo: React.FC = () => {
  const [haslo, setHaslo] = useState('');
  const [powtorzHaslo, setPowtorzHaslo] = useState('');

  const komunikat = () => {
    if (!haslo && !powtorzHaslo) return 'Proszę wprowadzić hasło';
    if (haslo !== powtorzHaslo) return 'Hasła nie są zgodne';
    return '';
  };

  return (
    <div>
      <div>
        <label>Hasło: </label>
        <input
          type="text"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />
      </div>
      <div>
        <label>Powtórz Hasło: </label>
        <input
          type="text"
          value={powtorzHaslo}
          onChange={(e) => setPowtorzHaslo(e.target.value)}
        />
      </div>
      <div>{komunikat()}</div>
    </div>
  );
};

export default Haslo;