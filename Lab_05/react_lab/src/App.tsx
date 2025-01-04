// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Koszyk from "./components/koszyk/koszyk"
import NowyKoszyk from "./components/koszyk/nowyKoszyk"
import Licznik from "./components/liczniki/licznik"
import NowyLicznik from "./components/liczniki/nowyLicznik"
import Formularz from './components/formularze/formularz';
import Haslo from './components/formularze/haslo';
import Logowanie from './components/formularze/logowanie';
import Ternary from './components/inne/ternary'
import Aktualizcja from './components/inne/aktualizacja'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <Koszyk />
        <NowyKoszyk />
        <Licznik />
        <NowyLicznik />
        <Formularz />
        <Haslo />
        <Logowanie />
        <Ternary />
        <Aktualizcja />


      </div>
    </>
  )
}

export default App
