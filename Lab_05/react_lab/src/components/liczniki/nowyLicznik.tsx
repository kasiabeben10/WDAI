import React, { useState } from 'react';
import Przycisk from './przycisk';

const NowyLicznik: React.FC = () => {
  const [licznik, setLicznik] = useState(0);

  const increment = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <Przycisk onClick={increment} />
    </div>
  );
};

export default NowyLicznik;