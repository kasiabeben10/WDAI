import React from 'react';
import Produkt from './produkt';

const Koszyk: React.FC = () => {
  return (
    <div>
      <h3>Koszyk</h3>
      <Produkt nazwa="Jabłko" />
      <Produkt nazwa="Gruszka" />
      <Produkt nazwa="Kiwi" />
      <Produkt nazwa="Pomarańcza" />
      <Produkt nazwa="Truskawki" />
    </div>
  );
};

export default Koszyk;