import React, { useState } from 'react';

const Formularz: React.FC = () => {
  const [tekst, setTekst] = useState('');

  return (
    <div>
      <input
        type="text"
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
        placeholder="Wpisz tekst"
      />
      <div>{tekst}</div>
    </div>
  );
};

export default Formularz;