import React, { useState } from 'react';

const Logowanie: React.FC = () => {
  const [nazwaUzytkownika, setNazwaUzytkownika] = useState('');
  const [haslo, setHaslo] = useState('');
  const [powtorzHaslo, setPowtorzHaslo] = useState('');

  const isDisabled = !nazwaUzytkownika || !haslo || !powtorzHaslo;

  const handleSubmit = () => {
    if (haslo !== powtorzHaslo) {
      alert('Hasła nie są zgodne');
    } else {
      alert('Zalogowano poprawnie');
    }
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    onSubmit={handleSubmit}>
      <label>Nazwa użytkownika: </label>
        <input
          type="text"
          value={nazwaUzytkownika}
          onChange={(e) => setNazwaUzytkownika(e.target.value)}
        />
        <label>Hasło: </label>
        <input
          type="text"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />
        <label>Powtórz Hasło: </label>
        <input
          type="text"
          value={powtorzHaslo}
          onChange={(e) => setPowtorzHaslo(e.target.value)}
        />
        <button type="submit" disabled={isDisabled}>Logowanie</button>
    </form>
  );
};

export default Logowanie;