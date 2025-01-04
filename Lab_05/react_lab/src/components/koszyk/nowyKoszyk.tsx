import React from 'react';
import Produkt from './produkt';

const NowyKoszyk: React.FC = () => {
  const produkty = ['Jabłko', 'Gruszka', 'Kiwi', 'Pomarańcza', 'Truskawki'];

  return (
    <div>
      <h3>Nowy Koszyk</h3>
      {produkty.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
};

export default NowyKoszyk;