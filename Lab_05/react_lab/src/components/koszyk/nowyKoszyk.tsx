import React from 'react';
import Produkt from './produkt';

const NowyKoszyk: React.FC = () => {
  const produkty = ['Jabłko', 'Gruszka', 'Kiwi', 'Pomarańcza', 'Truskawki'];

  return (
    <div>
      <h1>Nowy Koszyk</h1>
      {produkty.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
};

export default NowyKoszyk;