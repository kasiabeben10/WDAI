import React from 'react';

const Ternary: React.FC = () => {
  const a = true;
  const b = false;

  return (
    <div>
      <p>Stwierdzenie a jest {a ? 'prawdziwe' : 'fałszywe'}</p>
      <p>Stwierdzenie b jest {b ? 'prawdziwe' : 'fałszywe'}</p>
    </div>
  );
};

export default Ternary;