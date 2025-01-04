import React from "react";
import { Student } from "./Student.type";
import { useState } from "react";

const Dodawanie: React.FC<{ dodaj: (student: Student) => void }> = ({ dodaj }) => {
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [rocznik, setRocznik] = useState<number>(0);

    const dodajStudenta = (event: React.FormEvent) => {
        event.preventDefault();
        if (!imie || !nazwisko || isNaN(rocznik)||rocznik < 0){
            alert('Wprowadź poprawne dane');
            return;
        }
        dodaj({ imie, nazwisko, rocznik });
        setImie('');
        setNazwisko('');
        setRocznik(0);
    };

    return (
        <form onSubmit={dodajStudenta} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>Imię:</label>
            <input type="text" value={imie} onChange={(e) => setImie(e.target.value)} placeholder="Imię" />
            <label>Nazwisko:</label>
            <input type="text" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} placeholder="Nazwisko" />
            <label>Rocznik:</label>
            <input type="number" value={rocznik} onChange={(e) => setRocznik(parseInt(e.target.value))} placeholder="Rocznik" />
            <button type="submit">Dodaj studenta</button>
        </form>
    );
};

export default Dodawanie;