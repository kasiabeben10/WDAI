import './App.css'
import Koszyk from "./components/koszyk/koszyk"
import NowyKoszyk from "./components/koszyk/nowyKoszyk"
import { default as Licznik1 } from "./components/liczniki/licznik"
import NowyLicznik from "./components/liczniki/nowyLicznik"
import Formularz from './components/formularze/formularz';
import Haslo from './components/formularze/haslo';
import Logowanie from './components/formularze/logowanie';
import Ternary from './components/inne/ternary'
import Aktualizcja from './components/inne/aktualizacja'
import Studenci from './components/studenci/Studenci'
import StudentManager from './components/studenci/StudentManager'
import Licznik from './components/efekty/Licznik'
import Tytul from './components/efekty/Tytul'
import Odliczanie from './components/efekty/Odliczanie';
import Komentarze from './components/produkty/Komentarze';


function App() {
  return (
    <>
      <div>
        <h2>Zadanie 1.1 Koszyk</h2>
        <Koszyk />
        <h2>Zadanie 1.2 Nowy Koszyk</h2>
        <NowyKoszyk />
        <h2>Zadanie 2.1 Licznik</h2>
        <Licznik1 />
        <h2>Zadanie 2.2 Nowy Licznik</h2>
        <NowyLicznik />
        <h2>Zadanie 3.1 Formularz</h2>
        <Formularz />
        <h2>Zadanie 3.2 Hasło</h2>
        <Haslo />
        <h2>Zadanie 3.3 Logowanie</h2>
        <Logowanie />
        <h2>Zadanie 4.1 Ternary</h2>
        <Ternary />
        <h2>Zadanie 4.2 Aktualizacja</h2>
        <Aktualizcja />
        <h2>Zadanie 5.1 Studenci</h2>
        <Studenci />
        <h2>Zadanie 5.2 StudentManager</h2>
        <StudentManager />
        <h2>Zadanie 6.1 Licznik</h2>
        <Licznik />
        <h2>Zadanie 6.2 Tytul</h2>
        <Tytul />
        <h2>Zadanie 6.3 Odliczanie</h2>
        <Odliczanie />
        <h2>Zadanie 7 Komentarze</h2>
        <Komentarze />
      </div>
    </>
  )
}

export default App
