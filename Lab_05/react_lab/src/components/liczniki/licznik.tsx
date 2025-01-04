import React, { useState } from 'react';

const Licznik: React.FC = () => {
  const [licznik, setLicznik] = useState(0);

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <button onClick={() => setLicznik(licznik + 1)}>Dodaj</button>
    </div>
  );
};

export default Licznik;