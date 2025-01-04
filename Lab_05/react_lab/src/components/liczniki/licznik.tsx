// v1
// import React, { useState } from 'react';

// const Licznik: React.FC = () => {
//   const [licznik, setLicznik] = useState(0);

//   return (
//     <div>
//       <p>Licznik: {licznik}</p>
//       <button onClick={() => setLicznik(licznik + 1)}>Dodaj</button>
//     </div>
//   );
// };

// export default Licznik;

//v2
import React, { useState } from 'react';

const Licznik: React.FC = () => {
  const [licznik, setLicznik] = useState(0);

  const handleAdd = () => {
    setLicznik((oldValue) => oldValue + 1);
  }

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <button onClick={handleAdd}>Dodaj</button>
    </div>
  );
};

export default Licznik;