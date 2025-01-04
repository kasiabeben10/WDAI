import React, { useState } from 'react';

const Aktualizacja: React.FC = () => {
  const [produkt, setProdukt] = useState({ nazwa: 'Pomidor', cena: 50 });

  type Produkt = {
    nazwa: string;
    cena: number;
  };

  const zmienCene = () => {
    setProdukt((prev: Produkt) => ({ ...prev, cena: 100 }));
  };

  return (
    <div>
      <p>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </p>
      <button onClick={zmienCene}>Zmień cenę</button>
    </div>
  );
};

export default Aktualizacja;